import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Books from '../Pages/Books'
import About from '../Pages/About'

const Routes = () => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/Books' component={Books}></Route>
                    <Route path='/About' component={About}></Route>
                </Switch>
            </BrowserRouter>
    )
}

export default Routes