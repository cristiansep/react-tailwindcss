import React, { useEffect, useState } from 'react';
import {getApi} from '../helpers/getApi';

const Card = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getApi().then(setImages);
  }, []);

//   const getApi = async () => {
//     const url = `https://rickandmortyapi.com/api/character/`;
//     const resp = await fetch(url);
//     const { results } = await resp.json();

//     const datos = results.map((data) => {
//       return {
//         id: data.id,
//         img: data?.image,
//         name: data.name,
//       };
//     });
//     setImages(datos);
//     console.log(datos);
//   };

  return (
    <>
      {images.map(({ id, name, img, status, especie, genero, origen }) => (
        <div key={id} className="rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src={img} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>

            <ul className="list-disc">
              <li>Estado: {status}</li>
              <li>Especie: {especie}</li>
              <li>Genero: {genero}</li>
              <li> Origen: {origen}</li>
            </ul>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card
