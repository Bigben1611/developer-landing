import styles from './Header.module.scss'
import frame from "./Frame.svg"
function Header() {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.links+" "+styles.layer__1110}>
                <a href="#">ГЛАВНАЯ</a>
                <a href="#">ОБ АВТОРЕ</a>
                <a href="#">РАБОТЫ</a>
                <a href="#">ПРОЦЕСС</a>
                <a href="#">КОНТАКТЫ</a>
            </div>
            <div className="header__bot layer__1110">
                <img src={frame} alt=""/>
                <div className="bot__right">
                    <h2 className="bot__right__h2">Дизайн и верстка</h2>
                    <p className="bot__right__p">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                    <a href="#" className="bot__right__a">НАПИСАТЬ МНЕ</a>
                </div>
            </div>
        </header>
    </>
  );
}

export default Header;

