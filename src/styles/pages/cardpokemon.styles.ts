import styled from '@emotion/styled'

import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardPokemonBody = styled(C.Flex)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 4px #e33d33;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`
