import React, { useEffect, useState } from "react";
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
import cartIconMobile from "../../assets/cartIconMobile.svg";
import dressIcon from "../../assets/menuDressIcon.svg";
import customNextArrow from "../../assets/swiper_icon-next.svg";
import customPrevArrow from "../../assets/swiper_icon-prev.svg";

const Home = () => {
  const isMobile = window.innerWidth < 980;
  const [topbarVisible, setTopbarVisible] = useState(true);
  const [visibleLists, setVisibleLists] = useState([false, false, false]);

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
    // SLIDER PRIMEIRO BANNER
    const bannerSection = document.getElementById("bannerSection");
    const bullets = bannerSection.querySelectorAll(".swiper-pagination-bullet");
    const pagination = bannerSection.querySelector(".swiper-pagination");

    if (bullets) {
      bullets.forEach((bullet) => {
        bullet.style.width = isMobile ? "8px" : "12px";
        bullet.style.height = isMobile ? "8px" : "12px";
        bullet.style.borderRadius = "50%";
        bullet.style.border = "2px solid #faa500";
        bullet.style.background = "transparent";
        bullet.style.opacity = "1";
        bullet.style.margin = "0 8px";
      });

      const activeBullet = bannerSection.querySelector(
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

  const toggleVisibility = (index) => {
    if (isMobile) {
      setVisibleLists((prevVisibleLists) => {
        const updatedVisibility = [...prevVisibleLists];
        updatedVisibility[index] = !updatedVisibility[index];
        return updatedVisibility;
      });
    }
  };

  // CONFIGURAÇÃO TOPBAR
  useEffect(() => {
    const handleScroll = () => {
      const topbar = document.getElementById("topbar"); // Substitua com o ID real da sua topbar
      const searchSection = document.querySelector(`.${styles.searchSection}`);

      if (topbar && searchSection) {
        const topbarHeight = topbar.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY > topbarHeight) {
          if (topbarVisible) {
            setTopbarVisible(false);
          }
        } else {
          if (!topbarVisible) {
            setTopbarVisible(true);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [topbarVisible]);

  useEffect(() => {
    handleSlideChange();
  }, []);
  // FIM CONFIGURAÇÃO DO SLIDER

  return (
    <>
      <header>
        <div className={styles.topbarSection} id="topbar">
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </div>

        <div
          className={`${styles.searchSection} ${
            !topbarVisible && styles.searchSectionFixed
          }`}
        >
          <div className={styles.searchWrapper}>
            <div className={styles.headerLogo}>
              <a href="/" title="Logo">
                <img src={logo} alt="Logo" className={styles.headerLogoImg} />
              </a>
            </div>

            <div className={styles.menuMobileLeft}>
              <div className={styles.menuMobile}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0625 11.0625H0.9375C0.419719 11.0625 0 11.4822 0 12C0 12.5178 0.419719 12.9375 0.9375 12.9375H23.0625C23.5803 12.9375 24 12.5178 24 12C24 11.4822 23.5803 11.0625 23.0625 11.0625Z"
                    fill="black"
                  />
                  <path
                    d="M23.0625 3.5625H0.9375C0.419719 3.5625 0 3.98222 0 4.5C0 5.01778 0.419719 5.4375 0.9375 5.4375H23.0625C23.5803 5.4375 24 5.01778 24 4.5C24 3.98222 23.5803 3.5625 23.0625 3.5625Z"
                    fill="black"
                  />
                  <path
                    d="M23.0625 18.5625H0.9375C0.419719 18.5625 0 18.9822 0 19.5C0 20.0178 0.419719 20.4375 0.9375 20.4375H23.0625C23.5803 20.4375 24 20.0178 24 19.5C24 18.9822 23.5803 18.5625 23.0625 18.5625Z"
                    fill="black"
                  />
                </svg>
              </div>

              <div className={styles.headerLogoMobile}>
                <a href="/" title="Logo">
                  <img src={logo} alt="Logo" className={styles.headerLogoImg} />
                </a>
              </div>
            </div>

            <div className={styles.menuMobileRight}>
              <div className={styles.searchIconMobile}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8535 22.4395L16.8817 15.4677C18.204 13.8351 19 11.7597 19 9.50004C19 4.26175 14.7383 0 9.49999 0C4.2617 0 0 4.26175 0 9.50004C0 14.7383 4.26175 19.0001 9.50004 19.0001C11.7597 19.0001 13.8351 18.204 15.4677 16.8817L22.4395 23.8536C22.6348 24.0488 22.9513 24.0488 23.1467 23.8536L23.8536 23.1466C24.0488 22.9513 24.0488 22.6347 23.8535 22.4395ZM9.50004 17.0001C5.3643 17.0001 2.00002 13.6358 2.00002 9.50004C2.00002 5.3643 5.3643 2.00002 9.50004 2.00002C13.6358 2.00002 17.0001 5.3643 17.0001 9.50004C17.0001 13.6358 13.6358 17.0001 9.50004 17.0001Z"
                    fill="black"
                  />
                </svg>
              </div>

              <div className={styles.minicartMobile}>
                <a href="/">
                  <img src={cartIconMobile} alt="Minicart" />
                </a>
              </div>
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
        <div className={styles.bannerSection} id="bannerSection">
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

        <div className={styles.mainContainer}>
          <div className={styles.dealsSection}>
            <h3 className={styles.dealsTitle}>Por que comprar na Maeztra?</h3>
            <div className={styles.dealsList}>
              <Swiper
                slidesPerView={1.05}
                loop={false}
                breakpoints={{
                  1100: {
                    slidesPerView: 5,
                  },
                  720: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className={styles.brandsSection}>
            <h3 className={styles.brandsTitle}>Marcas Parceiras</h3>
            <div className={styles.brandsList}>
              <Swiper
                slidesPerView={1.05}
                loop={false}
                breakpoints={{
                  1100: {
                    slidesPerView: 5,
                  },
                  720: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className={styles.showcaseSection}>
            <h3 className={styles.showcaseTitle}>As Mais Pedidas</h3>
            <div className={styles.showcaseList}>
              <Swiper
                modules={[Navigation]}
                onSlideChange={handleSlideChange}
                navigation={{
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }}
                loop={true}
                breakpoints={{
                  424: {
                    slidesPerView: 1,
                    navigation: false,
                  },
                  425: {
                    slidesPerView: 2,
                    navigation: false,
                  },
                  990: {
                    slidesPerView: 3,
                    navigation: false,
                  },
                  1001: {
                    slidesPerView: 4,
                  },
                  1300: {
                    slidesPerView: 4,
                  },
                  1500: {
                    slidesPerView: 5,
                  },
                }}
              >
                {/* Item 1 */}
                <SwiperSlide>
                  <div className={styles.showcaseItem}>
                    <div className={styles.product}>
                      <div className={styles.productContainer}>
                        <div className={styles.productImage}>
                          <a href="#" className={styles.productLink}>
                            <img
                              src="https://i.imgur.com/uFAZIbL.png"
                              alt="Imagem do Produto"
                            />
                          </a>
                        </div>
                      </div>
                      <div className={styles.productMain}>
                        <div className={styles.productVariants}>
                          <ul className={styles.variantsList}>
                            <li className={styles.variantsItem}>
                              <div className={styles.yellow}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.orange}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.blue}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.purple}></div>
                            </li>
                          </ul>
                        </div>

                        <div className={styles.productPrice}>
                          <div className={styles.price}>R$ 500,00</div>
                        </div>

                        <div className={styles.productName}>
                          <a href="#" className={styles.productLink}>
                            Faux Suede Mini Skirt
                          </a>
                        </div>

                        <div className={styles.productDescription}>
                          A faux suede mini skirt featuring exposed button-front
                          closures and panel seam construction.
                        </div>
                      </div>

                      <div className={styles.productButton}>
                        <button className={styles.buttonBuy}>Adicionar</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Item 2 */}
                <SwiperSlide>
                  <div className={styles.showcaseItem}>
                    <div className={styles.product}>
                      <div className={styles.productContainer}>
                        <div className={styles.productImage}>
                          <a href="#" className={styles.productLink}>
                            <img
                              src="https://i.imgur.com/LZ7PAXu.png"
                              alt="Imagem do Produto"
                            />
                          </a>
                        </div>
                      </div>
                      <div className={styles.productMain}>
                        <div className={styles.productVariants}>
                          <ul className={styles.variantsList}>
                            <li className={styles.variantsItem}>
                              <div className={styles.black}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.red}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.beige}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.gray}></div>
                            </li>
                          </ul>
                        </div>

                        <div className={styles.productPrice}>
                          <div className={styles.price}>R$ 320,00</div>
                        </div>

                        <div className={styles.productName}>
                          <a href="#" className={styles.productLink}>
                            Ruched Rose Print Mini Skirt
                          </a>
                        </div>

                        <div className={styles.productDescription}>
                          A satin mini skirt featuring an allover floral print,
                          ruched side with self-tie closure, concealed back
                          zipper, and a flounce hem.
                        </div>
                      </div>

                      <div className={styles.productButton}>
                        <button className={styles.buttonBuy}>Adicionar</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Item 3 */}
                <SwiperSlide>
                  <div className={styles.showcaseItem}>
                    <div className={styles.product}>
                      <div className={styles.productContainer}>
                        <div className={styles.productImage}>
                          <a href="#" className={styles.productLink}>
                            <img
                              src="https://i.imgur.com/uFAZIbL.png"
                              alt="Imagem do Produto"
                            />
                          </a>
                        </div>
                      </div>
                      <div className={styles.productMain}>
                        <div className={styles.productVariants}>
                          <ul className={styles.variantsList}>
                            <li className={styles.variantsItem}>
                              <div className={styles.yellow}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.orange}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.blue}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.purple}></div>
                            </li>
                          </ul>
                        </div>

                        <div className={styles.productPrice}>
                          <div className={styles.price}>R$ 500,00</div>
                        </div>

                        <div className={styles.productName}>
                          <a href="#" className={styles.productLink}>
                            Faux Suede Mini Skirt
                          </a>
                        </div>

                        <div className={styles.productDescription}>
                          A faux suede mini skirt featuring exposed button-front
                          closures and panel seam construction.
                        </div>
                      </div>

                      <div className={styles.productButton}>
                        <button className={styles.buttonBuy}>Adicionar</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Item 4 */}
                <SwiperSlide>
                  <div className={styles.showcaseItem}>
                    <div className={styles.product}>
                      <div className={styles.productContainer}>
                        <div className={styles.productImage}>
                          <a href="#" className={styles.productLink}>
                            <img
                              src="https://i.imgur.com/LZ7PAXu.png"
                              alt="Imagem do Produto"
                            />
                          </a>
                        </div>
                      </div>
                      <div className={styles.productMain}>
                        <div className={styles.productVariants}>
                          <ul className={styles.variantsList}>
                            <li className={styles.variantsItem}>
                              <div className={styles.black}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.red}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.beige}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.gray}></div>
                            </li>
                          </ul>
                        </div>

                        <div className={styles.productPrice}>
                          <div className={styles.price}>R$ 320,00</div>
                        </div>

                        <div className={styles.productName}>
                          <a href="#" className={styles.productLink}>
                            Ruched Rose Print Mini Skirt
                          </a>
                        </div>

                        <div className={styles.productDescription}>
                          A satin mini skirt featuring an allover floral print,
                          ruched side with self-tie closure, concealed back
                          zipper, and a flounce hem.
                        </div>
                      </div>

                      <div className={styles.productButton}>
                        <button className={styles.buttonBuy}>Adicionar</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Item 5 */}
                <SwiperSlide>
                  <div className={styles.showcaseItem}>
                    <div className={styles.product}>
                      <div className={styles.productContainer}>
                        <div className={styles.productImage}>
                          <a href="#" className={styles.productLink}>
                            <img
                              src="https://i.imgur.com/uFAZIbL.png"
                              alt="Imagem do Produto"
                            />
                          </a>
                        </div>
                      </div>
                      <div className={styles.productMain}>
                        <div className={styles.productVariants}>
                          <ul className={styles.variantsList}>
                            <li className={styles.variantsItem}>
                              <div className={styles.yellow}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.orange}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.blue}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.purple}></div>
                            </li>
                          </ul>
                        </div>

                        <div className={styles.productPrice}>
                          <div className={styles.price}>R$ 500,00</div>
                        </div>

                        <div className={styles.productName}>
                          <a href="#" className={styles.productLink}>
                            Faux Suede Mini Skirt
                          </a>
                        </div>

                        <div className={styles.productDescription}>
                          A faux suede mini skirt featuring exposed button-front
                          closures and panel seam construction.
                        </div>
                      </div>

                      <div className={styles.productButton}>
                        <button className={styles.buttonBuy}>Adicionar</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Item 6 */}
                <SwiperSlide>
                  <div className={styles.showcaseItem}>
                    <div className={styles.product}>
                      <div className={styles.productContainer}>
                        <div className={styles.productImage}>
                          <a href="#" className={styles.productLink}>
                            <img
                              src="https://i.imgur.com/LZ7PAXu.png"
                              alt="Imagem do Produto"
                            />
                          </a>
                        </div>
                      </div>
                      <div className={styles.productMain}>
                        <div className={styles.productVariants}>
                          <ul className={styles.variantsList}>
                            <li className={styles.variantsItem}>
                              <div className={styles.black}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.red}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.beige}></div>
                            </li>
                            <li className={styles.variantsItem}>
                              <div className={styles.gray}></div>
                            </li>
                          </ul>
                        </div>

                        <div className={styles.productPrice}>
                          <div className={styles.price}>R$ 320,00</div>
                        </div>

                        <div className={styles.productName}>
                          <a href="#" className={styles.productLink}>
                            Ruched Rose Print Mini Skirt
                          </a>
                        </div>

                        <div className={styles.productDescription}>
                          A satin mini skirt featuring an allover floral print,
                          ruched side with self-tie closure, concealed back
                          zipper, and a flounce hem.
                        </div>
                      </div>

                      <div className={styles.productButton}>
                        <button className={styles.buttonBuy}>Adicionar</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <div className="custom-prev">{customPrev}</div>
                <div className="custom-next">{customNext}</div>
              </Swiper>
            </div>
          </div>

          <div className={styles.collectionSection}>
            <div className={styles.collectionContainer}>
              <div className={styles.collectionText}>
                <h3 className={styles.collectionTitle}>Lorem ipsum</h3>
                <p className={styles.collectionDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum mauris posuere fusce proin mattis. Hendrerit cras ut
                  nunc enim dictum. Mattis proin ut quis donec sed eget nulla.
                  Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus
                  condimentum velit pharetra. Amet luctus ut vulputate
                  scelerisque placerat consequat. Neque arcu mi iaculis id. Vel
                  vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris
                  pulvinar velit massa. Ut ornare augue eget convallis volutpat
                  aliquet. Sed sed pellentesque porttitor phasellus donec
                  condimentum sit sapien.
                </p>
              </div>

              <div className={styles.collectionImage}>
                <img src="https://i.imgur.com/qOpWu2x.png" alt="Coleção" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className={styles.newsletter}>
          <div className={styles.newsletterContainer}>
            <h3 className={styles.newsletterTitle}>Receba Nossa Newsletter</h3>

            <div className={styles.newsletterRightColumn}>
              <input
                type="text"
                className={styles.newsletterInput}
                placeholder="Digite seu e-mail"
              />
              <button className={styles.newsletterButton}>Enviar</button>
            </div>
          </div>
        </div>

        <div className={styles.footerContainer}>
          <div className={styles.footerRow}>
            <div
              className={styles.footerColumn}
              onClick={() => toggleVisibility(0)}
            >
              <h3
                className={`${styles.footerTitle} ${
                  visibleLists[0] && styles.menos
                }`}
              >
                Informações
              </h3>
              <ul
                className={`${styles.footerList} ${
                  visibleLists[0] && styles.menos
                }`}
              >
                <a href="#" className={styles.footerLink}>
                  Quem Somos
                </a>
                <a href="#" className={styles.footerLink}>
                  Prazo de Envio
                </a>
                <a href="#" className={styles.footerLink}>
                  Trocas e Devoluções
                </a>
                <a href="#" className={styles.footerLink}>
                  Promoções e Cupons
                </a>
              </ul>
            </div>

            <div
              className={styles.footerColumn}
              onClick={() => toggleVisibility(1)}
            >
              <h3
                className={`${styles.footerTitle} ${
                  visibleLists[1] && styles.menos
                }`}
              >
                Minha Conta
              </h3>
              <ul
                className={`${styles.footerList} ${
                  visibleLists[1] && styles.menos
                }`}
              >
                <a href="#" className={styles.footerLink}>
                  Minha Conta
                </a>
                <a href="#" className={styles.footerLink}>
                  Meus Pedidos
                </a>
                <a href="#" className={styles.footerLink}>
                  Cadastre-se
                </a>
              </ul>
            </div>

            <div
              className={styles.footerColumn}
              onClick={() => toggleVisibility(2)}
            >
              <h3
                className={`${styles.footerTitle} ${
                  visibleLists[2] && styles.menos
                }`}
              >
                Onde nos Encontrar
              </h3>
              <ul
                className={`${styles.footerList} ${
                  visibleLists[2] && styles.menos
                }`}
              >
                <a href="#" className={styles.footerLink}>
                  Lojas
                </a>
                <a href="#" className={styles.footerLink}>
                  Endereço
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContainer}>
            <div className={styles.socialNetworks}>
              <div className={styles.socialNetworksList}>
                <a href="#" className={styles.socialNetworksLink}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32 3.42857V28.5714C32 30.4643 30.4643 32 28.5714 32H22.4786V19.3429H26.8071L27.4286 14.5143H22.4786V11.4286C22.4786 10.0286 22.8643 9.07857 24.8714 9.07857H27.4286V4.76429C26.9857 4.70714 25.4714 4.57143 23.7 4.57143C20.0143 4.57143 17.4857 6.82143 17.4857 10.9571V14.5214H13.1429V19.35H17.4929V32H3.42857C1.53571 32 0 30.4643 0 28.5714V3.42857C0 1.53571 1.53571 0 3.42857 0H28.5714C30.4643 0 32 1.53571 32 3.42857Z" />
                  </svg>
                </a>
                <a href="#" className={styles.socialNetworksLink}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.16269 32H0.528453V10.6357H7.16269V32ZM3.842 7.72143C1.72104 7.72143 0 5.96429 0 3.84286C0 1.72143 1.72104 0 3.842 0C5.96295 0 7.684 1.72143 7.684 3.84286C7.684 5.96429 5.96295 7.72143 3.842 7.72143ZM31.9929 32H25.3729V21.6C25.3729 19.1214 25.3229 15.9429 21.9237 15.9429C18.4744 15.9429 17.946 18.6357 17.946 21.4214V32H11.3189V10.6357H17.6818V13.55H17.7746C18.6601 11.8714 20.8239 10.1 24.0518 10.1C30.7646 10.1 32 14.5214 32 20.2643V32H31.9929Z" />
                  </svg>
                </a>
                <a href="#" className={styles.socialNetworksLink}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.0036 7.7956C11.4632 7.7956 7.801 11.4587 7.801 16C7.801 20.5413 11.4632 24.2044 16.0036 24.2044C20.5439 24.2044 24.2061 20.5413 24.2061 16C24.2061 11.4587 20.5439 7.7956 16.0036 7.7956ZM16.0036 21.3339C13.0695 21.3339 10.6708 18.9419 10.6708 16C10.6708 13.0581 13.0624 10.6661 16.0036 10.6661C18.9448 10.6661 21.3363 13.0581 21.3363 16C21.3363 18.9419 18.9376 21.3339 16.0036 21.3339ZM26.4549 7.46C26.4549 8.52393 25.5982 9.37365 24.5417 9.37365C23.478 9.37365 22.6284 8.51679 22.6284 7.46C22.6284 6.40321 23.4851 5.54636 24.5417 5.54636C25.5982 5.54636 26.4549 6.40321 26.4549 7.46ZM31.8876 9.40221C31.7662 6.83878 31.1808 4.56811 29.3033 2.69731C27.4329 0.826509 25.1627 0.240991 22.5999 0.112462C19.9585 -0.0374873 12.0415 -0.0374873 9.40011 0.112462C6.8444 0.23385 4.57423 0.819368 2.69671 2.69017C0.819186 4.56097 0.240937 6.83164 0.112437 9.39507C-0.0374791 12.037 -0.0374791 19.9558 0.112437 22.5978C0.233798 25.1612 0.819186 27.4319 2.69671 29.3027C4.57423 31.1735 6.83726 31.759 9.40011 31.8875C12.0415 32.0375 19.9585 32.0375 22.5999 31.8875C25.1627 31.7661 27.4329 31.1806 29.3033 29.3027C31.1737 27.4319 31.7591 25.1612 31.8876 22.5978C32.0375 19.9558 32.0375 12.0442 31.8876 9.40221ZM28.4752 25.4326C27.9184 26.8321 26.8404 27.9103 25.434 28.4744C23.3281 29.3098 18.3308 29.117 16.0036 29.117C13.6763 29.117 8.67195 29.3027 6.57312 28.4744C5.1739 27.9174 4.09593 26.8392 3.53196 25.4326C2.69671 23.3261 2.88946 18.3278 2.88946 16C2.88946 13.6722 2.70385 8.66674 3.53196 6.56744C4.08879 5.16791 5.16676 4.0897 6.57312 3.52561C8.67909 2.69017 13.6763 2.88296 16.0036 2.88296C18.3308 2.88296 23.3352 2.69731 25.434 3.52561C26.8332 4.08256 27.9112 5.16077 28.4752 6.56744C29.3104 8.67388 29.1177 13.6722 29.1177 16C29.1177 18.3278 29.3104 23.3333 28.4752 25.4326Z" />
                  </svg>
                </a>
                <a href="#" className={styles.socialNetworksLink}>
                  <svg
                    width="32"
                    height="22"
                    viewBox="0 0 32 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M31.3313 3.44226C30.9633 2.08731 29.879 1.02019 28.5022 0.658052C26.0067 0 16 0 16 0C16 0 5.99337 0 3.49781 0.658052C2.12103 1.02025 1.0367 2.08731 0.668671 3.44226C0 5.89818 -2.27987e-08 11.0222 -2.27987e-08 11.0222C-2.27987e-08 11.0222 0 16.1463 0.668671 18.6022C1.0367 19.9572 2.12103 20.9798 3.49781 21.3419C5.99337 22 16 22 16 22C16 22 26.0066 22 28.5022 21.3419C29.879 20.9798 30.9633 19.9572 31.3313 18.6022C32 16.1463 32 11.0222 32 11.0222C32 11.0222 32 5.89818 31.3313 3.44226ZM12.7273 15.6745V6.36997L21.0909 11.0223L12.7273 15.6745Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.payment}>
              <div className={styles.paymentList}>
                <div className={styles.paymentItem}>
                  {" "}
                  <svg
                    width="32"
                    height="25"
                    viewBox="0 0 32 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.1167 11.1217C26.1167 11.1217 26.5389 13.1975 26.6333 13.6328H24.7778C24.9611 13.1362 25.6667 11.2054 25.6667 11.2054C25.6556 11.2221 25.85 10.6975 25.9611 10.3739L26.1167 11.1217ZM32 2.67857V22.3214C32 23.8002 30.8056 25 29.3333 25H2.66667C1.19444 25 0 23.8002 0 22.3214V2.67857C0 1.19978 1.19444 0 2.66667 0H29.3333C30.8056 0 32 1.19978 32 2.67857ZM8.47222 16.6964L11.9833 8.03571H9.62222L7.43889 13.9509L7.2 12.7511L6.42222 8.76674C6.29444 8.21429 5.9 8.05804 5.41111 8.03571H1.81667L1.77778 8.20871C2.65556 8.43192 3.43889 8.75558 4.12222 9.16295L6.11111 16.6964H8.47222ZM13.7167 16.7076L15.1167 8.03571H12.8833L11.4889 16.7076H13.7167ZM21.4889 13.8728C21.5 12.885 20.9 12.1317 19.6167 11.5123C18.8333 11.1161 18.3556 10.8482 18.3556 10.4408C18.3667 10.0725 18.7611 9.69308 19.6389 9.69308C20.3667 9.67634 20.9 9.84933 21.3 10.0223L21.5 10.1172L21.8056 8.24219C21.3667 8.0692 20.6667 7.87388 19.8056 7.87388C17.6 7.87388 16.05 9.05692 16.0389 10.7422C16.0222 11.9866 17.15 12.6786 17.9944 13.0971C18.8556 13.5212 19.15 13.8002 19.15 14.1741C19.1389 14.7545 18.45 15.0223 17.8111 15.0223C16.9222 15.0223 16.4444 14.8828 15.7167 14.5592L15.4222 14.4196L15.1111 16.3672C15.6333 16.6071 16.6 16.8192 17.6 16.8304C19.9444 16.8359 21.4722 15.6696 21.4889 13.8728ZM29.3333 16.7076L27.5333 8.03571H25.8056C25.2722 8.03571 24.8667 8.19196 24.6389 8.75558L21.3222 16.7076H23.6667C23.6667 16.7076 24.05 15.6362 24.1333 15.4074H27C27.0667 15.7143 27.2667 16.7076 27.2667 16.7076H29.3333Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={styles.paymentItem}>
                  <svg
                    width="32"
                    height="25"
                    viewBox="0 0 32 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.8278 21.0547C26.8278 21.4342 26.5722 21.7076 26.2056 21.7076C25.8278 21.7076 25.5833 21.4174 25.5833 21.0547C25.5833 20.692 25.8278 20.4018 26.2056 20.4018C26.5722 20.4018 26.8278 20.692 26.8278 21.0547ZM9.56111 20.4018C9.16667 20.4018 8.93889 20.692 8.93889 21.0547C8.93889 21.4174 9.16667 21.7076 9.56111 21.7076C9.92222 21.7076 10.1667 21.4342 10.1667 21.0547C10.1611 20.692 9.92222 20.4018 9.56111 20.4018ZM16.0889 20.385C15.7889 20.385 15.6056 20.5804 15.5611 20.8705H16.6222C16.5722 20.5525 16.3778 20.385 16.0889 20.385ZM22.0778 20.4018C21.7 20.4018 21.4722 20.692 21.4722 21.0547C21.4722 21.4174 21.7 21.7076 22.0778 21.7076C22.4556 21.7076 22.7 21.4342 22.7 21.0547C22.7 20.692 22.4556 20.4018 22.0778 20.4018ZM27.9611 21.8583C27.9611 21.875 27.9778 21.8862 27.9778 21.9196C27.9778 21.9364 27.9611 21.9475 27.9611 21.981C27.9444 21.9978 27.9444 22.0089 27.9333 22.0257C27.9167 22.0424 27.9056 22.0536 27.8722 22.0536C27.8556 22.0703 27.8444 22.0703 27.8111 22.0703C27.7944 22.0703 27.7833 22.0703 27.75 22.0536C27.7333 22.0536 27.7222 22.0368 27.7056 22.0257C27.6889 22.0089 27.6778 21.9978 27.6778 21.981C27.6611 21.9531 27.6611 21.9364 27.6611 21.9196C27.6611 21.8917 27.6611 21.875 27.6778 21.8583C27.6778 21.8304 27.6944 21.8136 27.7056 21.7969C27.7222 21.7801 27.7333 21.7801 27.75 21.769C27.7778 21.7522 27.7944 21.7522 27.8111 21.7522C27.8389 21.7522 27.8556 21.7522 27.8722 21.769C27.9 21.7857 27.9167 21.7857 27.9333 21.7969C27.95 21.808 27.9444 21.8304 27.9611 21.8583ZM27.8389 21.9364C27.8667 21.9364 27.8667 21.9196 27.8833 21.9196C27.9 21.9029 27.9 21.8917 27.9 21.875C27.9 21.8583 27.9 21.8471 27.8833 21.8304C27.8667 21.8304 27.8556 21.8136 27.8222 21.8136H27.7333V22.0089H27.7778V21.9308H27.7944L27.8556 22.0089H27.9L27.8389 21.9364ZM32 2.67857V22.3214C32 23.8002 30.8056 25 29.3333 25H2.66667C1.19444 25 0 23.8002 0 22.3214V2.67857C0 1.19978 1.19444 0 2.66667 0H29.3333C30.8056 0 32 1.19978 32 2.67857ZM3.55556 10.4688C3.55556 14.7377 7.00556 18.1975 11.25 18.1975C12.7611 18.1975 14.2444 17.74 15.5 16.9085C11.45 13.5993 11.4778 7.35491 15.5 4.04576C14.2444 3.20871 12.7611 2.7567 11.25 2.7567C7.00556 2.75112 3.55556 6.21652 3.55556 10.4688ZM16 16.5402C19.9167 13.471 19.9 7.48884 16 4.4029C12.1 7.48884 12.0833 13.4766 16 16.5402ZM8.09444 20.798C8.09444 20.3125 7.77778 19.9944 7.27778 19.9777C7.02222 19.9777 6.75 20.0558 6.56667 20.3404C6.43333 20.1116 6.20556 19.9777 5.88889 19.9777C5.67778 19.9777 5.46667 20.0558 5.3 20.279V20.0335H4.84444V22.0815H5.3C5.3 21.0268 5.16111 20.3962 5.8 20.3962C6.36667 20.3962 6.25556 20.9654 6.25556 22.0815H6.69444C6.69444 21.0603 6.55556 20.3962 7.19444 20.3962C7.76111 20.3962 7.65 20.9542 7.65 22.0815H8.10556V20.798H8.09444ZM10.5889 20.0335H10.15V20.279C10 20.0949 9.78889 19.9777 9.5 19.9777C8.92778 19.9777 8.48889 20.4353 8.48889 21.0547C8.48889 21.6797 8.92778 22.1317 9.5 22.1317C9.78889 22.1317 10 22.0257 10.15 21.8304V22.0871H10.5889V20.0335ZM12.8389 21.4621C12.8389 20.625 11.5667 21.0045 11.5667 20.6138C11.5667 20.2958 12.2278 20.346 12.5944 20.5525L12.7778 20.1897C12.2556 19.8493 11.1 19.8549 11.1 20.6473C11.1 21.4453 12.3722 21.1105 12.3722 21.4844C12.3722 21.8359 11.6222 21.808 11.2222 21.529L11.0278 21.8806C11.65 22.3047 12.8389 22.2154 12.8389 21.4621ZM14.8056 21.981L14.6833 21.6016C14.4722 21.7188 14.0056 21.8471 14.0056 21.3728V20.4464H14.7333V20.0335H14.0056V19.4085H13.55V20.0335H13.1278V20.4408H13.55V21.3728C13.55 22.3549 14.5111 22.1763 14.8056 21.981ZM15.5444 21.2333H17.0722C17.0722 20.3292 16.6611 19.9721 16.1056 19.9721C15.5167 19.9721 15.0944 20.4129 15.0944 21.0491C15.0944 22.1931 16.35 22.3828 16.9722 21.8415L16.7611 21.5067C16.3278 21.8638 15.6722 21.8304 15.5444 21.2333ZM18.8278 20.0335C18.5722 19.9219 18.1833 19.933 17.9833 20.279V20.0335H17.5278V22.0815H17.9833V20.9263C17.9833 20.279 18.5111 20.3627 18.6944 20.4576L18.8278 20.0335ZM19.4167 21.0547C19.4167 20.4185 20.0611 20.2121 20.5667 20.5859L20.7778 20.2232C20.1333 19.7154 18.9611 19.9944 18.9611 21.0603C18.9611 22.1652 20.2056 22.3884 20.7778 21.8973L20.5667 21.5346C20.0556 21.8973 19.4167 21.6797 19.4167 21.0547ZM23.1222 20.0335H22.6667V20.279C22.2056 19.6652 21.0056 20.0112 21.0056 21.0547C21.0056 22.1261 22.25 22.433 22.6667 21.8304V22.0871H23.1222V20.0335ZM24.9944 20.0335C24.8611 19.9665 24.3833 19.8717 24.15 20.279V20.0335H23.7111V22.0815H24.15V20.9263C24.15 20.3125 24.65 20.3516 24.8611 20.4576L24.9944 20.0335ZM27.2333 19.202H26.7944V20.279C26.3389 19.6708 25.1333 19.9944 25.1333 21.0547C25.1333 22.1373 26.3833 22.4275 26.7944 21.8304V22.0871H27.2333V19.202ZM27.6556 15.0112V15.2679H27.7V15.0112H27.8056V14.9665H27.55V15.0112H27.6556ZM28.0222 21.9196C28.0222 21.8917 28.0222 21.8583 28.0056 21.8304C27.9889 21.8136 27.9778 21.7857 27.9611 21.769C27.9444 21.7522 27.9167 21.7411 27.9 21.7243C27.8722 21.7243 27.8389 21.7076 27.8111 21.7076C27.7944 21.7076 27.7667 21.7243 27.7333 21.7243C27.7056 21.7411 27.6889 21.7522 27.6722 21.769C27.6444 21.7857 27.6278 21.8136 27.6278 21.8304C27.6111 21.8583 27.6111 21.8917 27.6111 21.9196C27.6111 21.9364 27.6111 21.9643 27.6278 21.9978C27.6278 22.0145 27.6444 22.0424 27.6722 22.0592C27.6889 22.0759 27.7 22.0871 27.7333 22.1038C27.7611 22.1205 27.7944 22.1205 27.8111 22.1205C27.8389 22.1205 27.8722 22.1205 27.9 22.1038C27.9167 22.0871 27.9444 22.0759 27.9611 22.0592C27.9778 22.0424 27.9889 22.0145 28.0056 21.9978C28.0222 21.9643 28.0222 21.9364 28.0222 21.9196ZM28.2 14.9609H28.1222L28.0333 15.1562L27.9444 14.9609H27.8667V15.2623H27.9111V15.0335L28 15.2288H28.0611L28.1389 15.0335V15.2623H28.2V14.9609ZM28.4444 10.4688C28.4444 6.21652 24.9944 2.75112 20.75 2.75112C19.2389 2.75112 17.7556 3.20871 16.5 4.04018C20.5056 7.34933 20.5667 13.6105 16.5 16.9029C17.7556 17.74 19.25 18.192 20.75 18.192C24.9944 18.1975 28.4444 14.7377 28.4444 10.4688Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={styles.paymentItem}>
                  <svg
                    width="32"
                    height="25"
                    viewBox="0 0 32 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.1167 11.1217C26.1167 11.1217 26.5389 13.1975 26.6333 13.6328H24.7778C24.9611 13.1362 25.6667 11.2054 25.6667 11.2054C25.6556 11.2221 25.85 10.6975 25.9611 10.3739L26.1167 11.1217ZM32 2.67857V22.3214C32 23.8002 30.8056 25 29.3333 25H2.66667C1.19444 25 0 23.8002 0 22.3214V2.67857C0 1.19978 1.19444 0 2.66667 0H29.3333C30.8056 0 32 1.19978 32 2.67857ZM8.47222 16.6964L11.9833 8.03571H9.62222L7.43889 13.9509L7.2 12.7511L6.42222 8.76674C6.29444 8.21429 5.9 8.05804 5.41111 8.03571H1.81667L1.77778 8.20871C2.65556 8.43192 3.43889 8.75558 4.12222 9.16295L6.11111 16.6964H8.47222ZM13.7167 16.7076L15.1167 8.03571H12.8833L11.4889 16.7076H13.7167ZM21.4889 13.8728C21.5 12.885 20.9 12.1317 19.6167 11.5123C18.8333 11.1161 18.3556 10.8482 18.3556 10.4408C18.3667 10.0725 18.7611 9.69308 19.6389 9.69308C20.3667 9.67634 20.9 9.84933 21.3 10.0223L21.5 10.1172L21.8056 8.24219C21.3667 8.0692 20.6667 7.87388 19.8056 7.87388C17.6 7.87388 16.05 9.05692 16.0389 10.7422C16.0222 11.9866 17.15 12.6786 17.9944 13.0971C18.8556 13.5212 19.15 13.8002 19.15 14.1741C19.1389 14.7545 18.45 15.0223 17.8111 15.0223C16.9222 15.0223 16.4444 14.8828 15.7167 14.5592L15.4222 14.4196L15.1111 16.3672C15.6333 16.6071 16.6 16.8192 17.6 16.8304C19.9444 16.8359 21.4722 15.6696 21.4889 13.8728ZM29.3333 16.7076L27.5333 8.03571H25.8056C25.2722 8.03571 24.8667 8.19196 24.6389 8.75558L21.3222 16.7076H23.6667C23.6667 16.7076 24.05 15.6362 24.1333 15.4074H27C27.0667 15.7143 27.2667 16.7076 27.2667 16.7076H29.3333Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={styles.paymentItem}>
                  <svg
                    width="32"
                    height="25"
                    viewBox="0 0 32 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.8278 21.0547C26.8278 21.4342 26.5722 21.7076 26.2056 21.7076C25.8278 21.7076 25.5833 21.4174 25.5833 21.0547C25.5833 20.692 25.8278 20.4018 26.2056 20.4018C26.5722 20.4018 26.8278 20.692 26.8278 21.0547ZM9.56111 20.4018C9.16667 20.4018 8.93889 20.692 8.93889 21.0547C8.93889 21.4174 9.16667 21.7076 9.56111 21.7076C9.92222 21.7076 10.1667 21.4342 10.1667 21.0547C10.1611 20.692 9.92222 20.4018 9.56111 20.4018ZM16.0889 20.385C15.7889 20.385 15.6056 20.5804 15.5611 20.8705H16.6222C16.5722 20.5525 16.3778 20.385 16.0889 20.385ZM22.0778 20.4018C21.7 20.4018 21.4722 20.692 21.4722 21.0547C21.4722 21.4174 21.7 21.7076 22.0778 21.7076C22.4556 21.7076 22.7 21.4342 22.7 21.0547C22.7 20.692 22.4556 20.4018 22.0778 20.4018ZM27.9611 21.8583C27.9611 21.875 27.9778 21.8862 27.9778 21.9196C27.9778 21.9364 27.9611 21.9475 27.9611 21.981C27.9444 21.9978 27.9444 22.0089 27.9333 22.0257C27.9167 22.0424 27.9056 22.0536 27.8722 22.0536C27.8556 22.0703 27.8444 22.0703 27.8111 22.0703C27.7944 22.0703 27.7833 22.0703 27.75 22.0536C27.7333 22.0536 27.7222 22.0368 27.7056 22.0257C27.6889 22.0089 27.6778 21.9978 27.6778 21.981C27.6611 21.9531 27.6611 21.9364 27.6611 21.9196C27.6611 21.8917 27.6611 21.875 27.6778 21.8583C27.6778 21.8304 27.6944 21.8136 27.7056 21.7969C27.7222 21.7801 27.7333 21.7801 27.75 21.769C27.7778 21.7522 27.7944 21.7522 27.8111 21.7522C27.8389 21.7522 27.8556 21.7522 27.8722 21.769C27.9 21.7857 27.9167 21.7857 27.9333 21.7969C27.95 21.808 27.9444 21.8304 27.9611 21.8583ZM27.8389 21.9364C27.8667 21.9364 27.8667 21.9196 27.8833 21.9196C27.9 21.9029 27.9 21.8917 27.9 21.875C27.9 21.8583 27.9 21.8471 27.8833 21.8304C27.8667 21.8304 27.8556 21.8136 27.8222 21.8136H27.7333V22.0089H27.7778V21.9308H27.7944L27.8556 22.0089H27.9L27.8389 21.9364ZM32 2.67857V22.3214C32 23.8002 30.8056 25 29.3333 25H2.66667C1.19444 25 0 23.8002 0 22.3214V2.67857C0 1.19978 1.19444 0 2.66667 0H29.3333C30.8056 0 32 1.19978 32 2.67857ZM3.55556 10.4688C3.55556 14.7377 7.00556 18.1975 11.25 18.1975C12.7611 18.1975 14.2444 17.74 15.5 16.9085C11.45 13.5993 11.4778 7.35491 15.5 4.04576C14.2444 3.20871 12.7611 2.7567 11.25 2.7567C7.00556 2.75112 3.55556 6.21652 3.55556 10.4688ZM16 16.5402C19.9167 13.471 19.9 7.48884 16 4.4029C12.1 7.48884 12.0833 13.4766 16 16.5402ZM8.09444 20.798C8.09444 20.3125 7.77778 19.9944 7.27778 19.9777C7.02222 19.9777 6.75 20.0558 6.56667 20.3404C6.43333 20.1116 6.20556 19.9777 5.88889 19.9777C5.67778 19.9777 5.46667 20.0558 5.3 20.279V20.0335H4.84444V22.0815H5.3C5.3 21.0268 5.16111 20.3962 5.8 20.3962C6.36667 20.3962 6.25556 20.9654 6.25556 22.0815H6.69444C6.69444 21.0603 6.55556 20.3962 7.19444 20.3962C7.76111 20.3962 7.65 20.9542 7.65 22.0815H8.10556V20.798H8.09444ZM10.5889 20.0335H10.15V20.279C10 20.0949 9.78889 19.9777 9.5 19.9777C8.92778 19.9777 8.48889 20.4353 8.48889 21.0547C8.48889 21.6797 8.92778 22.1317 9.5 22.1317C9.78889 22.1317 10 22.0257 10.15 21.8304V22.0871H10.5889V20.0335ZM12.8389 21.4621C12.8389 20.625 11.5667 21.0045 11.5667 20.6138C11.5667 20.2958 12.2278 20.346 12.5944 20.5525L12.7778 20.1897C12.2556 19.8493 11.1 19.8549 11.1 20.6473C11.1 21.4453 12.3722 21.1105 12.3722 21.4844C12.3722 21.8359 11.6222 21.808 11.2222 21.529L11.0278 21.8806C11.65 22.3047 12.8389 22.2154 12.8389 21.4621ZM14.8056 21.981L14.6833 21.6016C14.4722 21.7188 14.0056 21.8471 14.0056 21.3728V20.4464H14.7333V20.0335H14.0056V19.4085H13.55V20.0335H13.1278V20.4408H13.55V21.3728C13.55 22.3549 14.5111 22.1763 14.8056 21.981ZM15.5444 21.2333H17.0722C17.0722 20.3292 16.6611 19.9721 16.1056 19.9721C15.5167 19.9721 15.0944 20.4129 15.0944 21.0491C15.0944 22.1931 16.35 22.3828 16.9722 21.8415L16.7611 21.5067C16.3278 21.8638 15.6722 21.8304 15.5444 21.2333ZM18.8278 20.0335C18.5722 19.9219 18.1833 19.933 17.9833 20.279V20.0335H17.5278V22.0815H17.9833V20.9263C17.9833 20.279 18.5111 20.3627 18.6944 20.4576L18.8278 20.0335ZM19.4167 21.0547C19.4167 20.4185 20.0611 20.2121 20.5667 20.5859L20.7778 20.2232C20.1333 19.7154 18.9611 19.9944 18.9611 21.0603C18.9611 22.1652 20.2056 22.3884 20.7778 21.8973L20.5667 21.5346C20.0556 21.8973 19.4167 21.6797 19.4167 21.0547ZM23.1222 20.0335H22.6667V20.279C22.2056 19.6652 21.0056 20.0112 21.0056 21.0547C21.0056 22.1261 22.25 22.433 22.6667 21.8304V22.0871H23.1222V20.0335ZM24.9944 20.0335C24.8611 19.9665 24.3833 19.8717 24.15 20.279V20.0335H23.7111V22.0815H24.15V20.9263C24.15 20.3125 24.65 20.3516 24.8611 20.4576L24.9944 20.0335ZM27.2333 19.202H26.7944V20.279C26.3389 19.6708 25.1333 19.9944 25.1333 21.0547C25.1333 22.1373 26.3833 22.4275 26.7944 21.8304V22.0871H27.2333V19.202ZM27.6556 15.0112V15.2679H27.7V15.0112H27.8056V14.9665H27.55V15.0112H27.6556ZM28.0222 21.9196C28.0222 21.8917 28.0222 21.8583 28.0056 21.8304C27.9889 21.8136 27.9778 21.7857 27.9611 21.769C27.9444 21.7522 27.9167 21.7411 27.9 21.7243C27.8722 21.7243 27.8389 21.7076 27.8111 21.7076C27.7944 21.7076 27.7667 21.7243 27.7333 21.7243C27.7056 21.7411 27.6889 21.7522 27.6722 21.769C27.6444 21.7857 27.6278 21.8136 27.6278 21.8304C27.6111 21.8583 27.6111 21.8917 27.6111 21.9196C27.6111 21.9364 27.6111 21.9643 27.6278 21.9978C27.6278 22.0145 27.6444 22.0424 27.6722 22.0592C27.6889 22.0759 27.7 22.0871 27.7333 22.1038C27.7611 22.1205 27.7944 22.1205 27.8111 22.1205C27.8389 22.1205 27.8722 22.1205 27.9 22.1038C27.9167 22.0871 27.9444 22.0759 27.9611 22.0592C27.9778 22.0424 27.9889 22.0145 28.0056 21.9978C28.0222 21.9643 28.0222 21.9364 28.0222 21.9196ZM28.2 14.9609H28.1222L28.0333 15.1562L27.9444 14.9609H27.8667V15.2623H27.9111V15.0335L28 15.2288H28.0611L28.1389 15.0335V15.2623H28.2V14.9609ZM28.4444 10.4688C28.4444 6.21652 24.9944 2.75112 20.75 2.75112C19.2389 2.75112 17.7556 3.20871 16.5 4.04018C20.5056 7.34933 20.5667 13.6105 16.5 16.9029C17.7556 17.74 19.25 18.192 20.75 18.192C24.9944 18.1975 28.4444 14.7377 28.4444 10.4688Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.copyright}>
              <div className={styles.copyrightList}>
                <div className={`${styles.copyrightItem} ${styles.vtex}`}>
                  <div className={styles.copyrightTitle}>Powered by</div>
                  <div className={styles.copyrightIcon}>
                    <img src="https://i.imgur.com/bWeiLlM.png" alt="VTEX" />
                  </div>
                </div>
                <div className={styles.copyrightItem + " " + "maeztra"}>
                  <div className={styles.copyrightTitle}>Developed by</div>
                  <div className={styles.copyrightIcon}>
                    <img src="https://i.imgur.com/tL2wVMT.png" alt="MAEZTRA" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
