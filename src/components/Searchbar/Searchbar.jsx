import propTypes from 'prop-types';
import css from './Searchbar.module.css';
// import { Component } from "react";


import { toast } from "react-toastify";
import { useState } from 'react';

export const Searchbar = () => {

  const [currentSearch, setCurrentSearch] = useState("");


 const handleNameChange = (e) => {
  setCurrentSearch({ currentSearch: e.currentTarget.value.toLowerCase() });
  };


 const handleSubmit = (e) => {
    e.preventDefault();

    if (currentSearch.trim() === "") {
      toast.warning("Enter sth");
      return;
    }
  
    setCurrentSearch({ currentSearch: "" });
  };


  return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            name="inputForSearch"
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={currentSearch}
            onChange={handleNameChange}
          />
        </form>
      </header>
    );
  
}

// export class Searchbar extends Component {
//   state = {
//     currentSearch: "",
//   };

//   handleNameChange = (e) => {
//     this.setState({ currentSearch: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     if (this.state.currentSearch.trim() === "") {
//       toast.warning("Enter sth");
//       return;
//     }
    

//     this.props.onSubmit(this.state.currentSearch);
//     this.setState({ currentSearch: "" });
//   };

//   render() {
//     const { currentSearch } = this.state;

//     return (
//       <header className={css.Searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.SearchFormButton}>
//             <span className={css.SearchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             name="inputForSearch"
//             className={css.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={currentSearch}
//             onChange={this.handleNameChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
