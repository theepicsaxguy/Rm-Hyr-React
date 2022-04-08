import React from 'react'

import PropTypes from 'prop-types'

import styles from './group11103244.module.css'

const Group11103244 = (props) => {
  return (
    <div
      className={` ${styles['Group11103244']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
    </div>
  )
}

Group11103244.defaultProps = {
  image_src: '/playground_assets/clarityemailline103231-j7vp.svg',
  image_alt: 'clarityemailline103231',
  rootClassName: '',
}

Group11103244.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Group11103244
