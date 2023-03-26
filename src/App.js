import { useState } from "react";
import Categories from "./components/Categories/Categories";
import Menu from "./components/Menu/Menu";
import items from "./data/data";
import logo from "./logo.svg";
import styles from "./App.module.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filteredItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.title}>
          <h2 className={styles.menu}>our menu</h2>
        </div>
        <Categories categories={categories} filterItems={filteredItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
