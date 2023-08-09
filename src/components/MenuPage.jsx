import { MenuButton } from "./MenuButton"

export const MenuPage = () => {
 
 return (
    <div className="bg-menu">
        <h1 className="title">Elige un cuento</h1> 
        <div>
            <MenuButton card='tessi' icon="../../public/cuento-iconos/icono tessi.svg" name='Tessi' />
            <MenuButton card='elio' icon='../../public/cuento-iconos/icono tessi.svg' name='Elio' />
            <MenuButton card='ale' icon='../../public/cuento-iconos/icono tessi.svg' name='Ale' />
        </div>
    </div>
   
 )
}