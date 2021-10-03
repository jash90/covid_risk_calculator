import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

const InformationScreen = () => {
  return (
    <ScrollView contentContainerStyle={{padding: 16}}>
      <Text style={styles.title}>
        {`Podstawowe informacje o ochronie przeciw
        \nwirusowi SARS-CoV-2
        \n1. Wear a mask.
        \n2. Stay 6 feet away from others.
        \n3. Avoid crowds and poorly ventilated spaces.
        \n4. Wash your hands often.
        \n5. Cover coughs and sneezes.
        \n6. Monitor your health daily and be alert for symptoms.
        \n7. Clean high touch surfaces daily.
        \n8. Get Vaccinated`}
      </Text>
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
});

export default InformationScreen;
