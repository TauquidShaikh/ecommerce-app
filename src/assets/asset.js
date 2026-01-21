import logoImage from './logo.jpeg';


export const ASSETS = {
  logo: logoImage,
};


export const products = [
    {
        id: 1,
        name: "Product A",
        price: 29.99,
        description: "Description for Product A",
        size: ["M", "S", "L"],
        data: "2024-01-15",
        image: "https://via.placeholder.com/150",
        category: "Clothing",
        subcategory: "T-Shirts",
        bestseller: true

    },
    {
        id: 2,
        name: "Product B",
        price: 39.99,
        description: "Description for Product B",
        size: "L",
        color: "Blue",
        image: "https://via.placeholder.com/150"
    }
]