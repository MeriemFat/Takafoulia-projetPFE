import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ChatbotScreen from './ChatbotScreen'; // Assurez-vous d'utiliser le bon chemin

const SideBar = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const services = [
    { title: 'Contrat', iconName: 'document-outline', screenName: 'Contrat' },
    { title: 'Sinistre', iconName: 'alert-circle-outline', screenName: 'Sinistre' },
    { title: 'Quittance', iconName: 'receipt-outline', screenName: 'Quittance' },
    { title: 'Demande', iconName: 'chatbox-ellipses-outline', screenName: 'AddAvenant' },
    { title: 'Categories', iconName: 'grid-outline', screenName: 'Categories' },
    { title: 'Parinage', iconName: 'people-outline', screenName: 'ParinageScreen' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {services.map((service, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate(service.screenName)}
        >
          <Ionicons name={service.iconName} size={70} color="red" />
          <Text style={styles.cardTitle}>{service.title}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.chatbotButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="chatbubble-ellipses-outline" size={70} color="red" />
        <Text style={styles.cardTitle}>Chatbot</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ChatbotScreen />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 9,
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: '39%',
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  cardTitle: {
    marginTop: 5,
    fontSize: 17,
  },
  chatbotButton: {
    width: '39%',
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default SideBar;
