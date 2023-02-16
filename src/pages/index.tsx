import * as S from '../styles/pages/components.styles'
import CardPokemon from '../components/cardpokemon'

type Types = {
  name: string
  id: number
  url?: string
}

export async function getStaticProps(): Promise<{
  props: { pokemons: Types[] }
}> {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`
  const res = await fetch(url)
  const data = await res.json()

  const pokemons = data.results.map((item: any, index: any) => {
    return {
      ...item,
      id: index + 1,
    }
  })

  return {
    props: {
      pokemons,
    },
  }
}

export default function Home({ pokemons }: any) {
  return (
    <S.Container margin="55px 0">
      <S.List>
        {pokemons.map((item: Types) => (
          <CardPokemon
            id={item.id}
            name={item.name}
            url={item.url}
            key={item.id}
          />
        ))}
      </S.List>
    </S.Container>
  )
}
