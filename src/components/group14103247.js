import React from 'react'

import PropTypes from 'prop-types'

import styles from './group14103247.module.css'

const Group14103247 = (props) => {
  return (
    <div
      className={` ${styles['Group14103247']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
    </div>
  )
}

Group14103247.defaultProps = {
  rootClassName: '',
  image_alt: 'arcticonslockmyphone103240',
  image_src: '/playground_assets/arcticonslockmyphone103240-pp89.svg',
}

Group14103247.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Group14103247
