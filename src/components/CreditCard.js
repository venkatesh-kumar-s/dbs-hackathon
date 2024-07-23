import React from "react";
import dbsLogo from "../assets/dbs-logo.png";
import masterCard from "../assets/mastercard-logo.png";
import visa from "../assets/visa-logo.png";
import jcb from "../assets/jcb-logo.png";
import discover from "../assets/discover-logo.png";
import americanExpress from "../assets/american-express-logo.png";
import dinersClub from "../assets/diners-club-logo.png";
import maestro from "../assets/maestro-logo.png";
import { useNavigate } from "react-router-dom";

export const CreditCard = ({ data }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('control-center/'+data.Credit_Card_Number);
  }
  return (
    <div className="credit-card" onClick={handleRedirect}>
      <div className="credit-card-inner">
        <div className="credit-card-front">
          <img className="bank" src={dbsLogo} alt="DBS" />
          <img
            className="vendor"
            src={
              (data.Issuer === "visa" && visa) ||
              (data.Issuer === "mastercard" && masterCard) ||
              (data.Issuer === "jcb" && jcb) ||
              (data.Issuer === "discover" && discover) ||
              (data.Issuer === "american_express" && americanExpress) ||
              (data.Issuer === "diners_club" && dinersClub) ||
              (data.Issuer === "maestro" && maestro)
            }
          />
          <p
            style={{
              position: "absolute",
              left: 10,
              bottom: 2,
              textAlign: "left",
              fontSize: 11,
              width: "80%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <strong style={{ fontSize: 15 }}>{data.Credit_Card_Number.replace(/(\d{4})(?=\d)/g, '$1 ')}</strong>
            <br />
            <span style={{ textTransform: "uppercase", lineHeight: 1.5 }}>{data.Name}</span>
            <br />
            <span>Expiry: {data.Expiry_Date}</span>
          </p>
        </div>

        <div className="credit-card-back">
         <div className="magnetic-strip"></div>
         <div className="cvv">
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <strong>{data.cvv}</strong>
         </div>
         <img
            className="vendor-back"
            src={
              (data.Issuer === "visa" && visa) ||
              (data.Issuer === "mastercard" && masterCard) ||
              (data.Issuer === "jcb" && jcb) ||
              (data.Issuer === "discover" && discover) ||
              (data.Issuer === "american_express" && americanExpress) ||
              (data.Issuer === "diners_club" && dinersClub) ||
              (data.Issuer === "maestro" && maestro)
            }
          />
        </div>
      </div>
    </div>
  );
};
