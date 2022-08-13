import "./Modal.css";

function Modal(props) {
  function handleChange() {
    // Here, we invoke the callback with the new value
    props.onClick(false);
  }

  if (!props.toggleModal) return null;

  return (
    <div className="modal_bg">
      <div className="modal_box">
        To read more you need to be logged in.
        <button onClick={handleChange}>I understand</button>
      </div>
    </div>
  );
}

export default Modal;

// import { createPortal } from "react-dom";
// import "./Modal.css";

// function Modal(props) {
//   function handleChange() {
//     // Here, we invoke the callback with the new value
//     props.onClick(false);
//   }

//   if (!props.toggleModal) return null;

//   return createPortal(
//     <div className="modal_bg">
//       <div className="modal_box">
//         To read more you need to be logged in.
//         <button onClick={handleChange}>I understand</button>
//       </div>
//     </div>,
//     document.getElementById("portal")
//   );
// }

// export default Modal;
