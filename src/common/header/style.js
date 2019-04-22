import styled from 'styled-components'
import LogoPic from '../../statics/logo2.jpeg';

export const HeaderWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid var(--light);
`

export const Logo = styled.img.attrs({
  src: LogoPic
})`
  width: 80px;
  height: 80px;
`