import React from 'react'
import styled from "styled-components"
import Section from './Section'


const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                desc="Order Online for Touchless Delivery"
                bacgroundImg="model-s.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Exixting Inventory"
            />
            <Section
                title="Model Y"
                desc="Order Online for Touchless Delivery"
                bacgroundImg="model-y.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Exixting Inventory"
            />
            <Section
                title="Model 3"
                desc="Order Online for Touchless Delivery"
                bacgroundImg="model-3.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Exixting Inventory"
            />
            <Section
                title="Model X"
                desc="Order Online for Touchless Delivery"
                bacgroundImg="model-x.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Exixting Inventory"
            />
            
            <Section
                title="Solar Panels"
                desc="Lowest Cost Solar Panels in America"
                bacgroundImg="solar-panel.jpg"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
            />
            <Section
                title="Solar Roof"
                desc="Lowest Cost Solar Panels in America"
                bacgroundImg="solar-roof.jpg"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
            />
            <Section
                title="Accessories"
                bacgroundImg="accessories.jpg"
                leftBtnTxt="Shop Now"
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
height:100vh;
`