import React, { useState } from 'react';
import { useEffect } from 'react';
import { postLatest } from '../apiRequest/apiRequest';
import BlogList from '../component/BlogList';
import Loader from '../component/Loader';
import Layout from '../Layout/Layout';

const HomePage = () => {
    let [list, setList] = useState(null)

    useEffect(()=>{
        (async()=>{
            let res = await postLatest()
            setList(res)
        })()
    },[])

    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    );
};

export default HomePage;