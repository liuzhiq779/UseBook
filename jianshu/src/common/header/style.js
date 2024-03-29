import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper =  styled.div`
  position: relative;
  height: 56px;
  border-bottom:1px solid #f0f0f0;
`
export  const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  display: block;
  background:url(${logoPic}) ;
  background-size: contain;
`

export  const  Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto ;
  padding-right: 90px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const  NavItem = styled.div`
  line-height:56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
  width: 170px;
  height: 36px;
  border: none;
  outline: none;
  border-radius:19px ;
  background: #eee;
  margin-top: 8px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  margin-left: 20px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused{
    width: 240px;
  }
  .slide-enter{
    transition: all .2s ease-out;
  }
  .slide-enter-active{
    width: 240px;
  }
  .slide-exit{
    transition: all .2s ease-out;
  }
  .slide-enter-active{
    width: 160px;
  }
`

export const  Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`


export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg{
    color: #ec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
`
export const  SearchWrapper = styled.div `
position: relative;
float: left;
.iconfont{
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 30px;
 line-height: 30px;
  text-align: center;
  border-radius: 15px;
  &.focused {
    background:#777;
    color:#fff;
  }
}

`
