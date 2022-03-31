import { Center, Grid } from "@chakra-ui/react"
import {WarningTwoIcon} from "@chakra-ui/icons"
const Error=()=>{
    return (
        <Center alignItems="center" >
                <p>Ocorreu um erro, recarregue a página</p>
                <WarningTwoIcon w={8} h={8} color="red.500" />
        </Center>
    )
}

export default Error;