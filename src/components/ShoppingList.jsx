import React from 'react'

class ShoppingList extends React.Component{
    render(){
        return (
            <div className="shopping-list">
                <h1>Lista de compras para {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>Whatsapp</li>
                    <li>Facebook</li>
                </ul>
            </div>
        )
    }
}

export default ShoppingList;