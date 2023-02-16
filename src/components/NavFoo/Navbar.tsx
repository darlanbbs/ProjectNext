import React from 'react'
import { Container } from '@/styles/NavFoo.styles'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0px',
        width: '100%',
      }}
    >
      <Container>
        <Image
          src="/pokeball-pokemon.png"
          width="30"
          height="30"
          alt="PokeballImage"
        />
        PokeNext
        <div
          className="button"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Link href="/">
            <Button bg="red" color="#000" _hover={{ bg: '#ebedf0' }}>
              Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
