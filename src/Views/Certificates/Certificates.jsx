import Efset from "../../../public/EF SET Certificate.png"
import Henry from "../../../public/Henry Certificado.png"
import Cisma from "../../../public/CERTIFICADO CISMA MATEO.png"
import "./Certificates.css"

function Certificates() {
  return (
    <>
      <img
        src={Efset}
        width="100%"
        height="600px"
        className="Efset"
      />
        <span className="Horizontal">    
            <img
                src={Henry}
                width="48%"
                height="200px"
                className="Henry"
                />

            <img
                src={Cisma}
                width="48%"
                height="200px"
                
                />
        </span>
    </>
  );
}

export default Certificates;