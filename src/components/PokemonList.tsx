import PokemonItem from './PokemonItem';
import { data } from '../data';

/*
    *코드 설명
    1. PokemonList 컴포넌트는 data 배열을 사용하여 포켓몬 데이터를 가져옵니다.
    2. PokemonItem 컴포넌트는 포켓몬 데이터를 받아와서 화면에 보여주는 컴포넌트입니다.
    3. PokemonList 컴포넌트는 PokemonItem 컴포넌트를 사용하여 포켓몬 리스트를 보여줍니다.

    data 배열을 사용하여 포켓몬 데이터를 가져옵니다. (data 배열은 src/data.tsx 파일에 있습니다.)
    data 배열을 map을 이용해서 각 포켓몬 데이터를 PokemonItem 컴포넌트에 전달합니다.
        - 여기서 index는 map 함수에서 두번째 인자로 전달되는 인덱스 값입니다.(0부터 시작해서 1씩 증가하며 각 포켓몬 데이터의 인덱스 값으로 전달됩니다.)
            - PokemonItem 컴포넌트에 pokemon과 index를 props로 전달합니다.
*/

export default function PokemonList() {
  return (
    <div id="card-wrapper">
      {data.map((pokemon: any, index) => (
        <PokemonItem key={index} pokemon={pokemon} index={index} />
      ))}
    </div>
  );
}
