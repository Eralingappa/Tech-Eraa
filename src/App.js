import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import CourseItemDetails from 'Components/CourseItemDetails'
import Home from './components/Home'
import NotFound from './Components/NotFound'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
