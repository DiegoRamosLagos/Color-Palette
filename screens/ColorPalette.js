import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({route}) => {
  const {colors, paletteName} = route.params;
  return (
      <View style={styles.container}>
        <FlatList
          data={colors}
          keyExtractor={(item) => item.hexCode}
          renderItem={({item}) => (
            <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
          )}
          ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;
