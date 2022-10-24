import classNames from 'classnames/bind';

// import ReactLogo from '~/acsset/facebook-messenger.svg';
import styles from './MenuHeader.module.scss';
import {} from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function MenuHeader({ children }) {
    return <div className={cx('menu__header')}>{children}</div>;
}

export default MenuHeader;
