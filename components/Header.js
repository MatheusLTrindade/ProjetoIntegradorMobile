import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

import MenuBar from './MenuBar.js';

export default function Header({ navigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    Animated.timing(menuAnimation, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuTranslateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });

  const logoPress = () => {
    closeMenu();
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={logoPress}>
        <Image
          style={styles.logo}
          source={require('../assets/LogoSmall.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleMenu}>
        {isMenuOpen ? (
          <Image
            style={styles.logo}
            source={require('../assets/CloseMenuBar.png')}
          />
        ) : (
          <Image
            style={styles.logo}
            source={require('../assets/MenuBar.png')}
          />
        )}
      </TouchableOpacity>
      {isMenuOpen && (
        <Animated.View
          style={[
            styles.menu,
            { transform: [{ translateX: menuTranslateX }] },
          ]}>
          <MenuBar closeMenu={closeMenu} navigation={navigation} />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#F04',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    zIndex: 2,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  menu: {
    position: 'absolute',
    top: 35,
    width: '100%',
  },
});
