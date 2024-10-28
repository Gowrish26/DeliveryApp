import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const PincodeInput = ({ onPincodeSubmit }) => {
  const [pincode, setPincode] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter pincode"
        value={pincode}
        onChangeText={(text) => setPincode(text)}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={() => onPincodeSubmit(pincode)} />
    </View>
  );
};

export default PincodeInput;
