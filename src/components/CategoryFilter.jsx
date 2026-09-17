import { useSearchParams } from "react-router-dom";
import { categories } from "../data/products"; 

export default function CategoryFilter() {
const [searchParams, setSearchParams] = useSearchParams()
const activeCategory = searchParams.get("q") || ""
const handleSelect = () => 
{
  setSearchParams(id ? {category: id} : {} )
}
  return (
    <div className="filter-row">
      {categories.map(cat => (
        <button
          key={cat.id || 'all'}
          type="button"
          className={'filter-chip' + (cat.id === activeCategory ? ' active' : '')}
          onClick={() => handleSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
