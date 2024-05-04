import { useParams } from 'react-router-dom';
import { data } from '../data';
import styles from './PokemonDetail.module.css';

/*
  *코드 설명
  1. PokemonDetail 컴포넌트는 id값을 받아와서 해당 id값에 해당하는 포켓몬 데이터를 보여주는 컴포넌트입니다.
  2. useParams() 함수를 사용하여 id값을 받아옵니다.
    - App.tsx에서 Route 이용할때 path="/pokemon/:id"로 설정해놓았기 때문에, useParams() 함수를 사용하여 id값을 받아올 수 있습니다.
  3. data 배열을 사용하여 id값에 해당하는 포켓몬 데이터를 가져옵니다.
  4. 가져온 포켓몬 데이터를 화면에 보여줍니다.
    - 포켓몬의 이름, 키, 몸무게, 타입 등의 정보를 테이블에 보여줍니다.
    - map 함수를 사용하여 포켓몬 데이터를 테이블에 보여줍니다.
      - Object.entries() 함수를 사용하여 포켓몬 데이터를 배열로 변환합니다.
      - 배열로 변환된 포켓몬 데이터를 map 함수를 사용하여 테이블에 보여줍니다.
        - key: 포켓몬 데이터의 key값 (ex. name, height, weight, types)
        - value: 포켓몬 데이터의 value값 (ex. Pikachu, 4, 60, electric)
*/

export default function PokemonDetail() {
  const id = Number(useParams().id);
  const pokemon = data[id - 1];

  return (
    <div>
      <div className={styles['img']}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={pokemon.name}
        />
      </div>
      <h2>{pokemon.name}</h2>
      <table>
        <tbody>
          {Object.entries(pokemon).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
