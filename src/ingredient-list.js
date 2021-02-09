import React from 'react';
import IngredientItem from './ingredient-items.js';

export default class IngredientList extends React.Component {
    render() {
        return (
            <section className='ingredient-list' style={{ backgroundImage: `url('/list-bg.png')` }}>
                <IngredientItem></IngredientItem>
            </section>
        );
    }
}