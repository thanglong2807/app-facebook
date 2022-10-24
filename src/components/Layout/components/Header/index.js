import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// import ReactLogo from '~/acsset/facebook-messenger.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faCircle,
    faEllipsis,
    faMagnifyingGlass,
    faMaximize,
    faPenToSquare,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import {} from '@fortawesome/free-regular-svg-icons';
import MenuHeader from '../MenuHeader';
import { useState } from 'react';
import MenuMessenger from '../MenuMessenger';

const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1 className={cx('logo')}>
                    <Link to="/">
                        <svg
                            aria-label="Logo Facebook"
                            className={cx('x1ujvgzy')}
                            role="img"
                            viewBox="0 0 120 24"
                            width="120"
                        >
                            <path d="m109.202 14.864 4.404-7.03h4.746l-4.622 7.278 4.808 7.463h-4.746l-4.59-7.215v7.215h-4.467V.433l4.467-.402v14.833ZM98.596 14.524c0-1.951-.807-3.5-2.885-3.5s-2.885 1.549-2.885 3.5v1.363c0 1.95.807 3.499 2.885 3.499s2.885-1.549 2.885-3.5v-1.362ZM88.36 15.577v-.743c0-4.243 2.42-7.309 7.351-7.309s7.351 3.066 7.351 7.309v.743c0 4.242-2.42 7.308-7.351 7.308-4.932 0-7.351-3.066-7.351-7.308ZM82.406 14.524c0-1.951-.807-3.5-2.884-3.5-2.079 0-2.885 1.549-2.885 3.5v1.363c0 1.95.806 3.499 2.885 3.499 2.077 0 2.884-1.549 2.884-3.5v-1.362Zm-10.235 1.053v-.743c0-4.243 2.419-7.309 7.35-7.309 4.932 0 7.352 3.066 7.352 7.309v.743c0 4.242-2.42 7.308-7.352 7.308-4.931 0-7.35-3.066-7.35-7.308ZM66.216 14.648c0-2.075-.806-3.623-2.946-3.623-1.83 0-2.823 1.3-2.823 3.406v1.548c0 2.106.993 3.407 2.823 3.407 2.14 0 2.946-1.549 2.946-3.623v-1.115Zm4.467 1.022c0 4.118-1.985 7.215-6.08 7.215-2.233 0-3.783-1.115-4.404-2.539v2.23h-4.218V.434L60.447.03v9.848c.651-1.3 2.078-2.354 4.157-2.354 4.094 0 6.079 3.097 6.079 7.216v.929ZM44.723 13.843h5.397v-.372c0-1.61-.651-2.88-2.606-2.88-2.016 0-2.791 1.27-2.791 3.252m-4.466 1.92v-1.301c0-4.18 2.388-6.937 7.257-6.937 4.59 0 6.607 2.787 6.607 6.875v2.353h-9.398c.093 2.014.992 2.912 3.474 2.912 1.675 0 3.443-.341 4.745-.898l.807 3.065c-1.179.62-3.598 1.084-5.738 1.084-5.645 0-7.754-2.818-7.754-7.153M35.388 7.525c1.737 0 3.38.372 4.28.991l-.992 3.159c-.683-.34-1.8-.682-2.978-.682-2.42 0-3.474 1.394-3.474 3.778v.868c0 2.384 1.055 3.778 3.474 3.778 1.179 0 2.295-.34 2.978-.682l.992 3.16c-.9.618-2.543.99-4.28.99-5.242 0-7.63-2.818-7.63-7.34v-.68c0-4.522 2.388-7.34 7.63-7.34M15.973 15.732c0 2.198.806 3.654 2.884 3.654 1.83 0 2.76-1.332 2.76-3.438v-1.486c0-2.106-.93-3.437-2.76-3.437-2.078 0-2.884 1.455-2.884 3.654v1.053Zm-4.467-.991c0-4.119 1.954-7.216 6.049-7.216 2.233 0 3.598 1.146 4.249 2.57v-2.26h4.28v14.74h-4.28v-2.23c-.62 1.425-2.016 2.54-4.25 2.54-4.094 0-6.048-3.097-6.048-7.215v-.93ZM9.274 3.592c-1.396 0-1.8.62-1.8 1.982v2.26h3.723l-.372 3.655h-3.35v11.086H3.009V11.49H0V7.835h3.009V5.636C3.009 1.951 4.497 0 8.654 0c.9 0 1.954.062 2.605.155v3.437H9.274Z"></path>
                        </svg>
                    </Link>
                </h1>
                <div className={cx('header-search')}>
                    <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                    <input placeholder="Tìm kiếm trên Facebook" />
                </div>

                <div className={cx('icon-right')}>
                    <button onClick={() => (show ? setShow(false) : setShow(true))} className={cx('btn-icon-right')}>
                        <svg className={cx('messenger')} viewBox="0 0 512 512">
                            <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
                        </svg>
                    </button>

                    {show && (
                        <MenuHeader>
                            <div className={cx('pd15')}>
                                <div className={cx('menu-title')}>
                                    <h3>Chat</h3>
                                    <div>
                                        <button className={cx('btn-menu-title')}>
                                            <FontAwesomeIcon icon={faEllipsis} />
                                        </button>
                                        <button className={cx('btn-menu-title')}>
                                            <FontAwesomeIcon icon={faMaximize} />
                                        </button>
                                        <button className={cx('btn-menu-title')}>
                                            <FontAwesomeIcon icon={faVideo} />
                                        </button>
                                        <button className={cx('btn-menu-title')}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                    </div>
                                </div>

                                <div className={cx('header-search', 'menu-header-search')}>
                                    <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                                    <input placeholder="Tìm kiếm trên Messenger" />
                                </div>

                                <div className={cx('menu-option')}>
                                    <button className={cx('menu-option-mess', 'actice')}>Hộp thư</button>
                                    <button className={cx('menu-option-mess')}>Cộng đồng</button>
                                </div>
                                <div className={cx('menu--messenger')}>
                                    <MenuMessenger />
                                    <MenuMessenger />
                                    <MenuMessenger />
                                    <MenuMessenger />
                                    <MenuMessenger />
                                </div>
                                <div className={cx('menu-all-messenger')}>
                                    <Link to="/messenger">
                                        <b>Xem tất cả trong messenger</b>
                                    </Link>
                                </div>
                            </div>
                        </MenuHeader>
                    )}

                    <button className={cx('btn-icon-right')}>
                        <svg
                            viewBox="0 0 28 28"
                            alt=""
                            className={cx('messenger')}
                            fill="currentColor"
                            height="20"
                            width="20"
                        >
                            <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
                        </svg>
                    </button>
                    <button className={cx('btn-icon-right')}>
                        <img
                            className={cx('messenger', 'icon-avata')}
                            src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1Rph2yqJK04AX9FuicP&_nc_ht=scontent.fhan2-3.fna&oh=00_AT8Fb4dt45PUSPtwJE5OsRLPpHzWpmCInv_nrZA1KGrlnA&oe=63787DF8"
                            alt="avarta"
                        />
                        <FontAwesomeIcon className={cx('icon-down')} icon={faChevronDown} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
