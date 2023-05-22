const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((MenuItem) => {
        const { id, desc, img, price, title } = MenuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h5>{title}</h5>
                <p className="price">${price}</p>
              </header>
              <p className="item-text">{desc} </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default Menu;
