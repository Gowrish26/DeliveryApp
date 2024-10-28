import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const ProductList = ({ products, onSelectProduct }) => (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => onSelectProduct(item)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )}
  />
);

export default ProductList;
