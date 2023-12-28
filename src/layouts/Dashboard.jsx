import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Routes,Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>             
            <Route path="/" element= {<ProductList/>} ></Route>
            <Route path="/products" element={<ProductList/>} ></Route>
            <Route path="/products/:id" element={<ProductDetail/>} ></Route>
            <Route path="/cart" element={<CartDetail/>} ></Route>
            </Routes>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
