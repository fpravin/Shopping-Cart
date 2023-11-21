import { Col, Row } from "react-bootstrap"
import { GetProducts } from "../data/GetProducts"
import axios from "axios";

export function Store(){
    let data;
    const fetchProducts = () => {
        axios.get('http://localhost:8000/products').then(res => {
            console.log(res);
             data = res.data;

            const dataArr = [];

            dataArr.push(...data)
        }).catch(err => {
            console.log(err);
        })
    }
return (
    <>
    <h1>Store</h1>
    <Row>
        <Col>
        {data}
        </Col>
    </Row>
    </>
)
}
