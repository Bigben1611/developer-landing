import logo from './logo.svg';
import Header from './components/Header/Header'
function App() {
  return (
    <>
        <Header/>
    <main className="main">
        <section className="s1">
            <div className="about">
                <h2 className="about__h2">Обо мне</h2>
                <p className="about__p">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            </div>
        </section>
        <section className="s2">
            <div className="project">
                <img src="numbers__item1.svg" alt="" className="project__img"/>
                <img src={logo} alt="" className="project__img"/>
                <p className="project__p">40+<br/>проектов</p>
            </div>
            <div className="project">
                <img src="" alt="" className="project__img"/>
                <p className="project__p">40+<br/>проектов</p>
            </div>
            <div className="project">
                <img src="" alt="" className="project__img"/>
                <p className="project__p">40+<br/>проектов</p>
            </div>
            <div className="project">
                <img src="" alt="" className="project__img"/>
                <p className="project__p">40+<br/>проектов</p>
            </div>
            <div className="project">
                <img src="" alt="" className="project__img"/>
                <p className="project__p">40+<br/>проектов</p>
            </div>
            <div className="project">
                <img src="" alt="" className="project__img"/>
                <p className="project__p">40+<br/>проектов</p>
            </div>
        </section>
        <section className="s3 layer__1110">
            <div className="s3__left">
                <h2 className="s3__left__h2">Верстальщик</h2>
                <p className="s3__left__name">Тиль Швайгер</p>
                <p className="s3__left__p">Разрабатываю сайты для малого и среднего бизнеса. У меня можно заказать дизайн и верстку небольшого сайта или интернет-магазина</p>
                <a href="#" className="s3__left__a">НАПИСАТЬ МНЕ</a>
            </div>
            <img src="hero-avatar.svg" alt="" className="s3__img"/>
        </section>
        <div className="s__bg"><section className="s4 layer__1110">
            <div className="s4__work">
                <h2 className="s4__work__h2">Как я работаю</h2>
                <p className="s4__work__p">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            </div>
            <div className="s4__video"><img src="Vector.svg" alt=""/></div>
        </section></div >
        <div className="s__bg"><section className="s5">
            <h2 className="s5__h2">Хотите веб-сайт?</h2>
            <p className="s5__p">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            <form action="" className="form">
                <div className="form__div">
                    <input type="text" className="form__field" placeholder="Ваше имя"/>
                    <input type="text" className="form__field" placeholder="Ваш e-mail"/>
                </div>
                    <textarea className="form__text form__field" placeholder="Сообщение"></textarea>
                <button className="form__button">ОТПРАВИТЬ</button>
            </form>
        </section></div>
    </main>
    <footer className="footer">
        <p className="footer1">Тиль Швайгер</p>
        <p className="footer2">(с) 2020. Все права защищены.</p>
    </footer>
    </>
  );
}

export default App;
