import {Box, Badge} from '@chakra-ui/react';

const CardDoImovel = ({title,price})=>{
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' color="white">
            <img src='https://bit.ly/2Z4KKcF' alt='img' />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    New
                </Badge>
                <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                >
                    6 beds &bull; 3 baths
                </Box>
                </Box>

                <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
                >
                {title}
                </Box>

                <Box>
                R$ {price}
                <Box as='span' color='gray.600' fontSize='sm'>
                    / wk
                </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    34 reviews
                </Box>
                </Box>
            </Box>
            </Box>
    )
}

export default CardDoImovel;