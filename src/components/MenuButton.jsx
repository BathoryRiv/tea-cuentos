export const MenuButton = ({card, icon, name}) => {
    return (
        //div tessi

        <div className={card}>
            <img className="icon" src={icon} /> 
            <h2>{name}</h2>
         </div>
    )
}