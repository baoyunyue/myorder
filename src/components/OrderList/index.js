import React, { Component } from 'react';
import OrderItem from '../OrderItem';

const data={
   id:1,
   shop:"院落创意菜",
   picture:"http://img.cnys.com/upload/thumb/2016/09-01/0-B1dNy4.png",
   product:"百香果",
   price:19.9,
   ifCommented:true,

}
class OrderList extends Component {
    render() {
        return (
            <div>
                <OrderItem data={data}/>
            </div>
        );
    }
}

export default OrderList;