import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thank-you.css'
import NewsLetter from '../shared/Newsletter'

const ThankYou = () => {
   return (
      <>
      <section>
         <Container>
            <Row>
               <Col lg='12' className='pt-5 text-center'>
                  <div className="thank__you">
                     <span><i class='ri-checkbox-circle-line'></i></span>
                     <h1 className='mb-3 fw-semibold'>Gracias Por Tu Compra</h1>
                     <h3 className='mb-4'>Su Tour fue Reservado</h3>

                     <Button className='btn primary__btn w-25'><Link to='/home'>Volver A Home</Link></Button>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
<NewsLetter/>
</>
   )
}

export default ThankYou