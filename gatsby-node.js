/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

require("@babel/register");
const path= require('path')
const React= require('react')
const data = require('./src/data/sampl-page-with-style-prop')
// const data = require('./src/data/sampl-page-no-props')



exports.createPages = ({actions})=>{
    const {createPage} = actions
    const resutl = componentsRenderer(data.page.layout.columns)
    createPage({
        path: data.page.name,
        component: path.resolve('./src/template/page.js'),
        context:{
            children: resutl
        }
    })
}

const componentsRenderer = components => {

    return components.map(component => {
        let children = []
        if (component.children){
            children = componentsRenderer(component.children)
        }
        const element = require(`${__dirname}/${component.path}`)

        return React.createElement(element, Object.assign({},{key: component.key},{...component.props}),children)
    });
}
