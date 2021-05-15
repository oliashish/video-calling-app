import React from "react";
import { FaPhone, FaPhoneSlash, FaMicrophone } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import "../styles/OptionController.css";

const OptionsControllers = () => {
   return (
      <div className="controller-container">
         <div className="call-initiate-container">
            <div className="make-call">Make Call</div>
            <div className="join-call">Join Call</div>
         </div>
         <div className="controller-icons-container">
            <IconContext.Provider
               value={{
                  style: { fontSize: "40px" },
               }}
            >
               <FaPhone />
            </IconContext.Provider>
            <IconContext.Provider
               value={{
                  style: { fontSize: "50px" },
               }}
            >
               <FaPhoneSlash />
            </IconContext.Provider>
            <IconContext.Provider
               value={{
                  style: { fontSize: "50px" },
               }}
            >
               <FaMicrophone />
            </IconContext.Provider>
         </div>
      </div>
   );
};

export default OptionsControllers;
