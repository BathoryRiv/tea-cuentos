import { MenuButton } from "./MenuButton"

export const MenuPage = () => {
 
 return (
    <div className="bg-menu">
        <img className='title' src={"../../public/cuento-imagenes/Elige un cuento.svg"}  /> 
        <div className="button-container">
            <MenuButton />
            <MenuButton />
            <MenuButton />
        </div>
    </div>
   
 )
}