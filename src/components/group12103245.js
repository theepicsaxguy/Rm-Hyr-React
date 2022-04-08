import React from 'react'

import PropTypes from 'prop-types'

import styles from './group12103245.module.css'

const Group12103245 = (props) => {
  return (
    <div
      className={` ${styles['Group12103245']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
    </div>
  )
}

Group12103245.defaultProps = {
  rootClassName: '',
  image_alt: '103234',
  image_src: '/playground_assets/103234-ryqm.svg',
}

Group12103245.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Group12103245
