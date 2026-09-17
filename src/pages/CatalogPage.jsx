import  ProductCard  from  '../components/ProductCard.jsx';
import  CategoryFilter from '../components/CategoryFilter.jsx';
import { products } from '../data/products.js';
import { useSearchParams } from 'react-router-dom';


export default function CatalogPage() {
  const [searchParams] = useSearchParams()
  let activeCategory = searchParams.get("category")  || ""


  const visibleProducts = activeCategory
    ? products.filter(p => p.category === activeCategory)
    : products;

  // хранить в запросе 
  return (
    <section className="page-shell">
      <p className="page-eyebrow">Каталог</p>
      <h1 className="page-title">Все растения</h1>

      <CategoryFilter />

      <div className="product-grid">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
