import React from 'react';

const ingredientItem = [
    {
        name: 'milk',
        amount: '1 1/2 cups',
    },
    {
        name: 'mascarpone',
        amount: '1/2 cup',
    },
    {
        name: 'pink salt',
        amount: '1/2 tsp',
    },
    {
        name: 'Black Mission Figs',
        amount: '1 lb',
    },
    {
        name: 'brown sugar',
        amount: '1/2 cup',
    },
    {
        name: 'water',
        amount: '2-4 tbsp',
    },
    {
        name: 'heavy cream',
        amount: '1 1/2 cups',
    },
    {
        name: 'granulated sugar',
        amount: '1/3',
    },
    {
        name: 'egg yolks',
        amount: '2',
    },
    {
        name: 'lemon, juiced',
        amount: '1',
    },
    {
        name: 'butter',
        amount: '1',
    },
    {
        name: 'honey roasted pecans, roughly',
        amount: '1 cup',
    }]

class IngredientComponent extends React.Component {
    render() {
        return <ul>
            <li>
                <label>
                    <input type='checkbox' />
                    {this.props.foodProps.amount} {this.props.foodProps.name}

                </label>
            </li>
        </ul>
    }
}

export default class IngredientItem extends React.Component {
    render() {

        const ingredientList =
            ingredientItem.map(
                singleItem =>
                    <IngredientComponent foodProps={
                        singleItem
                    } />)
        return (
            <ul>
                {ingredientList}
            </ul>
        );
    }
}