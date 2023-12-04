// Definimos una función asíncrona getGifs que toma una categoría como argumento
export const getGifs = async( category ) => {// Construimos la URL para la API de Giphy con la categoría y un límite de 10
    //imágenes
    const url =
    `https://api.giphy.com/v1/gifs/search?api_key=pw7JD7CCtn7N1zcVDVGOZRT3cumGyj2f&q=${
    category }&limit=10`;
    // Hacemos una petición a la API de Giphy
    const resp = await fetch( url );

    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
    }));

    return gifs;
    }