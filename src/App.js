import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './components/Home'
import Error from './components/Error'
import Nav from './starWars/Nav'
import Vehicle from './starWars/Vehicle'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CardHooks /> */}
        {/* <AddressBook /> */}
        <h1>Star Wars Vehicles</h1>
        <Router>
          <ul>
              <li><Link to="/">Home</Link></li>
          </ul>
          <hr />
          <Nav />
          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/vehicle/:vehicleId" component={Vehicle} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from 'react-router-dom';
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Error from './components/Error'
// import { findAllByTestId } from '@testing-library/dom';
// // import AddressBook from './addressBook/AddressBook'
// // import CardHooks from './CardHooks'

// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       authenticated: false
//     }
//   }

//   doLogIn = () => {
//     this.setState({
//       authenticated: true
//     })
//   }

//   doLogOut = () => {
//     this.setState({
//       authenticated: false
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         {/* <CardHooks /> */}
//         {/* <AddressBook /> */}
//         <h1>Hello world!</h1>
//         <Router>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/about/123">About John</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>

//           <Switch>
//             {/* <Route exact path="/" component={Home} /> */}
//             <Route exact path="/" render={() =>{
//               return (
//                 this.state.authenticated ? (
//                   <Redirect to="/account" />
//                 ) : (
//                   <>
//                   <Home />
//                   <p>Please log in!</p>
//                   <button onClick={this.doLogIn}>Log in</button>
//                   </>
//                 )
//               )
//             }} />

//             <Route path="/account" render={() => {
//               return (
//                 this.state.authenticated ? (
//                   <>
//                   <Home />
//                   <p>Welcome back!</p>
//                   <button onClick={this.doLogOut}>Log out</button>
//                   </>
//                 ) : (
//                   <Redirect ti="/" />
//                 )
//               )
//             }} />

//             <Redirect from="/about/:userId" to="/info/:userId" />
//             <Route path="/info/:userId" component={About} />

//             <Redirect from="/about" to="/info" />
//             <Route path="/info" component={About} />

//             <Route path="/contact" component={Contact} />

//             <Route component={Error}/>
//           </Switch>
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;
