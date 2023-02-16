import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  Box,
  Divider,
  Center,
} from '@chakra-ui/react'
import Image from 'next/image'
import * as S from '../../styles/pages/pokemon.styles'

type abilitiesObjects = {
  is_hidden?: boolean
  slot?: number
  ability: {
    name: string
    url?: string
  }
}

type itemObjects = {
  slot?: number
  type: {
    name: string
    url?: string
  }
}

export const getStaticPaths = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/`
  const res = await fetch(url)
  const data = await res.json()

  const paths = data.results.map((pokemon: string | number, index: number) => {
    return {
      params: { pokemonId: index.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.pokemonId

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json()

  return {
    props: { pokemon: data },
  }
}

export default function Pokemon({ pokemon }: any) {
  return (
    <S.Container height="100vh">
      {pokemon.id > 0 && (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
        >
          <Box borderRight="solid 3px black">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              width="250"
              height="250"
              alt={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
            />
          </Box>

          <Stack>
            <CardBody
              bg="#30a7d7"
              color="white"
              width="400px"
              display="flex"
              flexDirection="column"
              gap="8px"
            >
              <Heading size="md" display="flex" justifyContent="space-between">
                {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                <p>
                  Pokedex N°:<strong>{pokemon.id}</strong>
                </p>
              </Heading>

              <Box display="flex" justifyContent="space-between">
                <h1>
                  Height:<strong>{pokemon.height}Cm</strong>
                </h1>
                <h1>
                  Weight:<strong>{pokemon.weight}Kg</strong>
                </h1>
              </Box>
              <Box display="flex">
                <h1>Abilities:</h1>
                <Box display="flex" gap="10px">
                  {pokemon.abilities.map(
                    (item: abilitiesObjects, index: number) => (
                      <Text key={index} fontWeight="bold">
                        {item.ability.name[0].toUpperCase() +
                          item.ability.name.substring(1)}
                      </Text>
                    ),
                  )}
                </Box>
              </Box>
              <Divider />
              <Center>
                <h1>TYPES:</h1>
                <br></br>
              </Center>
              <Center>
                <Box display="flex" gap="10px">
                  {pokemon.types.map((item: itemObjects, index: number) => (
                    <Text
                      key={index}
                      fontWeight="bold"
                      bg="black"
                      padding="15px"
                      borderRadius="10px"
                    >
                      {item.type.name[0].toUpperCase() +
                        item.type.name.substring(1)}
                    </Text>
                  ))}
                </Box>
              </Center>
            </CardBody>
          </Stack>
        </Card>
      )}
    </S.Container>
  )
}
