import BottomNavButton from './BottomNavButton';
import aboutIcon from '../assets/svg/icons/icon_about.svg';
import bookIcon from '../assets/svg/icons/icon_book.svg';
import parentsIcon from '../assets/svg/icons/icon_parents.svg';
import styles from '../styles/BottomNav.module.css';

const BottomNav = () => {
  return (
    <div className={styles.container}>
      <BottomNavButton text={'Acerca'} route={'/About'} icon={aboutIcon} />
      <BottomNavButton
        text={'Info Padres'}
        route={'/Info'}
        icon={parentsIcon}
      />
      <BottomNavButton text={'Más Libros'} route={'/More'} icon={bookIcon} />
    </div>
  );
};

export default BottomNav;
