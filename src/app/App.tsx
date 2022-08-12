import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import Test from './components/TestComponent';
import { transformer, trpc } from './utils/trpc';

const { manifest } = Constants;

const localhost = `http://${manifest!.debuggerHost?.split(':').shift()}:3000`;

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: `${localhost}/api/trpc`,

      async headers() {
        return {};
      },
      transformer
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <Test />
          <StatusBar style='auto' />
        </View>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
