import React from 'react'
import PropTypes from 'prop-types'
export default function Alert(props) {
  return (
    props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
    {props.alert.type}{props.alert.message}
   
  </div>
  )
}
Alert.prototypes={
    text1: PropTypes.string
};