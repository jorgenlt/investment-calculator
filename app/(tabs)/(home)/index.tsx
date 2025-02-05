import { View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function Index() {
  const [initialValue, setInitialValue] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [duration, setDuration] = useState("");
  const [monthlyDeposit, setMonthlyDeposit] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInitialValue}
        value={initialValue}
        placeholder="Initial value"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setInterestRate}
        value={interestRate}
        placeholder="Interest rate"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDuration}
        value={duration}
        placeholder="Duration (years)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setMonthlyDeposit}
        value={monthlyDeposit}
        placeholder="Montly deposit"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyConent: "center",
    // alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
