import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
import CartScreen from './screens/CartScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen.jsx'
import PlaceOrderScreen from './screens/PlaceOrderScreen.jsx'
import OrderScreen from './screens/OrderScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import PrivateRoute from './components/PrivateRoute.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
    </Route >
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </StrictMode>,
)
