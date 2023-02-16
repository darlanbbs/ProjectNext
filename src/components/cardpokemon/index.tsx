import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
} from '@chakra-ui/react'
import * as S from '../../styles/pages/cardpokemon.styles'
import Image from 'next/image'
import Link from 'next/link'
export default function CardPokemon({ id, name, url }: any) {
  return (
    <div>
      <S.Container _hover={{ opacity: '0.9' }}>
        <Card maxW="sm">
          <S.CardPokemonBody>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              width="150"
              height="150"
              alt={name[0].toUpperCase() + name.substring(1)}
            />
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  {name[0].toUpperCase() + name.substring(1)}
                </Heading>
                <Text color="red.700" fontSize="3xl" fontWeight="700">
                  #{id}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link href={`/pokemon/${id}`}>
                  <Button bg="#070707" color="#fff" _hover={{ bg: '#e53e3e' }}>
                    Details
                  </Button>
                </Link>
                <Button variant="ghost" colorScheme="blue">
                  <Link target="_blank" href={url}>
                    For nerds
                  </Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </S.CardPokemonBody>
        </Card>
      </S.Container>
    </div>
  )
}
