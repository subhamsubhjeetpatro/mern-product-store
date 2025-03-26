import { create } from "zustand";

const productStore = (set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Plase fill in all fields." };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    console.log(data);
    // UPDATING STATE
    set((state) => {
      return {
        products: [...state.products, data.data],
      };
    });
    return { success: true, message: "Product created successfully" };
  },
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({
      products: data.data,
    });
  },
  deleteProduct: async (pid) => {
    console.log(pid);
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));
    return { success: true, message: data.message };
  },
  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // Update the ui immediately, without needing a refresh
    set((state) => {
      return {
        products: state.products.map((product) => {
          return product._id === pid ? data.data : product;
        }),
      };
    });
    return { success: true, message: data.message };
  },
});

const useProductStore = create(productStore);

export default useProductStore;
