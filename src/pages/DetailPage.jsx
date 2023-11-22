import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { postDetails } from '../apiRequest/apiRequest';
import BlogDetails from '../component/BlogDetails';
import Loader from '../component/Loader';
import Layout from '../Layout/Layout';

const DetailPage = () => {
    let {detailId} = useParams();
    
    let [list, setList] = useState(null)

    useEffect(()=>{
        (async()=>{
            let res = await postDetails(detailId)
            setList(res)
        })()
    },[detailId])

    return (
        <Layout>
            {list===null?<Loader/>:<BlogDetails list={list}/>}
        </Layout>
    );
};

export default DetailPage;