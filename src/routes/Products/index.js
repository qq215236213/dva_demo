import React from 'react';
import {connect} from 'dva';
import ProductList from '../../components/Products/ProductList';

const Products = ({dispatch, products}) => {

  function handleDelete(id){
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  const Temp = ProductList({onDelete:handleDelete,products});
    return (<h2>
      List of Products
      <Temp />
    </h2>);
}

export default connect(({products}) =>(products))(Products);


