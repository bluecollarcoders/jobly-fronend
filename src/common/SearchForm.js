import React, { useState } from "react";
import "./SearchForm.css";


function SearchForm({ searchFor}) {
    console.debug("SearchForm", "searchFor=", typeof searchFor);

    const [searchTerm, setsearchTerm] = useState("");

    // Tell parent to filter
    function handleSubmit(evt) {
        evt.preventDefault();
        searchFor(searchTerm.trim() || undefined);
        setsearchTerm(searchTerm.trim());
    }

    // Update form fields
    function handleChange(evt) {
        setsearchTerm(evt.target.value);
    }

    return (
        <div className="SearchForm mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input 
                className="form-control form-control-lg flex-grow-1"
                name="searchTerm"
                placeholder="Enter search term.."
                value={searchTerm}
                onChange={handleChange}
                />
                <button type="submit" className="btn btn-lg btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SearchForm;