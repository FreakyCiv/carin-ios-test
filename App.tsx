import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SPLASH_DURATION_MS = 2000;

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timeoutId);
  }, []);

  if (showSplash) {
    return (
      <SafeAreaView style={styles.splashScreen}>
        <StatusBar barStyle="light-content" />
        <View testID="splash-screen" style={styles.splashContent}>
          <Text style={styles.splashIcon}>🚗</Text>
          <Text style={styles.splashTitle}>TriMiLo</Text>
          <Text style={styles.splashSubtitle}>Mileage logbook</Text>
        </View>
      </SafeAreaView>
    );
  }

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
  splashScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E3A8A',
  },
  splashContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  splashIcon: {
    fontSize: 72,
    marginBottom: 18,
  },
  splashTitle: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 1,
  },
  splashSubtitle: {
    color: '#BFD9FF',
    fontSize: 16,
    marginTop: 10,
  },
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