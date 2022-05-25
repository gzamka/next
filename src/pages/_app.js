import { Appbar } from "../components/App"
import { Menu } from '../components/Menu'
import { Box } from '@mui/material'

const MyApp = ({ Component, pageProps }) => {
  return (<>
    <Appbar />
    <Box sx={{ display: "flex" }}>

      <Menu />
      <Component {...pageProps} />
    </Box>
  </>
  )
}

export default MyApp
