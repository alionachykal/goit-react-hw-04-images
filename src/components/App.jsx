


import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";

export const App = () => {
  const [currentSearch, setCurrentSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const handleSubmit = (currentSearch) => {
    setCurrentSearch(currentSearch);
    setPage(1);
  };

  const handleImageClick = (e) => {
    setModalOpen(true);
    setModalAlt(e.target.alt);
    setModalImg(e.target.name);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalImg("");
    setModalAlt("");
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
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery
          onImageClick={handleImageClick}
          currentSearch={currentSearch}
          page={page}
          setPage={setPage}
        />
      </React.Fragment>

      {modalOpen && (
        <Modal src={modalImg} alt={modalAlt} handleClose={handleModalClose} />
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

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


