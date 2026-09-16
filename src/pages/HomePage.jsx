import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

export default function HomePage(  ) {
  const featuredProducts = products.slice(0,3)
  return (
    <section className="page-shell">
      <div className="hero">
        <div>
          <h1>Растения, которые правда выживут у вас дома</h1>
          <p>Подбор простых в уходе растений для новичков — от суккулентов до крупных фикусов.</p>
          <Link to= "/catalog" type="button" className="btn" >Смотреть каталог</Link>
        </div>
        <div className="hero-plant" />
      </div>

      <p className="section-label">Популярное сейчас</p>
      <div className="product-grid">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
}
