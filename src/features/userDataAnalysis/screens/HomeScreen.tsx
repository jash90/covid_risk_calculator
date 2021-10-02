import React from 'react';
import {Button, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const navigateToInformation = () => {
    // @ts-ignore
    navigation.navigate('Information');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title={'nav'} onPress={navigateToInformation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    flex: 1,
    textAlign: 'left',
    marginVertical: 8,
    marginLeft: 16,
    alignItems: 'flex-end',
  },
  title_2: {
    flex: 1,
    textAlign: 'left',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    textAlign: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  button_Home: {
    borderRadius: 12,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  container_1: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
