import React, { useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice';
import {useSelector} from "react-redux"

const Header = () => {
    const [close, setClose] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=""/>
            </a>
            <Menu>
                {cars && cars.map((car, index)=>(
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={()=>{setClose(!close)}} />
            </RightMenu>
            <BurgerNav show = {close}>
                <Wrapper>
                <CustomClose onClick={()=>{setClose(!close)}} />
                </Wrapper>
                {cars && cars.map((car, index)=>(
                    <li><a key={index} href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cyber Truck</a></li>
                <li><a href="#">Roadster</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
left:0;
right:0;
z-index:10;
`

const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
a{
    font-weight:600;
    font-size:17px;
    padding:0 10px; 
}
@media(max-width:768px){
    display:none;
}
`

const RightMenu=styled.div`
display:flex;
align-item:center;
a{
    font-weight:600;
    font-size:17px;
    padding:0 10px;
    
}`

const CustomMenu = styled(MenuIcon)`
cursor:pointer
`

const BurgerNav = styled.div`

position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
transition:transform 0.2s ease-in;
li{
    padding:15px 10px;
    a{
        font-weight:600;
    }
}
`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const Wrapper = styled.div`
display:flex;
justify-content:flex-end;
`