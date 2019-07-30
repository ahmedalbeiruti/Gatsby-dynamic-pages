module.exports = {
        page:{
            name: "about",
            layout:{
                columns: [
                    {
                        key:"column_1", //key has to be unique for array's elements
                        name: "Column",
                        path: "./column",
                        children:[
                            {
                                name: "FirstComponent",
                                path: "./first-component",
                                key: "first_component_1",
                                props:{
                                    style:{
                                        color:"red"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        key: "column_2",
                        name: "Column",
                        path: "./column",
                        children:[
                            {
                                key: "second_component_1",
                                name: "SecondComponent",
                                path: "./second-component",
                                children:[
                                    {
                                        key: "leaf_component_1",
                                        name: "LeafComponent",
                                        path:"./leaf-component"
                                    }
                                ]
                            },
                            {
                                key: "third_component_1",
                                name: "ThirdComponent",
                                path: "./third-component",
                                children:[
                                    {
                                        key: "leaf_component_1",
                                        name: "LeafComponent",
                                        path:"./leaf-component"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
}
