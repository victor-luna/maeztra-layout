import React, { useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import userIcon from "../../assets/userIcon.svg";
import wishlistIcon from "../../assets/wishlistIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import dressIcon from "../../assets/menuDressIcon.svg";
import customNextArrow from "../../assets/swiper_icon-next.svg";
import customPrevArrow from "../../assets/swiper_icon-prev.svg";

const Home = () => {
  // INÍCIO CONFIGURAÇÃO DO SLIDER
  const customPrev = (
    <div className={styles.customPrev}>
      <img src={customPrevArrow} alt="Prev" />
    </div>
  );

  const customNext = (
    <div className={styles.customNext}>
      <img src={customNextArrow} alt="Next" />
    </div>
  );

  const handleSlideChange = () => {
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");
    const pagination = document.querySelector(".swiper-pagination");

    if (bullets) {
      bullets.forEach((bullet) => {
        bullet.style.width = "12px";
        bullet.style.height = "12px";
        bullet.style.borderRadius = "50%";
        bullet.style.border = "2px solid #faa500";
        bullet.style.background = "transparent";
        bullet.style.opacity = "1";
        bullet.style.margin = "0 8px";
      });

      const activeBullet = document.querySelector(
        ".swiper-pagination-bullet-active"
      );
      if (activeBullet) {
        activeBullet.style.background = "#faa500";
      }

      if (pagination) {
        pagination.style.bottom = "24px";
      }
    }
  };

  useEffect(() => {
    handleSlideChange();
  }, []);
  // FIM CONFIGURAÇÃO DO SLIDER

  return (
    <>
      <header>
        <div className={styles.topbarSection}>
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchWrapper}>
            <div className={styles.headerLogo}>
              <a href="/" title="Logo">
                <img src={logo} alt="Logo" className={styles.headerLogoImg} />
              </a>
            </div>

            <div className={styles.searchBar}>
              <div className={styles.searchBarContainer}>
                <input type="text" placeholder="O Que Você Busca?" />
                <button>Buscar</button>
              </div>
            </div>

            <div className={styles.userSection}>
              <div className={styles.userWrapper}>
                <a href="/">
                  <img
                    src={userIcon}
                    alt="Usuário"
                    className={styles.userIcon}
                  />
                  <p>Minha Conta</p>
                </a>
              </div>

              <div className={styles.userWrapper}>
                <a href="/">
                  <img
                    src={wishlistIcon}
                    alt="Wishlist"
                    className={styles.wishlistIcon}
                  />
                  <p>Minha Conta</p>
                </a>
              </div>

              <div className={styles.userWrapper}>
                <a href="/">
                  <img
                    src={cartIcon}
                    alt="Usuário"
                    className={styles.cartIcon}
                  />
                  <p>Meu carrinho</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav className={styles.menuSection}>
          <div className={styles.menuWrapper}>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink}>
                  <div className={styles.menuIcon}>
                    <img src={dressIcon} alt="Novidades" />
                  </div>
                  <p className={styles.menuName}>Novidades</p>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink}>
                  <p className={styles.menuName}>Vestidos</p>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink}>
                  <p className={styles.menuName}>Roupas</p>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink}>
                  <p className={styles.menuName}>Sapatos</p>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink}>
                  <p className={styles.menuName}>Lingerie</p>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink}>
                  <p className={styles.menuName}>Acessórios</p>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink}>
                  <p className={styles.menuName}>OUTLET</p>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className={styles.bannerSection}>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
          >
            <SwiperSlide>
              <a href="#">
                <img src="https://i.imgur.com/8LMgajw.png" alt="FullBanner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src="https://i.imgur.com/8LMgajw.png" alt="FullBanner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src="https://i.imgur.com/8LMgajw.png" alt="FullBanner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src="https://i.imgur.com/8LMgajw.png" alt="FullBanner" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src="https://i.imgur.com/8LMgajw.png" alt="FullBanner" />
              </a>
            </SwiperSlide>
            <div className="custom-prev">{customPrev}</div>
            <div className="custom-next">{customNext}</div>
          </Swiper>
        </div>

        <div className={styles.dealsSection}>
          <h3 className={styles.dealsTitle}>Por que comprar na Maeztra?</h3>
          <div className={styles.dealsList}>
            <div className={styles.dealsContainer}>
              <div className={styles.dealsCard}>
                <div className={styles.dealsIcon}>
                  <img
                    src="https://i.imgur.com/1ofnnE1.png"
                    alt="Produtos importados"
                  />
                </div>
                <div className={styles.dealsText}>
                  <strong>Produtos importados</strong>
                  <p>Produto de Alta Qualidade</p>
                </div>
              </div>
            </div>
            <div className={styles.dealsContainer}>
              <div className={styles.dealsCard}>
                <div className={styles.dealsIcon}>
                  <img
                    src="https://i.imgur.com/gcBMx87.png"
                    alt="Estoque no Brasil"
                  />
                </div>
                <div className={styles.dealsText}>
                  <strong>Estoque no Brasil</strong>
                  <p>Produtos mais perto de você!</p>
                </div>
              </div>
            </div>
            <div className={styles.dealsContainer}>
              <div className={styles.dealsCard}>
                <div className={styles.dealsIcon}>
                  <img
                    src="https://i.imgur.com/cGH7QOh.png"
                    alt="Trocas Garantidas"
                  />
                </div>
                <div className={styles.dealsText}>
                  <strong>Trocas Garantidas</strong>
                  <p>Trocas em até 48 horas, veja as regras</p>
                </div>
              </div>
            </div>
            <div className={styles.dealsContainer}>
              <div className={styles.dealsCard}>
                <div className={styles.dealsIcon}>
                  <img
                    src="https://i.imgur.com/BBG2063.png"
                    alt="Ganhe 5% off"
                  />
                </div>
                <div className={styles.dealsText}>
                  <strong>Ganhe 5% off</strong>
                  <p>Pagando à vista no Cartão</p>
                </div>
              </div>
            </div>
            <div className={styles.dealsContainer}>
              <div className={styles.dealsCard}>
                <div className={styles.dealsIcon}>
                  <img
                    src="https://i.imgur.com/NPQ20mK.png"
                    alt="Frete Grátis"
                  />
                </div>
                <div className={styles.dealsText}>
                  <strong>Frete Grátis</strong>
                  <p>Em compras acima de R$ 499,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.brandsSection}>
          <h3 className={styles.brandsTitle}>Marcas Parceiras</h3>
          <div className={styles.brandsList}>
            <div className={styles.brandsContainer}>
              <div className={styles.brandsCard}>
                <a href="#" class="brands__link">
                  <img
                    src="https://i.imgur.com/5v7gLZL.png"
                    alt="Brand"
                    class="brands__img"
                  />
                </a>
              </div>
            </div>
            <div className={styles.brandsContainer}>
              <div className={styles.brandsCard}>
                <a href="#" class="brands__link">
                  <img
                    src="https://i.imgur.com/nqOsluH.png"
                    alt="Brand"
                    class="brands__img"
                  />
                </a>
              </div>
            </div>
            <div className={styles.brandsContainer}>
              <div className={styles.brandsCard}>
                <a href="#" class="brands__link">
                  <img
                    src="https://i.imgur.com/CnEYsEO.png"
                    alt="Brand"
                    class="brands__img"
                  />
                </a>
              </div>
            </div>
            <div className={styles.brandsContainer}>
              <div className={styles.brandsCard}>
                <a href="#" class="brands__link">
                  <img
                    src="https://i.imgur.com/s5INAOV.png"
                    alt="Brand"
                    class="brands__img"
                  />
                </a>
              </div>
            </div>
            <div className={styles.brandsContainer}>
              <div className={styles.brandsCard}>
                <a href="#" class="brands__link">
                  <img
                    src="https://i.imgur.com/oadtMkd.png"
                    alt="Brand"
                    class="brands__img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
