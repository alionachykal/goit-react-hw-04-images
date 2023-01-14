
import React from "react";

import { Searchbar } from "./Searchbar/Searchbar";

import { ImageGallery } from "./ImageGallery/ImageGallery";


import { Modal } from "./Modal/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";



export const App = () => {
   
  const [currentSearch, setCurrentSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  

   const handleSubmit = (currentSearch) => {
    setCurrentSearch({ currentSearch });
  };
 
 const handleImageClick = e => {

   setModalOpen(true);
   modalAlt(e.target.alt);
   modalImg(e.target.name);

  };

 const  handleModalClose = () => {

   modalOpen(false);
   modalImg("");
   modalAlt("");
   
  };
  
  
  return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridGap: "16px",
          paddingBottom: "24px",
        }}
      >
        <React.Fragment>
          <Searchbar onSubmit={(e) => handleSubmit(e)} />
          <ImageGallery
            onImageClick={handleImageClick}
            currentSearch={currentSearch}
          />
        </React.Fragment>

        {modalOpen ? (
          <Modal
            src={modalImg}
            alt={modalAlt}
            handleClose={handleModalClose}
          />
        ) : null}
        <ToastContainer autoClose={3000} />
      </div>
    );
  
}

// export class App extends Component {
//   state = {
//     currentSearch: "",
//     modalOpen: false,
//     modalImg: "",
//     modalAlt: "",
    
//   };

 

//   handleSubmit = (currentSearch) => {
//     this.setState({ currentSearch });
//   };
 

//   handleImageClick = (e) => {
//     this.setState({
//       modalOpen: true,
//       modalAlt: e.target.alt,
//       modalImg: e.target.name,
//     });
//   };

//   handleModalClose = () => {
//     this.setState({
//       modalOpen: false,
//       modalImg: "",
//       modalAlt: "",
//     });
//   };

//   render() {
//     const { currentSearch, modalImg, modalAlt, modalOpen } = this.state;
//     return (
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr",
//           gridGap: "16px",
//           paddingBottom: "24px",
//         }}
//       >
//         <React.Fragment>
//           <Searchbar onSubmit={(e) => this.handleSubmit(e)} />
//           <ImageGallery
//             onImageClick={this.handleImageClick}
//             currentSearch={currentSearch}
//           />
//         </React.Fragment>

//         {modalOpen ? (
//           <Modal
//             src={modalImg}
//             alt={modalAlt}
//             handleClose={this.handleModalClose}
//           />
//         ) : null}
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }


