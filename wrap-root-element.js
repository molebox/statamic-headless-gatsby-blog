import React from 'react';
import { ChakraProvider } from "@chakra-ui/core"

export const wrapRootElement = ({element}) => (
    <ChakraProvider resetCSS>
        {element}
    </ChakraProvider>
);