import { MenuButton } from "./MenuButton"

export const MenuPage = () => {
 
 return (
    <div className="bg-menu">
        <img className='title' src={"../../public/cuento-imagenes/Elige un cuento.svg"}  /> 
        <div className="button-container">
            <MenuButton card={'tessi'} icon={"./../../public/cuento-iconos/icono tessi.svg"} name={'Tessi'}/>
            <MenuButton card={'elio'} icon={"./../../public/cuento-iconos/icono elio.svg"} name={'Elio'}/>
            <MenuButton card={'ale'} icon={"./../../public/cuento-iconos/icono ale.svg"} name={'Ale'}/>
        </div>
    </div>
   
 )
}