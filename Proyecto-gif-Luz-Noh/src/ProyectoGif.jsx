import { useState } from 'react';
import { AddCategory, GifGrid } from "./componentes";
export const ProyectoGif = () => {
  
  
  const [categories, setCategories] = useState(["Dragon ball gt"]);
  
  const onAddCategory = (newCategory) => {
   
    //función
    if (categories.includes(newCategory)) return;
    // Si newCategory no está en la lista de categorías, la agregamos al principio de la
    //lista
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>ProyectoGifLuznoh</h1>
      
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}
export default ProyectoGif