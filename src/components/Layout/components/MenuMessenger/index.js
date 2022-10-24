import classNames from 'classnames/bind';

// import ReactLogo from '~/acsset/facebook-messenger.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuMessenger.module.scss';
import {} from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function MenuMessenger() {
    return (
        <div className={cx('menu--messenger-item')}>
            <img
                className={cx('messenger-item-avatar')}
                src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YBnA0Pdhn2IAX_RoxRx&_nc_ht=scontent.fhan2-2.fna&oh=00_AT8dCZpIIsCVnGfply2qRMEN9c-XkSDjNSoJw621q1lgMA&oe=637C7278"
                alt="avatar"
            />

            <div className={cx('messenger-item-name')}>
                <h3>Name</h3>
                <div>
                    <b>
                        <span className={cx('messenger-item-name-chat')}>chat</span>
                    </b>
                    <span className={cx('messenger-item-timeline')}> 9 phút</span>
                </div>
            </div>
            <div className={cx('messenger-item-icon-btn')}>
                <FontAwesomeIcon className={cx('messenger-item-icon')} icon={faCircle} />
                <FontAwesomeIcon className={cx('messenger-item-icon')} icon={faCircle} />
            </div>
        </div>
    );
}

export default MenuMessenger;
