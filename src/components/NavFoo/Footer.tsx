import React from 'react'
import { Container } from '@/styles/NavFoo.styles'
import Image from 'next/image'

const Footer = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '0px',
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
        Footer
      </Container>
    </div>
  )
}

export default Footer
