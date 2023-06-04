import { NavLink,Routes ,BrowserRouter as Router, Route} from 'react-router-dom';
import App from "./App";

const Abc=()=>{

return (
  <Router>
    <nav>
      <NavLink to="jsonforms">App</NavLink>
    </nav>
    <Routes>
      <Route path="jsonforms" element={<App/>}/>
    </Routes>
  </Router>
);
};

// const Apps = () => (
//   <Router>
//     <Routes>
//       <Route path="/json" element={<Abc/>} />
//       {/* Other routes in your React application */}
//     </Routes>
//   </Router>
// );

export default Abc;
