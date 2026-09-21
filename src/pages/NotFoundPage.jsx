import StatusBlock from '../components/StatusBlock.jsx';
import {useLocation, useNavigate} from 'react-router-dom';
export default function NotFoundPage({ path, onGoHome }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <section className="page-shell">
      <StatusBlock
        emoji="🍂"
        title="Такой страницы нет"
        subtitle={`Путь "${location.pathname}" не совпал ни с одним маршрутом.`}
        actionLabel="Вернуться на главную"
        onAction={() => navigate('/')}
      />
    </section>
  );
}
