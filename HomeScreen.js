import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ProductList from '../components/ProductList';
import PincodeInput from '../components/PincodeInput';
import CountdownTimer from '../components/CountdownTimer';
import { useProductData, usePincodeData } from '../utils/loadData';

const HomeScreen = () => {
  const { products, stock } = useProductData();
  const pincodes = usePincodeData();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pincode, setPincode] = useState('');
  const [deliveryProvider, setDeliveryProvider] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handlePincodeSubmit = (enteredPincode) => {
    setPincode(enteredPincode);
    const provider = pincodes.find((p) => p.pincode === enteredPincode)?.provider;
    if (provider) {
      setDeliveryProvider(provider);
    } else {
      alert('Invalid pincode.');
    }
  };

  const calculateEstimatedDelivery = () => {
    // Example logic for delivery date estimation based on provider
    if (deliveryProvider === 'Provider A') {
      return 'Same-day delivery if ordered before 5 PM';
    } else if (deliveryProvider === 'Provider B') {
      return 'Same-day if ordered before 9 AM, next-day otherwise';
    } else {
      return 'Delivery within 2-5 days';
    }
  };

  return (
    <View>
      <Text>Select a Product</Text>
      <ProductList products={products} onSelectProduct={handleProductSelect} />
      <PincodeInput onPincodeSubmit={handlePincodeSubmit} />
      {selectedProduct && <Text>Selected Product: {selectedProduct.name}</Text>}
      {deliveryProvider && (
        <Text>Estimated Delivery: {calculateEstimatedDelivery()}</Text>
      )}
      {deliveryProvider === 'Provider A' || deliveryProvider === 'Provider B' ? (
        <CountdownTimer timeInSeconds={3600} />
      ) : null}
    </View>
  );
};

export default HomeScreen;
