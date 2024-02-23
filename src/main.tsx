import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <RouterProvider router={router} />
  </ChakraProvider>
)
