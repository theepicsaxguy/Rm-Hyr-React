import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Button545 from '../components/button545'
import styles from './hem.module.css'

const Hem = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Hem - RM Hyr</title>
        <meta
          name="description"
          content="RM-Hyr Hyr ut diverse matrial inom Bjärnums området. Vi erbjuder också förråd, garage och parkeringsplatser."
        />
        <meta property="og:title" content="Hem - RM Hyr" />
        <meta
          property="og:description"
          content="RM-Hyr Hyr ut diverse matrial inom Bjärnums området. Vi erbjuder också förråd, garage och parkeringsplatser."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/34f27f8a-21ce-4699-afb0-c91d3d805957/cbf8a591-0bf5-4b2f-ada7-2c42da019f3e?org_if_sml=1"
        />
      </Helmet>
      <div id="nav" className={styles['Navbar']}>
        <div className={styles['container01']}>
          <Link to="/" className={styles['text']}>
            RM-Hyr
          </Link>
          <div className={styles['Frame3103183']}>
            <a href="#om oss" className={styles['text01']}>
              Om Oss
            </a>
            <a href="#kontakt" className={styles['text02']}>
              Kontakt
            </a>
          </div>
        </div>
      </div>
      <div className={styles['Hero-Section']}>
        <div className={styles['container02']}>
          <span className={styles['text03']}>Slipp att ha sakerna hemma</span>
          <span className={styles['text04']}>Magasinering i Bjärnum</span>
          <span className={styles['text05']}>
            <span className={styles['text06']}>
              Vi erbjuder förvaringslösningar
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text07']}>
              och
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span className={styles['text09']}>diverse andra tjänster.</span>
          </span>
          <a
            href="mailto:rm-hyr@hotmail.com?subject=Kontakt Från Hemsida"
            className={styles['link']}
          >
            <Button545
              rootClassName="rootClassName"
              className={styles['component']}
            ></Button545>
          </a>
        </div>
        <img
          alt="image"
          src="/playground_assets/frame%202-1400w.png"
          className={styles['image']}
        />
      </div>
      <div className={styles['container03']}>
        <div id="hur" className={styles['container04']}>
          <span className={styles['text10']}>Såhär fungerar det</span>
          <span className={styles['text11']}>
            Det ska inte vara svårt att lagra sina tillhörigheter lokalt!
          </span>
        </div>
        <div className={styles['container05']}>
          <div className={styles['container06']}>
            <img
              alt="image"
              src="/playground_assets/group%2011-200h.png"
              className={styles['hue-2']}
            />
            <span className={styles['text12']}>1. Kontakta Oss</span>
          </div>
          <div className={styles['container07']}>
            <img
              alt="image"
              src="/playground_assets/group%2012-200h.png"
              className={styles['hue-21']}
            />
            <span className={styles['text13']}>2. Skriv På Avtal</span>
          </div>
          <div className={styles['container08']}>
            <img
              alt="image"
              src="/playground_assets/group%2013-200h.png"
              className={styles['hue-22']}
            />
            <span className={styles['text14']}>3. Flytta In</span>
          </div>
          <div className={styles['container09']}>
            <img
              alt="image"
              src="/playground_assets/group%2014-200h.png"
              className={styles['hue-23']}
            />
            <span className={styles['text15']}>4. Slappna Av</span>
          </div>
        </div>
      </div>
      <div className={styles['Om-oss']}>
        <div id="om oss" className={styles['mission8183']}>
          <span className={styles['text16']}>Om Oss</span>
          <span className={styles['text17']}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              elit. Id volutpat amet, feugiat ultrices enim mauris
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              neque fermentum, morbi. Sed arcu, est euismod
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              est quisque.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>Eleifend odio elit etiam praesent pharetra,</span>
            <br></br>
            <span> dictumst vel. Senectus libero id massa convallis</span>
            <br></br>
            <span>
              {' '}
              ut Enim, euismod platea amet enim at quis. In tincidunt.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              ultrices enim mauris neque fermentum, morbi. Sed arcu, est euismod
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              est quisque.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <img
          alt="missionimg891"
          src="/playground_assets/missionimg891-nesrh.svg"
          className={styles['image1']}
        />
      </div>
      <div className={styles['Vr-Vision']}>
        <div className={styles['Vision8254']}>
          <span id="varan vision" className={styles['text39']}>
            Våran Vision
          </span>
          <span className={styles['text40']}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              elit. Id volutpat amet, feugiat ultrices enim mauris
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              neque fermentum, morbi. Sed arcu, est euismod
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              est quisque.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>Eleifend odio elit etiam praesent pharetra,</span>
            <br></br>
            <span> dictumst vel. Senectus libero id massa convallis</span>
            <br></br>
            <span>
              {' '}
              ut Enim, euismod platea amet enim at quis. In tincidunt.
            </span>
            <br></br>
            <span></span>
          </span>
        </div>
        <img
          alt="visionimg8187"
          src="/playground_assets/visionimg8187-cep.svg"
          className={styles['image2']}
        />
      </div>
      <div className={styles['Populra']}>
        <span className={styles['text58']}>Populära Tjänster</span>
        <div className={styles['Group58273']}>
          <div className={styles['container10']}>
            <img
              alt="image"
              src="/playground_assets/group%201000000777-200h.png"
              className={styles['image3']}
            />
            <span className={styles['text59']}>Förråd</span>
            <span className={styles['text60']}>
              <span>
                Eleifend odio elit etiam
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>praesent pharetra,vel</span>
            </span>
          </div>
          <div className={styles['container11']}>
            <img
              alt="image"
              src="/playground_assets/group%201000000778-200h.png"
              className={styles['image4']}
            />
            <span className={styles['text64']}>Parkeringsplats</span>
            <span className={styles['text65']}>
              <span>
                Eleifend odio elit etiam
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>praesent pharetra,vel</span>
            </span>
          </div>
          <div className={styles['container12']}>
            <img
              alt="image"
              src="/playground_assets/group%201000000779-200h.png"
              className={styles['image5']}
            />
            <span className={styles['text69']}>Grävmaskin</span>
            <span className={styles['text70']}>
              <span>
                Eleifend odio elit etiam
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>praesent pharetra,vel</span>
            </span>
          </div>
          <div className={styles['container13']}>
            <img
              alt="image"
              src="/playground_assets/group%201000000780-200h.png"
              className={styles['image6']}
            />
            <span className={styles['text74']}>Privat Garage</span>
            <span className={styles['text75']}>
              <span>
                Eleifend odio elit etiam
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>praesent pharetra,vel</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles['Container14']}>
        <div className={styles['container15']}>
          <div className={styles['Group206103269']}>
            <div className={styles['container16']}>
              <span className={styles['text79']}>
                Få äntligen det extra utrymmet över
              </span>
              <span className={styles['text80']}>
                Slipp Grejerna hemma. Hyr av oss istället!
              </span>
              <div id="kontakt" className={styles['container17']}>
                <a
                  href="mailto:rm-hyr@hotmail.com?subject=Kontakt Från Hemsida"
                  className={styles['button545']}
                >
                  <span className={styles['text81']}>Kontakta Oss</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles['Footer']}>
        <span className={styles['text82']}>
          <span>© 2022 RM-Hyr, All Rights Reserved.</span>
          <span className={styles['text84']}></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Hem
