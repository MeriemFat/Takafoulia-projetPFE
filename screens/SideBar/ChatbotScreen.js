import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import {baseUrl} from '../../constants/api-url'; 
const ChatbotScreen = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleGetAnswer = async () => {
    try {
      const res = await axios.post(`${baseUrl}/getAnswer`, { question }); // Mettez l'adresse IP correcte de votre serveur
      setResponse(res.data.reponse);
    } catch (error) {
      console.error('Error fetching answer:', error);
      setResponse('Error fetching answer');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Poser Votre Question:</Text>
      <TextInput
        style={styles.input}
        value={question}
        onChangeText={setQuestion}
        placeholder="Enter your question"
      />
      <Button title="Get Answer" onPress={handleGetAnswer} />
      {response ? <Text style={styles.response}>{response}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
  },
  response: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatbotScreen;
