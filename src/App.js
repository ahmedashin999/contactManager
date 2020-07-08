import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />

                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Heading from "./layout/Heading";
// import Persons from './layout/Persons';
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Heading branding="Contact Manager" />
//         <div className="container">
//           <Persons/>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Head from "./practice/Head";
// import Infos from "./practice/Infos";
// import {Provider} from "./practice/UserContext";

// class App extends Component {
//   render() {
//     return (
//       <Provider>
//         <Head branding="Contact Manager" />
//         <div className="container">
//           <Infos/>
//         </div>
//       </Provider>
//     );
//   }
// }

// export default App;
