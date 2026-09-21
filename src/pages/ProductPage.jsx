import { labelForCategory, products } from '../data/products.js';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function ProductPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  
  const product = products.find((el) => el.id === id)

  if (!product) {
    return <div className="not-found-inline">Такого растения нет в каталоге.</div>;
  }

  return (
    <section className="page-shell">
      <div className="product-detail">
        <div className="detail-swatch" style={{ background: product.color }}>
          {product.name[0]}
        </div>
        <div className="detail-body">
          <p className="detail-name">{product.name}</p>
          <p className="detail-cat">{labelForCategory(product.category)}</p>
          <div className="detail-price">{product.price} ₽</div>
          <p className="detail-desc">{product.description}</p>
          <div className="detail-actions">
            <button type="button" className="btn ghost" onClick={()=> navigate(-1)

            }>← Назад</button>
          </div>
        </div>
      </div>
    </section>
  );
}
