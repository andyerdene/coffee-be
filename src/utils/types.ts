export type Product = {
  id: string; //user id
  imageUrl: string;
  name: string;
  price: {
    smalll: number;
    medium: number;
    large: number;
  };
  description: string;
  category: string; // category id
  size: "small" | "medium" | "large";
};
