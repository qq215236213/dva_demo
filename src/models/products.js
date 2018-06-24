export default {
  namespace: 'products',
  state: {
    products:[
      {name :'dva',id:1,key:1},
      {name:'antd',id:2,key:2},
    ],
  },
  reducers: {
    delete(state,{payload: id}){
      const newProducts = state.products.filter(item => item.id !== id);
      return {...state,products:newProducts};
    },
  },
}
