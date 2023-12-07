import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Box from './src/components/Box';

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => (
          <Box value={item} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10
  },
  column: {
    gap: 10
  },
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#9b4931",
    borderWidth: StyleSheet.hairlineWidth
  },
  text: {
    color: "#9b4931",
    fontSize: 60,
  }
});
