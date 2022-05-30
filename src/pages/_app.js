import { Appbar } from "../components/App"
import { Menu } from '../components/Menu'
import { Box } from '@mui/material'
import { MenuTogglelayout } from '../Layout/menuTogglelayout'
import { Palette } from '../theme/index'

const MyApp = ({ Component, pageProps }) => {

  return (<>
    <Palette>

      <MenuTogglelayout>

        <Appbar />
        <Box sx={{ display: "flex" }}>

          <Menu />
          
          <Component {...pageProps} />
        </Box>

      </MenuTogglelayout>
    </Palette>
  </>
  )
}


export default MyApp
