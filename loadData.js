import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';

const loadDataFromCSV = async (fileUri) => {
  const response = await FileSystem.readAsStringAsync(fileUri);
  return new Promise((resolve) => {
    Papa.parse(response, {
      header: true,
      complete: (results) => resolve(results.data),
    });
  });
};

export const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await loadDataFromCSV(FileSystem.documentDirectory + 'assets/products.csv');
      const stockData = await loadDataFromCSV(FileSystem.documentDirectory + 'assets/Stock.csv');
      setProducts(productsData);
      setStock(stockData);
    };
    loadProducts();
  }, []);

  return { products, stock };
};

export const usePincodeData = () => {
  const [pincodes, setPincodes] = useState([]);

  useEffect(() => {
    const loadPincodes = async () => {
      const pincodeData = await loadDataFromCSV(FileSystem.documentDirectory + 'assets/Pincodes.csv');
      setPincodes(pincodeData);
    };
    loadPincodes();
  }, []);

  return pincodes;
};
