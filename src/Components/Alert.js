import React from 'react'

function Alert(props) {
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div>
        <div class={`alert alert-${props.alert.typ.toLowerCase()}`} role="alert">
            <strong>{props.alert.typ}</strong> {props.alert.msg}
        </div>
      </div>}
    </div>
  )
}

export default Alert
