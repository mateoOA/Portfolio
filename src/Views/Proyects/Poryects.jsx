import Img from "../../../public/imgPlaceHolder.jpg"
import Img1 from "../../../public/PFHenry.png"
import Img2 from "../../../public/gJeneraSon.png"
import Img3 from "../../../public/TestPage.png"

import "./Proyects.css"

function Proyectos(){
    const handleClickProject1 = () => {
        window.open('https://youtu.be/4aEbKqE1Bmo', '_blank');
    };
    const handleClickProject2 = () => {
        window.open('https://youtu.be/ohEuFrWZxF4', '_blank');
    };
    const handleClickProject3 = () => {
        window.open('https://youtu.be/wOZTDFcnVOY', '_blank');
    };
      
    return(
        <span className="CardContainer">
            <h3 className="ProjectsH1">Proyectos</h3>
            <span className="Card" onClick={handleClickProject1}>
                <img src={Img1} alt="placeholder" style={{height:"100px", width:"150px", marginLeft:"15px"}}/>
                <span>
                    <h6 className="ProjectsH">Proyecto final Henry</h6>
                    <p className="ProjectsP">Proyecto en grupo de un ecomerce de suplementos nutricionales. Cuenta con listado de productos, carrito de compras, registro e ingreso a la pagina, dashboard de admin donde se puede ver y editar los productos.</p>
                </span>
            </span>
            <span className="Card" onClick={handleClickProject2} >
                <img src={Img2} alt="placeholder" style={{height:"100px", width:"150px", marginLeft:"15px"}}/>
                <span>
                    <h6 className="ProjectsH">gJenerASON</h6>
                    <p className="ProjectsP">Proyecto en solitario realizando un generador de archivos Json.</p>
                </span>
            </span>
            <span className="Card" onClick={handleClickProject3}>
                <img src={Img3} alt="placeholder" style={{height:"100px", width:"150px", marginLeft:"15px"}}/>
                <span>
                    <h6 className="ProjectsH">Test Page</h6>
                    <p className="ProjectsP">Pagina de prueba en donde se ponen en practica React, HTML y CSS.</p>
                </span>
            </span>
           
        </span>
    )
}
export default Proyectos