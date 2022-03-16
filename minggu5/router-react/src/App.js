import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function NestingExample(){
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>       
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
  return(
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics(){
  let {path, url} = useRouteMatch();
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <link to={`${url}/Sate, Nasi Goreng`}>Kuliner</link>
        </li>
        <li>
          <link to={`${url}/Wisata alam, Museum`}>Travelling</link>
        </li>
        <li>
          <link to={`${url}/Ibis, JW Marriot`}>Review Hotel</link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/topicId`}>
          <Topics />
        </Route>
      </Switch>
    </div>
  );
}

function Topic(){
  let {topicId} = useParams();
  return(
    <div>
      <h3>{topicId}</h3>
    </div>
  )
}
// URL parameter

// export default function paramsExample(){
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>
        
//         <Switch>
//           <Route path="/:id" children={<Child />}></Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child(){
//   let {id} = useParams();
//   return(
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// BASIC ROUTE

// export default function BasicExample(){
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home(){
//   return(
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About(){
//   return(
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard(){
//   return(
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// } 

