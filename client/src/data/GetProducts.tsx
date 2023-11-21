import axios from "axios"

export function GetProducts(){
    const fetchProducts = () => {
        axios.get('http://localhost:8000/products').then(res => {
            console.log(res);
            const data = res.data;

            const dataArr = [];

            dataArr.push(...data)
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
        {fetchProducts()}
        </>
    )
}