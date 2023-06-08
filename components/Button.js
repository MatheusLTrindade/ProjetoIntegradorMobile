import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({
  name,
  id,
  img,
  films,
  shortFilms,
  tvShows,
  videoGames,
  parkAttractions,
  allies,
  enemies,
  closeMenu,
  navigation,
}) {
  const handlePress = () => {
    closeMenu();
    navigation.navigate('Person', {
      name: name,
      id: id,
      img: img,
      films: films,
      shortFilms: shortFilms,
      tvShows: tvShows,
      videoGames: videoGames,
      parkAttractions: parkAttractions,
      allies: allies,
      enemies: enemies,
    });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#201E20',
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    boxShadow: '0 0 5px #000',
  },
  buttonText: {
    color: '#D9D9D9',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
