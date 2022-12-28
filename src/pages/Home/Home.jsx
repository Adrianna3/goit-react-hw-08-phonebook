import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { Section } from 'components/section/Section';
import { useAuth } from 'hooks/useAuth';

export default function Home() {
  const { wrapper, title, welcome } = styles;
  const { isLoggedIn, user } = useAuth();

  return (
    <div className={wrapper}>
      <Section title="Phonebook">
        {isLoggedIn ? (
          <>
            <p className={title}>Welcome back {user.name}</p>
            <p className={welcome}>
              Your <Link to="/contacts">contacts &#187;</Link>{' '}
            </p>
          </>
        ) : (
          <div>
            <p className={title}> Welcome on Phonebook</p>
            <p className={welcome}>
              {' '}
              On this page you can create your own database of contacts to your
              friends
            </p>
            <p className={welcome}>
              {' '}
              To start, please <Link to="/login">Log in &#187;</Link>
            </p>
            <p className={welcome}>
              {' '}
              You are here for the first time? Go to{' '}
              <Link to="/register">register &#187;</Link> to create your account
            </p>
          </div>
        )}
      </Section>
    </div>
  );
}
