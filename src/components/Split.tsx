import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useLine } from '../hooks/useLine'

export const Split = () => {
  const { color } = useLine()

  return (
    <Flex flexShrink="0" alignItems="center">
      <Box h="6px" w="32px" bg={color}></Box>
      <Box h="80px" w="6px" bg={color}></Box>
    </Flex>
  )
}
