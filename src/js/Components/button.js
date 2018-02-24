import { h, Component } from 'preact'

const Button = (properties) => {
    const buttonName = properties.name
    const buttonAction = properties.action
    return <button onClick={buttonAction}>{buttonName}</button>
}

export default Button