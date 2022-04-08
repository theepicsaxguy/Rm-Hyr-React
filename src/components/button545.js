import React from 'react'

import PropTypes from 'prop-types'

import styles from './button545.module.css'

const Button545 = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <a
        href="mailto:benjamin.sanden@hotmail.com?subject=Kontakt Från Hemsida"
        className={styles['button545']}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <span className={styles['text']}>{props.text}</span>
      </a>
    </div>
  )
}

Button545.defaultProps = {
  image_alt: 'Rectangle8542',
  text: 'Kontakta Oss',
  rootClassName: '',
  image_src: '/playground_assets/rectangle8542-7bg.svg',
}

Button545.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Button545
