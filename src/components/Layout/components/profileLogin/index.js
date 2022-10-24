import classNames from 'classnames/bind';
import styles from './ProfileLogin.module.scss';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function ProfileLogin({ children }) {
    return (
        <div className={cx('profile')}>
            <div className={cx('profile-container')}>
                <FontAwesomeIcon className={cx('icon-profile')} icon={faCircleXmark} />

                <img
                    className={cx('img-profile')}
                    src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=1Rph2yqJK04AX8dHi-H&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-PYGkXBweuuVA0ZErlHqMn3ODSv1dvwWmi2aZ8FvzVJw&oe=63787DF8"
                    alt="ảnh"
                />
                <span className={cx('name-profile')}>name</span>
            </div>
        </div>
    );
}

export default ProfileLogin;
