import React from 'react'
import {Route, HashRouter} from 'react-router-dom'
// import { AnimatedSwitch } from 'react-router-transition'
import {routes} from './config'

// const renderRouteComponent = routes => routes.map( (route, index) => {
//     // if (route.auth) {
//     //     return <AuthRoute key={index} {...route}/>
//     // } else {
//     //     return <Route key={index} {...route}/>
//     // }
//     return <Route key={index} {...route}/>
// })
// const NotLoyoutRouter = renderRouteComponent(notLoyoutRouterMap)
// const LoyoutRouter = renderRouteComponent(loyoutRouterMap)

class Routers extends React.Component {
  constructor(props) {
    super()
  }
    render () {
        return (
            <div>
                <HashRouter>
                    <Route render={ ({location, history}) => {
                        console.log(this.props)
                        return (
                            <div style={{width: '100%', height: '100%'}}>
                          {/* <Headers /> */}

                                    {routes.map(r => (

                                      <Route key={r.path} path={r.path} name={r.name} component={r.component}>

                                      </Route>
                                    ))}
                                    {/* <Route render={ props => {
                                        return <Loyout {...props}>
                                            <Route render={()=> {
                                                return (
                                                    <Switch>
                                                        {LoyoutRouter}
                                                        <Redirect from="*" to="/404" />
                                                    </Switch>
                                                )
                                            }}/>
                                        </Loyout>
                                    }} /> */}
                            </div>
                        )
                    }}/>
                </HashRouter>
            </div>
        )

    }
}
export default Routers
