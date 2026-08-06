import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />

      <View style={styles.card}>
        <Text style={styles.icon}>🚗</Text>

        <Text style={styles.title}>CARIN iOS Test</Text>

        <Text style={styles.description}>
          React Native, Xcode and TestFlight are connected.
        </Text>

        <Text style={styles.counter}>{count}</Text>

        <TouchableOpacity
          accessibilityRole="button"
          style={styles.button}
          onPress={() => setCount(value => value + 1)}>
          <Text style={styles.buttonText}>Test button</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          style={styles.resetButton}
          onPress={() => setCount(0)}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#101820',
    padding: 24,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#1d2a33',
    borderRadius: 24,
    padding: 28,
  },
  icon: {
    fontSize: 64,
    marginBottom: 14,
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    textAlign: 'center',
  },
  counter: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
    marginVertical: 28,
  },
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 14,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  resetButton: {
    borderColor: '#64748b',
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 12,
    paddingHorizontal: 24,
    paddingVertical: 14,
    width: '100%',
  },
  resetText: {
    color: '#ffffff',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default App;