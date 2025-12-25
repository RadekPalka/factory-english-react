import { CATEGORIES, type Category } from "../categories/categories";
import type { CategorySetupType } from "../types/CategorySetupType";

export const CategorySetup: React.FC<CategorySetupType> = ({ handleButton }) => {
  return (
    <section className="setup">
      <h2 className="card__title">Wybierz kategorię</h2>

      <div className="setup__grid">
        {CATEGORIES.map((category: Category) => (
          <button
            className="btn btn--ghost"
            key={category.label}
            onClick={() => handleButton(category)}
            type="button"
          >
            {category.label}
          </button>
        ))}
      </div>
    </section>
  );
};
