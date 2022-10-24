import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ProfileLogin from '~/components/Layout/components/profileLogin';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-left')}>
                <div className={cx('login-left-title')}>
                    <img
                        className={cx('logo-fb')}
                        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                        alt="anh1"
                    />
                    <p className={cx('h2-login', 'pd21')}>Đăng nhập gần đây</p>
                    <span className={cx('span-login', 'pd21')}>Nhấp vào ảnh của bạn hoặc thêm tài khoản.</span>
                </div>
                <div className={cx('profile-wrapper')}>
                    <ProfileLogin />
                    <ProfileLogin />
                    <ProfileLogin />
                </div>
            </div>
            <div className={cx('login-right')}>
                <div className={cx('login-right-wrapper')}>
                    <div className={cx('input-login-right')}>
                        <input type="text" placeholder="Email hoặc số điện thoại" />
                    </div>
                    <div className={cx('input-login-right')}>
                        <input type="password" placeholder="Mật khẩu" />
                    </div>
                    <button className={cx('btn-login-right', 'btn-login')}>Đăng nhập</button>
                    <Link className={cx('btn-forgotpassword')} to="/quenmatkhau">
                        Quên mật khẩu
                    </Link>
                    <div className={cx('mg20')}></div>
                    <button className={cx('btn-login-right', 'btn-creat')}>Tạo tài khoản mới</button>
                </div>
                <p className={cx('creat-page')}>
                    <Link to="creat-page">
                        <b>Tạo Trang </b>
                    </Link>
                    dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
                </p>
            </div>
        </div>
    );
}

export default Login;
