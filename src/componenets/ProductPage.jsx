import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const ProductPage = () => {
    const {id} = useParams();
    const [product, setProduct]=useState(null);

    useEffect(()=>{
        axios.get(`
        https://f7b1c6c3-c64c-4194-bcfd-2d2bb24d1e7e.mock.pstmn.io/products/${id}`)
        .then(function(result){
            setProduct(result.data)
        })
        .catch(function(error){
            console.error(error)
        })
    }, [])
    console.log(product)
    return (
        <div>
            <h1>상세페이지</h1>
            <h2>{id} 번째 상세 정보입니다.</h2>
            <div id="image-box">
                
            </div>
            <div className="contents-box">
               
            </div>
        </div>
    );
};

export default ProductPage;