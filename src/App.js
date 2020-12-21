import React, {useState} from 'react';
import Categories from './Categories';
import Menu from './Menu';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
    const [menuItems, setItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setItems(items);
            return;
        }
        const newItems = items.filter((item) => category === item.category);
        setItems(newItems);
    };

    return (
        <main>
            <section className='menu section'>
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems}/>
                <Menu items={menuItems}/>
            </section>
        </main>
    )
}

export default App;