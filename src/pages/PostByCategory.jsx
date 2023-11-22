import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { postByCategory } from '../apiRequest/apiRequest';
import BlogList from '../component/BlogList';
import Loader from '../component/Loader';
import Layout from '../Layout/Layout';

const PostByCategory = () => {
    let {categoryId} = useParams();
    
    let [list, setList] = useState(null)

    useEffect(()=>{
        (async()=>{
            let res = await postByCategory(categoryId)
            setList(res)
        })()
    },[categoryId])

    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    );
};

export default PostByCategory;