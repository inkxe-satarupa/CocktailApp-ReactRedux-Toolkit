import React, { useRef } from 'react';
import { fetchSearchCocktail } from "../redux/features/cocktailSlice";
import { useDispatch } from "react-redux";
import '../components/SearchInput.css';


const SearchInput = () => {
    const seacrchvalue = useRef();
    const dispatch = useDispatch();

    const handleChange = () => {
        const searchText = seacrchvalue.current.value;
        dispatch(fetchSearchCocktail({ searchText }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Search Cocktail </label>
                    <input type="text" name="name" id="name" ref={seacrchvalue} onChange={handleChange} />
                </div>
            </form>

        </section>
    )
}

export default SearchInput;