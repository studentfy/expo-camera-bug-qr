

import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

export default function Index() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text2}>1. Deploy on iOS</Text>
      <Text style={styles.text2}>2. Open 2 QR codes images to be scanned, there are two qr_example_*.png on the repo base folder but any will do.</Text>
      <Text style={styles.text2}>3. Scan the first and quickly scan the second While paying attention to console.logs.</Text>
      <Text style={styles.text2}>4. The error: console.logs should prove that instead of scanning the two QR codes, the first one scans twice.</Text>
      <Text style={styles.text2}>5. If you can't reproduce, try doing it a few times until it pops (No more than 10 times needed, it usually fails very fast even the first time.)</Text>
      <Text style={styles.text2}>6. Remember that the test has to be done on iOS, to me Android works.</Text>
      <Button
        title="Go to Scanner"
        // onPress={() => console.log('Button works')} // Navigates to the scanner page
        onPress={() => router.push('/scanner')} // Navigates to the scanner page
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  text2: {
    // fontSize: 24,
    marginBottom: 15,
  },
});
