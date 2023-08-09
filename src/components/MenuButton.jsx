export const MenuButton = (card, icon, name) => {
    console.log(icon)
    return (
        //div tessi

        <div className={card}>
            <img className="icon" src={icon} /> 
            <h2>{name}</h2>
         </div>
    )
}