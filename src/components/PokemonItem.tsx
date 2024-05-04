import { Link } from 'react-router-dom';
import { Pokemon } from '../data';

interface Item {
  pokemon: Pokemon;
  index: number;
}

/*
  *코드 설명
  1. PokemonItem 컴포넌트는 하나의 포켓몬 데이터에 대해서 보여주는 컴포넌트입니다.
    - 전달 받은 포켓문의 data가 'pokemon'이라는 이름으로 전달됩니다.(pokemon변수 안에 해당 포켓몬의 데이터가 들어있습니다.)
      - pokemon 안에는 name, height, weight, types등의 정보가 들어있습니다. 메인페이지에서는 name, height, weight, types 정보만 보여주면 되므로 밑에 코드와 같이 사용하였습니다.
    - 즉, 메인페이지에 있는 10개의 포켓몬 데이터 중 하나의 포켓몬 데이터를 보여주는 컴포넌트입니다.
    - index는 map 함수에서 두번째 인자로 전달되는 인덱스 값입니다.(PokemonList로 부터, 0부터 시작해서 1씩 증가하며 각 포켓몬 데이터의 인덱스 값으로 전달 받았습니다.)
  3. PokemonItem 컴포넌트는 Link 컴포넌트를 사용하여 포켓몬 데이터를 클릭했을 때 디테일 페이지로 이동할 수 있도록 구현되어 있습니다.
    - App.tsx에서 라우팅을 설정해놓았기 때문에, Link 컴포넌트를 사용하여 페이지 이동을 할 수 있습니다.
*/

export default function PokemonItem({ pokemon, index }: Item) {
  return (
    <Link to={`/pokemon/${index + 1}`} className="card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`}
        alt={pokemon.name}
      />
      <div className="info-wrapper">
        <h2>{pokemon.name}</h2>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Types: {pokemon.types.join(', ')}</p>
      </div>
    </Link>
  );
}
