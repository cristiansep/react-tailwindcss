
   export const getApi = async () => {

    const url = `https://rickandmortyapi.com/api/character/`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    const datos = results.map((data) => {
      return {
        id: data.id,
        img: data?.image,
        name: data.name,
        status: data.status,
        especie: data.species,
        genero: data.gender,
        origen: data.origin.name
      };
    });
    // setImages(datos);
    // console.log(datos);
    return datos;
};