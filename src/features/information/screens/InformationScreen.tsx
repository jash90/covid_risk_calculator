import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

const InformationScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.title}>
        {`Podstawowe informacje o ochronie przeciw
        \nwirusowi SARS-CoV-2
        \n1. Aby zapobiec rozprzestrzenianiu się COVID-19:
        \n2. Utrzymuj bezpieczną odległość od innych osób (co najmniej 1 metr), nawet jeśli nie wydają się chore.
        \n3. Noś maskę poza domem, szczególnie w pomieszczeniach lub gdy zachowanie dystansu nie jest możliwe.
        \n4. Staraj się przebywać w otwartych, dobrze wentylowanych pomieszczeniach, unikaj zamkniętych przestrzeni. Gdy jesteś w pomieszczeniu, otwórz okno.
        \n5. Często myj ręce. Używaj wody z mydłem lub środka dezynfekującego na bazie alkoholu.
        \n6. Zaszczep się, gdy tylko będziesz mieć taką możliwość. Postępuj zgodnie z lokalnymi wytycznymi dotyczącymi szczepień.
        \n7. Gdy kaszlesz lub kichasz, zakrywaj nos i usta wewnętrzną stroną łokcia lub chusteczką.
        \n8. Jeśli źle się czujesz, zostań w domu.`}
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
