import React from 'react'
import { ReactSVG } from 'react-svg'
import styled, { css } from 'styled-components'

const SVGIconStyle = styled.div`
  svg {
    width: 100%;
    height: auto;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) =>
        props.color &&
        css`
      path {
        fill: ${props.color};
      }
    `}
  ${(props) =>
        props.size &&
        css`
      width: ${props.size};
      min-width: ${props.size};
      svg {
        width: ${props.size};
        min-width: ${props.size};
        height: auto;
      }
    `}
`

const SVGIcon = (props) => {
    const { icon, color, size } = props
    return (
        <SVGIconStyle color={color} size={size}>
            <ReactSVG src={icon} />
        </SVGIconStyle>
    )
}

export default SVGIcon