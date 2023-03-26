import styles from "./Menu.module.css";

const Menu = ({ items }) => {
  return (
    <div className={styles.menuWrapper}>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className={styles.menuItems}>
            <img src={img} alt={title} className={styles.image} />
            <div className={styles.itemInfo}>
              <header>
                <h4 className={styles.title}>{title}</h4>
                <h4 className={styles.price}>${price}</h4>
              </header>
              <p className={styles.itemText}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default Menu;
