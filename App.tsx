import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchContacts,
  createContact,
  removeContact,
} from './src/actions/contactActions';
import {Contact} from './src/types';

const App = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');
  const contacts = useSelector((state: Contact[]) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const handleAddContact = () => {
    const newContact: Contact = {
      firstName: firstname,
      lastName: lastname,
      age: parseInt(age),
      photo: photo,
    };
    dispatch(createContact(newContact));
    setFirstname('');
    setLastname('');
    setAge('');
  };

  const handleDeleteContact = (id: string) => {
    dispatch(removeContact(id));
  };

  const renderItem = ({item}: {item: Contact}) => (
    <View style={styles.contactItem}>
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>
          {item.firstName} {item.lastName}
        </Text>
        <Text>{item.age}</Text>
      </View>
      <Button title="Delete" onPress={() => handleDeleteContact(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstname}
          onChangeText={text => setFirstname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastname}
          onChangeText={text => setLastname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={age}
          onChangeText={text => setAge(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Photo"
          value={photo}
          onChangeText={text => setPhoto(text)}
        />
        <Button title="Add Contact" onPress={handleAddContact} />
      </View>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
