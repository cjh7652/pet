import React,{useState} from 'react';    
import { useNavigate } from 'react-router-dom'; 
import {  Button,/*  Checkbox, */ Form, Input, Divider, InputNumber, Upload, message} from 'antd';
import { FiCamera } from "react-icons/fi";
import axios from 'axios';

const Uploadpage = () => {
    const {TextArea} = Input;
    const [imageUrl, setImageUrl]=useState(null);
    const navigate=useNavigate();
    const onFinish = (val) => {
        
       /*  axios.post(`https://f7b1c6c3-c64c-4194-bcfd-2d2bb24d1e7e.mock.pstmn.io/products` , {
            name:val.name,
            description:val.description,
            price:val.price,
            seller:val.seller,
            imageUrl:imageUrl,
        })
        .then((result)=>{
            navigate("/", {replace: true})
        })
        .catch((error)=>{
            console.error(error);
            message.error('에러가 발생했습니다.')
        }) */
        console.log("성공")
      };
     /*  const onFinish = (values) => {
		console.log("Success:", values);
	};
 */
      /* const onChangeImage = (info) =>{
        if(info.file.status==='uploading'){
            return;
        }
        if(info.file.status==='done'){
            const response=info.file.response;
            const imageUrl=response.imageUrl;
            setImageUrl(imageUrl)
        }
      } */
    
    return (
        <div className='upload-container'>
            <Form name="uploadForm" onFinish={onFinish}>
                <Form.Item name="files" valuePropName="image">
               {/*  <Upload name="image" action={`https://f7b1c6c3-c64c-4194-bcfd-2d2bb24d1e7e.mock.pstmn.io/products/image`} listType="picture" showUploadList={false} onChange={onChangeImage}> */}
                        {/* {imageUrl ? (<img id="upload-img" src={`https://f7b1c6c3-c64c-4194-bcfd-2d2bb24d1e7e.mock.pstmn.io/products/${imageUrl}`} alt=''/>) :( */}
                            <div id="upload-img">
                                <FiCamera className='cameraIcon' />
                                <span>이미지를 업로드해주세요</span>
                            </div>
              {/*           )}
                    </Upload> */}
                </Form.Item>
                <Divider />
                <Form.Item
                    label={<span className='upload-label'>상품명  </span>}
                    name="product-name"
                    rules={[
                        {
                        required: true,
                        message: '이름을 입력해주세요',
                        },
                ]}
                >
                    <Input className='upload-name'/>
                </Form.Item>
                <Divider />
                <Form.Item
                    label={<span className='upload-label'>판매자명  </span>}
                    name="seller"
                    rules={[
                        {
                        required: true,
                        message: '판매자명을 입력해주세요',
                        },
                ]}
                >
                    <Input className='upload-seller'/>
                </Form.Item>
                <Divider />
                <Form.Item
                    label={<span className='upload-label'>판매가격  </span>}
                    name="price"
                    rules={[
                        {
                        required: true,
                        message: '판매가',
                        },
                ]}
                >
                    <InputNumber className='upload-price' min={0} />
                </Form.Item>
                <Divider />
                <Form.Item
                    label={<span className='upload-label'>상품설명  </span>}
                    name="description"
                    rules={[
                        {
                        required: true,
                        message: '상품설명을 입력해주세요',
                        },
                ]}
                >
                    <TextArea id="product-description"  rows={5}></TextArea>
                </Form.Item>
                <Divider />
                <Form.Item >
                    <Button id="submit-button" htmlType='submit'>상품등록하기</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Uploadpage;