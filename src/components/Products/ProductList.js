import React,{Component} from 'react';
import {Table, Popconfirm, Button} from 'antd';

const ProductList = ({onDelete,products}) => class extends Component{
  render(){
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
    },{
      title : 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title={'Delete?'} onConfirm={()=> onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
    ];
    return (
      <Table dataSource={products} columns={columns} />
    );
  }
}

export default ProductList;
