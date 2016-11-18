import { injectReducer } from '../../store/reducers'
import AboutView from './components/About'
export default (store) => ({
  path : 'contact',
  component : AboutView,
})
