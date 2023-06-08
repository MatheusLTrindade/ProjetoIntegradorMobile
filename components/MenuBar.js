import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';

import Button from './Button.js';

export default function MenuBar({ closeMenu, navigation }) {
  const [buttonData, setButtonData] = useState([]);

  useEffect(() => {
    fetch('https://api.disneyapi.dev/character?pageSize=7438', {
      method: 'GET',
    })
      .then((response) => {
        response.json().then((result) => {
          const characterData = result.data.map((character) => {
            return {
              name: character.name,
              id: character._id,
              img: character.imageUrl,
              films: character.films.join(', '),
              shortFilms: character.shortFilms.join(', '),
              tvShows: character.tvShows.join(', '),
              videoGames: character.videoGames.join(', '),
              parkAttractions: character.parkAttractions.join(', '),
              allies: character.allies.join(', '),
              enemies: character.enemies.join(', '),
            };
          });
          setButtonData((prevData) => {
            const newData = [...prevData, ...characterData];
            newData.sort((a, b) => a.name.localeCompare(b.name));
            return newData;
          });
        });
      })
      .catch((error) => console.error(error));
  }, []);

  const renderMenuContent = () => {
    if (buttonData.length === 0) {
      return <ActivityIndicator size="small" color="#FFFFFF" />;
    }

    return buttonData.map((character, index) => (
      <Button
        key={index}
        closeMenu={closeMenu}
        navigation={navigation}
        id={character.id}
        name={character.name}
        img={character.img}
        films={character.films}
        shortFilms={character.shortFilms}
        tvShows={character.tvShows}
        videoGames={character.videoGames}
        parkAttractions={character.parkAttractions}
        allies={character.allies}
        enemies={character.enemies}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {renderMenuContent()}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F04',
    flex: 1,
    paddingVertical: 40,
  },
  menuContainer: {
    height: '90%',
    width: '80%',
    backgroundColor: '#0005',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
});
