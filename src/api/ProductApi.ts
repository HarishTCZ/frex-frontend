import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export interface Product {
  id: number;
  productname: string;
  price: number;
  category: string;
}

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${API_BASE_URL}/api/product/findAll`);
  return response.data;
};
