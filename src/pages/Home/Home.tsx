import React from 'react';
import {Button, Text, View} from 'react-native';
import {useIsConnected, checkInternetConnection} from 'react-native-offline';

import styles from './Home.styles';

enum ConnectionStatus {
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  UNKNOWN = 'UNKNOWN',
}

export const Home: React.FC = () => {
  const isConnected = useIsConnected();

  const [manualCheckConnection, setManualCheckConnection] =
    React.useState<ConnectionStatus>(ConnectionStatus.UNKNOWN);

  async function handleCheckConnectionPress() {
    const isConnectedManual = await checkInternetConnection();

    if (isConnectedManual) {
      setManualCheckConnection(ConnectionStatus.CONNECTED);
    } else if (isConnectedManual === null) {
      setManualCheckConnection(ConnectionStatus.UNKNOWN);
    } else {
      setManualCheckConnection(ConnectionStatus.DISCONNECTED);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Is the app connected?</Text>

      <Text style={styles.text}>
        hook:{' '}
        {isConnected
          ? ConnectionStatus.CONNECTED
          : ConnectionStatus.DISCONNECTED}
      </Text>

      <Text style={styles.text}>manual: {manualCheckConnection}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Check connection manually"
          onPress={handleCheckConnectionPress}
        />
      </View>
    </View>
  );
};
