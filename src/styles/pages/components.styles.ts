import styled from '@emotion/styled'

import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  background: -webkit-linear-gradient(to top, #434343, #000000);
  background: linear-gradient(to top, #434343, #000000);
`
export const List = styled(C.Flex)`
  display: flex;
  width: 70%;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
