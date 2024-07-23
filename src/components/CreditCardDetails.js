import React from "react";
import dbsLogo from "../assets/dbs-logo.png";
import masterCard from "../assets/mastercard-logo.png";
import visa from "../assets/visa-logo.png";
import jcb from "../assets/jcb-logo.png";
import discover from "../assets/discover-logo.png";
import americanExpress from "../assets/american-express-logo.png";
import dinersClub from "../assets/diners-club-logo.png";
import maestro from "../assets/maestro-logo.png";
import { useParams } from "react-router-dom";
import { creditCardsList } from "../data/dummyCreditCards";

const CreditCardDetails = () => {
  const params = useParams();
  const data = creditCardsList.find(itm=>itm.Credit_Card_Number===params.id);
  return (
    <>
    <div className="credit-card" style={{display:"flex", justifyContent:'center'}}>
        <div className="credit-card-front-details">
          <img className="bank-details" src={dbsLogo} alt="DBS" />
          <img
            className="vendor-details"
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
              bottom: 12,
              textAlign: "left",
              fontSize: 11,
              width: "80%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <strong style={{ fontSize: 15 }}>
              {data.Credit_Card_Number?.replace(/(\d{4})(?=\d)/g, "$1 ")}
            </strong>
            <br />
            <span style={{ textTransform: "uppercase", lineHeight: 1.5 }}>
              {data.Name}
            </span>
            <br />
            <span>Expiry: {data.Expiry_Date}</span>
          </p>
        </div>

        <div className="credit-card-back-details">
          <div className="magnetic-strip"></div>
          <div className="cvv">
            <hr />
            <hr />
            <hr />
            <hr />
            <strong>{data.cvv}</strong>
          </div>
          <img
            className="vendor-back-details"
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
            <hr style={{width:'75%'}}/>
    {/* Controls */}
    </>
  );
};

export default CreditCardDetails;
