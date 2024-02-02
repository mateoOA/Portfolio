import Img from "../../../public/imgPlaceHolder.jpg"
import Img1 from "../../../public/PFHenry.png"
import "./Proyects.css"

function Proyectos(){
    const handleClickProject1 = () => {
        window.open('https://youtu.be/4aEbKqE1Bmo', '_blank');
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
            <span className="Card" >
                <img src={Img} alt="placeholder" style={{height:"100px", width:"150px", marginLeft:"15px"}}/>
                <span>
                    <h6 className="ProjectsH">Lorem ipsum</h6>
                    <p className="ProjectsP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae nesciunt dolorum ducimus nisi deserunt laborum deleniti a. Quis dolor nisi nihil nesciunt blanditiis facere inventore accusantium. Sint, consequatur aliquid.</p>
                </span>
            </span>
            <span className="Card">
                <img src={Img} alt="placeholder" style={{height:"100px", width:"150px", marginLeft:"15px"}}/>
                <span>
                    <h6 className="ProjectsH">Lorem ipsum</h6>
                    <p className="ProjectsP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae nesciunt dolorum ducimus nisi deserunt laborum deleniti a. Quis dolor nisi nihil nesciunt blanditiis facere inventore accusantium. Sint, consequatur aliquid.</p>
                </span>
            </span>
            <span className="Card">
                <img src={Img} alt="placeholder" style={{height:"100px", width:"150px", marginLeft:"15px"}}/>
                <span>
                    <h6 className="ProjectsH">Lorem ipsum</h6>
                    <p className="ProjectsP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae nesciunt dolorum ducimus nisi deserunt laborum deleniti a. Quis dolor nisi nihil nesciunt blanditiis facere inventore accusantium. Sint, consequatur aliquid.</p>
                </span>
            </span>
            <span className="Card">
                <img src={Img} alt="placeholder" style={{height:"100px", width:"150px", marginLeft:"15px"}}/>
                <span>
                    <h6 className="ProjectsH">Lorem ipsum</h6>
                    <p className="ProjectsP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae nesciunt dolorum ducimus nisi deserunt laborum deleniti a. Quis dolor nisi nihil nesciunt blanditiis facere inventore accusantium. Sint, consequatur aliquid.</p>
                </span>
            </span>
            <span className="Card">
                <img src={Img} alt="placeholder" style={{height:"100px", width:"150px", marginLeft:"15px"}}/>
                <span>
                    <h6 className="ProjectsH">Lorem ipsum</h6>
                    <p className="ProjectsP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae nesciunt dolorum ducimus nisi deserunt laborum deleniti a. Quis dolor nisi nihil nesciunt blanditiis facere inventore accusantium. Sint, consequatur aliquid.</p>
                </span>
            </span>
            <span className="Card">
                <img src={Img} alt="placeholder" style={{height:"100px", width:"150px", marginLeft:"15px"}}/>
                <span>
                    <h6 className="ProjectsH">Lorem ipsum</h6>
                    <p className="ProjectsP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae nesciunt dolorum ducimus nisi deserunt laborum deleniti a. Quis dolor nisi nihil nesciunt blanditiis facere inventore accusantium. Sint, consequatur aliquid.</p>
                </span>
            </span>
            <span className="Card">
                <img src={Img} alt="placeholder" style={{height:"100px", width:"150px", marginLeft:"15px"}}/>
                <span>
                    <h6 className="ProjectsH">Lorem ipsum</h6>
                    <p className="ProjectsP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae nesciunt dolorum ducimus nisi deserunt laborum deleniti a. Quis dolor nisi nihil nesciunt blanditiis facere inventore accusantium. Sint, consequatur aliquid.</p>
                </span>
            </span>
        </span>
    )
}
export default Proyectos