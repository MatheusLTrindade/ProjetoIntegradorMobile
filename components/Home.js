import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Header from './Header.js';

export default function Home({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

  const handleSearch = () => {
    setIsSearchButtonClicked(true);
  };

  useEffect(() => {
    if (isSearchButtonClicked) {
      const formattedText = encodeURIComponent(searchText);

      if (formattedText) {
        fetch(`https://api.disneyapi.dev/character?name=${formattedText}`, {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.data.length > 0) {
              const character = result.data[0];
              const characterData = {
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
              navigation.navigate('Person', characterData);
            } else {
              alert('Personagem não localizado');
            }
          })
          .catch((error) => console.error(error));
        setIsSearchButtonClicked(false);
      }
    }
  }, [searchText, isSearchButtonClicked, navigation]);

  const titleText = 'Bem Vindo';

  const bodyText =
    '\nO Disney Adventures, foi desenvolvido para fãs da Disney que desejam conhecer melhor seus personagens favoritos e aprofundar-se no universo mágico da Disney.\n\nPara pesquisar por um personagem específico digite seu nome ou navegue pela lista de personagens. Uma vez que o personagem for selecionado será apresentado uma página com a foto do personagem, juntamente com a lista de todos os filmes em que o personagem apareceu,  jogos em que apareceu, bem como parques temáticos e atrações que apresentam o personagem. e muito mais.\n\nDesenvolvedores:\n\nMatheus Lopes Trindade\nJhonatan Ribeiro Dos Santos\nMurilo Lima Dos Santos\nRonald Araujo\nVinicius Carvalho';

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do personagem"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            style={styles.icon}
            source={require('../assets/icon_search.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Image
            style={styles.watermark}
            source={require('../assets/watermark.png')}
          />
          <Text style={styles.title}>{titleText}</Text>
          <Text style={styles.paragraph}>{bodyText}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#282729',
  },
  inputContainer: {
    position: 'relative',
    width: '80%',
    margin: 30,
  },
  input: {
    height: 50,
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 20,
    backgroundColor: '#D9D9D9',
    elevation: 10,
    color: '#222',
  },
  icon: {
    position: 'absolute',
    right: 7,
    bottom: 6,
    height: 24,
    width: 20,
  },
  descriptionContainer: {
    position: 'relative',
    height: '80%',
    width: '80%',
    backgroundColor: '#201E20',
    elevation: 10,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  watermark: {
    position: 'absolute',
    height: 250,
    width: 250,
    top: '25%',
  },
  title: {
    fontSize: 35,
    color: '#D9D9D9',
    marginTop: 20,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'justify',
    alignItems: 'center',
    color: '#D9D9D9',
    margin: 20,
  },
});
