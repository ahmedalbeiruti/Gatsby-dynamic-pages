import React from 'react'
import Layout from '../components/layouts/Layout'

const Page = (props)=>{
    console.log(`page_context: ${props.pageContext.children}`)
    return (
        <>
        <h1>this is the about page</h1>
        <Layout>
            {props.pageContext.children}
        </Layout>
        </>
    )
}

export default Page