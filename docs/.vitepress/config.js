// 此处配置页头header

export default {

    title: "Physical Image Research",
    titleTemplate: false, //组织子标题
    ignoreDeadLinks: true,//忽略死链接
    lastUpdated: true,    //上次git上传时间
    description: "Power by Vitepress", // <meta>标签
    themeConfig: {
        siteTitle: "Physical Image Research", // 网站标题
        // logo: '/public/images/photo.jpg',
        nav: [
            {
                text: "文档",
                items: [
                    { text: '文档1' },
                    { text: '文档2' }
                ]
            },
            {
                text: "关于",
                items: [
                    // { text: 'Item A', link: '/item-1' },
                    // { text: 'Item B', link: '/item-2' }
                ]
            }
        ],
        sidebar: [
            {
                text: '开始',
                items: [
                    {
                        text: 'CSS3:  Flex布局',
                        link: '/guide/01flex',
                        items: [
                            { text: 'promise', link: '/guide/02promis' }
                        ],
                        //是否可以进行折叠
                        collapsible: true,
                        collapsed: true
                    },
                ],
                collapsible: true,
                collapsed: true
            },
            {
                text: '正弦函数',
                items: [
                    { text: '正弦函数', link: '/guide/03sin_img' },
                ],
                collapsible: true,
                collapsed: true,
            },
        ]
    },
    socialLinks: [
        { icon: "github", link: "https://github.com/ueiheng" },
    ],

};