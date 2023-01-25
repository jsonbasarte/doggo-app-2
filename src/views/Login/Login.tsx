import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Input, Button, Text } from "@ui-kitten/components";
import { Icon } from "@ui-kitten/components";

const Login = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.text} category="h1">
          Doggo App <Icon style={styles.icon} fill="#8F9BB3" name="star" />
        </Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <Input
          style={styles.input}
          placeholder="Username"
          size="large"
          value={username}
          onChangeText={(nextValue) => setUsername(nextValue)}
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <Input
          style={styles.input}
          placeholder="Password"
          size="large"
          value={password}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
      </View>
      <View style={{ marginTop: 100 }}>
        <Button
          onPress={() => navigation.navigate("Dashboard", { name: "Jane" })}
        >
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    margin: 2,
    textAlign: "center",
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default Login;
