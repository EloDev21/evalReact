import React, { useState } from 'react';
import './Header.css';
import img1 from '../src/background.jpg'
import img2 from '../src/vehicule3.png'
import img3 from '../src/vehicule2.png'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
Row ,
 Container
} from 'reactstrap';

function Header(props) {
    
    
    const items = [
        {
          src: img1,
          altText: 'Prestige' ,
          caption: 'Mercedes Class '
          
        },
        {
          src: img2,
          altText: 'Sport',
          caption: 'Audi A1'
        },
        {
          src: img3,
          altText: 'Confort',
          caption: 'Ford Cmax'
        }
      ];
      const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);
    
      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
            style={{height:"70px", position : "absolute"}} >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
    
    return (
        <Container>
            <Row>
                <h1 >  Bienvenue à bord</h1>
            </Row>
            <Row>
                <p id="message" >  Location de voitures 24h/24 et 7j/7</p>
            </Row>
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        style={{alignItems:"center"}}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}  />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </Container>
              )
}

export default Header
