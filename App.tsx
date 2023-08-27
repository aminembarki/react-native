import React from 'react';
import { Dimensions } from 'react-native';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';


const screenWidth = Math.round(Dimensions.get('window').width);

type Product = {
  id: string;
  name: string;
  image: string;
  store: string;
  price: number;
  discount?: number;
};

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Laptop XYZ 123',
    image: 'https://via.placeholder.com/150',
    store: 'EStore',
    price: 1200,
    discount: 10,
  },
  {
    id: '2',
    name: 'Smartphone ABC 456',
    image: 'https://via.placeholder.com/150',
    store: 'TechShop',
    price: 900,
  },
  {
    id: '3',
    name: 'Smartwatch MNO 789',
    image: 'https://via.placeholder.com/150',
    store: 'WatchWorld',
    price: 250,
    discount: 5,
  },
  {
    id: '4',
    name: 'Tablet UVW 101',
    image: 'https://via.placeholder.com/150',
    store: 'GadgetGuru',
    price: 400,
  },
  {
    id: '5',
    name: 'Earphones DEF 202',
    image: 'https://via.placeholder.com/150',
    store: 'EStore',
    price: 50,
  },
];

function ProductItem({item}: {item: Product}) {
  return (
    <View style={styles.productItem}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productStore}>{item.store}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      {item.discount && (
        <Text style={styles.productDiscount}>-{item.discount}%</Text>
      )}
    </View>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuIcon}>
        <Image source={require('./assets/shopping-list.png')} style={{width: 20, height: 20}} />
      </TouchableOpacity>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for products..."
      />

      {/* Carousels */}
      <Carousel
        layout="default"
        data={mockProducts}
        sliderWidth={screenWidth}
        itemWidth={300}
        renderItem={ProductItem}
        loop={true}
        title="Popular Products"
      />

      <Carousel
        layout="default"
        data={mockProducts}
        sliderWidth={screenWidth}
        itemWidth={300}
        renderItem={ProductItem}
        loop={true}
        title="Best Sells"
      />

      <Carousel
        layout="default"
        data={mockProducts}
        sliderWidth={screenWidth}
        itemWidth={300}
        renderItem={ProductItem}
        loop={true}
        title="Products You're Interested In"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuIcon: {
    marginTop: 16,
    marginLeft: 16,
  },
  searchBar: {
    marginHorizontal: 16,
    marginTop: 8,
    padding: 12,
    borderRadius: 8,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  productItem: {
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
  },
  productStore: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    marginTop: 4,
  },
  productDiscount: {
    fontSize: 16,
    color: 'red',
    marginTop: 4,
  },
});

export default App;
