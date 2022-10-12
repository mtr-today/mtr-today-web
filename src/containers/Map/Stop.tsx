import { Box, BoxProps, useColorMode } from '@chakra-ui/react'
import React, { memo, useContext, useMemo, useState } from 'react'
import { Line } from '../../constants/line'
import { Stop as StopType } from '../../constants/stop'
import { mapContext } from '../../contexts/mapContext'
import { stopContext } from '../../contexts/stopContext'

export const Stop: React.FC<
  BoxProps & { coord: [x: number, y: number]; stop: StopType }
> = memo(({ children, stop, coord: [x, y], ...props }) => {
  const [stopHovering, setHovering] = useState(false)
  const { colorMode } = useColorMode()
  const { hoveringLine } = useContext(mapContext)

  const lineList = useMemo<Line[]>(() => {
    if (!Array.isArray(children)) return []
    return children
      .map(({ props }) => {
        return props.line
      })
      .filter(Boolean)
  }, [])

  return (
    <stopContext.Provider
      value={{
        stop,
        hovering: Boolean(
          stopHovering || (hoveringLine && lineList.includes(hoveringLine))
        ),
        lineHovering: Boolean(hoveringLine && lineList.includes(hoveringLine)),
        setHovering,
      }}
    >
      <Box
        position="absolute"
        top={`${y}px`}
        left={`${x}px`}
        fontSize="xs"
        opacity={
          hoveringLine && !lineList.includes(hoveringLine) ? '.3' : undefined
        }
        style={{ transition: 'opacity .3s' }}
        {...props}
      >
        {children}
        <Box
          w="18px"
          h="18px"
          borderWidth="3px"
          borderColor={colorMode === 'dark' ? 'white' : 'gray.700'}
          borderRadius="100%"
          position="absolute"
          transform="translateY(-50%) translateX(-50%)"
          bg="Background"
          onMouseEnter={() => {
            setHovering(true)
          }}
          onMouseLeave={() => {
            setHovering(false)
          }}
        />
      </Box>
    </stopContext.Provider>
  )
})
