import React from 'react';
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';

export default function Preloader() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/LogoLarge.png')} />
      <ActivityIndicator style={styles.loader} size="small" color="#000000" />
      <Text style={styles.copyright}>&copy;DisneyAdventures</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#282729',
  },
  loader: {
    position: 'absolute',
    bottom: 150,
  },
  copyright: {
    position: 'absolute',
    bottom: 30,
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 18,
    alignItems: 'center',
    textAlign: 'center',
    color: '#F04',
  },
  logo: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
  },
});
