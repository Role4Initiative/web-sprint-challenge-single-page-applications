import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import pizzaFormSchema from "./pizzaFormSchema";
import * as yup from 'yup';
import OrderForm from "./order-form";
import axios from "axios";


const initialFormValues = {
  orderName: '',

}

const initialFormErrors = {
  orderName: "name must be at least 2 characters",
}


const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  // const [orderName, setOrderName] = useState(orderName);

  const orderSubmit = () => {
  //   axios.post(formValues)
  //     .then(resp => {
  //       console.log(resp);
  //     })
  //     .catch(error => console.error(error))
  }

  const validate = (orderName, value) => {
    yup.reach(pizzaFormSchema, orderName)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [orderName]: '' }))
    .catch(error => setFormErrors({ ...formErrors, [orderName]: error.errors[0] }))
  }

  const formChange = (orderName, value) => {
    validate(orderName, value);
    setFormValues({...formValues, [orderName]: value});
  }

  return (
    <>
      <div>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <nav>
          <Link to="/">Homepage</Link>
          <Link id="order-pizza" to="/pizza">Pizza</Link>
        </nav>
        <OrderForm values={formValues} change={formChange} errors={formErrors} submit={orderSubmit} />
      </div>
      <div>
        <Switch>
          <Route path="/">
            <h2>Home</h2>
          </Route>
          <Route path="/pizza">
            
          </Route>
        </Switch>
      </div>

    </>
  );
};
export default App;
