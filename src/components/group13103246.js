import React from 'react'

import PropTypes from 'prop-types'

import styles from './group13103246.module.css'

const Group13103246 = (props) => {
  return (
    <div
      className={` ${styles['Group13103246']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
    </div>
  )
}

Group13103246.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/biboxes103238-1fd.svg',
  image_alt: 'biboxes103238',
}

Group13103246.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Group13103246
