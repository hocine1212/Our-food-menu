const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
            className="btn-filter"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
