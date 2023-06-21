import React from "react";
import "./search-box.styles.css";

const SearchBox = (props) => {
  return (
    <div>
      <input
        className="search"
      type="search"
        placeholder={props.placeholder}
        onChange={props.handelChange}
      />
    </div>
  );
};
// const SearchBox = ({ placeholder, handelChange }) => {
//     <input
//       className="search"
//       type="search"
//       placeholder={placeholder}
//       onChange={handelChange}
//     />;
//   };
export default SearchBox;


