import React from 'react'
import { withStyles } from 'material-ui/styles'
import logoImg from './logo.png'

const styles = {
  logo: {
    width: '30px',
    marginRight: '15px'
  }
}

function Logo(props) {
  const { classes } = props
  return (
    <img
      src={logoImg}
      className={classes.logo}
      alt="Entaxy logo"
    />
  )
}

export default withStyles(styles)(Logo)