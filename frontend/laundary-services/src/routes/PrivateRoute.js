import { Route } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import { isAuthenticated } from "../components/Authoperations"
  
  function PrivateRoute({ children,...rest}) {
    // console.log("inside private route");
    // console.log("is user Authenticated ",isAuthenticated);
    
    return (
     
      <Route
      {...rest}
        render={
          () => (
            isAuthenticated()
              ? (
                children
              ) : (
                <Navigate
                  to="/"
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;
  