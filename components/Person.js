import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import Header from './Header.js';

export default function Person({ navigation, route }) {
  const {
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
  } = route.params;

  const renderValue = (value) => {
    return value ? value : 'Não possui';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.topMain}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.card}>
          <Image style={styles.photo} source={{ uri: img }} />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.paragraph}>
            <Text style={styles.topico}>Filmes: </Text>
            {renderValue(films)}
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.topico}>Curta-metragem: </Text>
            {renderValue(shortFilms)}
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.topico}>Programas de TV: </Text>
            {renderValue(tvShows)}
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.topico}>Jogos: </Text>
            {renderValue(videoGames)}
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.topico}>Atrações do parque: </Text>
            {renderValue(parkAttractions)}
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.topico}>Aliados: </Text>
            {renderValue(allies)}
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.topico}>Inimigos: </Text>
            {renderValue(enemies)}
          </Text>
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
  topMain: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    margin: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: '#D9D9D9',
    marginBottom: 20,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  photo: {
    width: '90%',
    height: '90%',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  descriptionContainer: {
    width: '80%',
    height: '50%',
    backgroundColor: '#201E20',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: '#555',
    textAlign: 'left',
  },
  topico: {
    color: '#f04',
    fontSize: 17,
  },
});
