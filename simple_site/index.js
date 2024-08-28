import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v} from './sydneyLib/sydneyDom.js';
import "./index2.js"

__sS([
    {
        nameTag:'container',
        style:{
            height:'100vh',
            width:'100vw',
            backgroundColor:'#AF1E21',
            backgroundAttachment: 'fixed',
            // backgroundImage:'url("./b2.png")',
            overflowY:'scroll',
            position:'relative',
            fontFamily:'ubuntu',
            // wordSpacing:'5px',
            // fontFamily:'sunrise',
            overflowX:'hidden',
            color:'#fff'
        }
    },
    {
        nameTag:'navBar',
        style:{
            width:'100%',
            display:'flex',
            padding:'5px 10px',
            columnGap:'30px',
            // position:'sticky',
            // top:'0',
            zIndex:'999',
            // background:'#791102',
            alignItems:'center',
            justifyContent:'space-between',
            // borderBottom:'5px solid #f0472f',
            borderBottom:'3px solid #fff'
        }
    },
    {
        nameTag:'_body_style',
        style:{
            minHeight:'100%',
            height:'fit-content',
            width:'100%',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            rowGap:'20px',
            columnGap:'10px',
            padding:'0 15px',
            paddingTop:'50px',
            textAlign:'center',
            // transform:'translateY(-20px)'
        }
    }
])


__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC.container()
        },
        [
            __c(
                'div',
                {
                    style:'height:fit-content;min-height:50px;width:100%;display:flex;justify-content:space-between;padding:5px 20px;align-items:center;border-bottom:3px solid #fff;'
                },
                [
                    __c(
                        'h2',
                        {},
                        [
                            'PRESIDENT XI Jinping $RULE'
                        ]
                    ),
                    __c(
                        'div',
                        {
                            style:'height:fit-content;width:fit-content;display:flex;column-gap:10px;'
                        },
                        [
                            __c(
                                'h2',
                                {
                                    class:'btn_model'
                                },
                                [
                                    __c('a',{target:'blank',href:'https://www.dextools.io/app/en/tron/pair-explorer/TAY4ju94nnZAYnYRQzkUjekK1Bbqzsip9L?t=1723950469399',style:'color:#fff'},['Chart'])
                                ]
                            ),
                            __c(
                                'h2',
                                {
                                    class:'btn_model'
                                },
                                [
                                    __c('a',{target:'blank',href:'https://sunpump.meme/token/TR95WcjR78Y4puyv8BkbFuxaf4WcvmmPpd',style:'color:#fff'},['Buy '])
                                ]
                            ),
                        ]
                    )
                ]
            ),

            __SYD._p2(),
            __SYD.buy_section(),
            __SYD.footer()
        ],
        {
            genericStyle:['bg_fit']
        }
    )
}


__SYD.buy_section = () =>{
    return __c(
        'div',
        {
            style:'display:flex;flex-direction:column;row-gap:50px'
        },
        [
            __c(
                'h1',
                {
                    style:'width:100%;text-align:center;border-bottom:4px solid #fff;',
                    class:'h_buy'
                },
                [
                    'HOW TO BUY'
                ]
            ),
            __c(
                'div',
                {
                    style:'display:flex;justify-content:space-around;',
                    class:'buy_box_cont'
                },
                [
                    __c('div',
                        {
                            style:"position:relative;color:#171717;font-weight:500;",
                            class:'box_buy_section animate1'
                        },
                        [
                            __c(
                                'div',
                                {
                                    style:'position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(-30%);font-size:50px;',
                                    class:"box_buy_section_child"
                                },[
                                    '1'
                                ]
                            ),
                            __c('p',{},['Download TronLink wallet:',__c('a',{href:'https://tronlink.org'},['tronlink.org'])])
                        ]
                    ),
                    __c('div',
                        {
                            style:"position:relative;color:#171717;font-weight:500;",
                            class:'box_buy_section animate2'
                        },
                        [
                            __c(
                                'div',
                                {
                                    style:'position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(-30%);font-size:50px;',
                                    class:"box_buy_section_child"
                                },[
                                    '2'
                                ]
                            ),
                            __c('p',{},['Bridge from ANY chain to TRON. Fast and easy using FixedFloat: ',__c('a',{href:'https://ff.io/'},['ff.io'])])
                        ]
                    ),
                    __c('div',
                        {
                            style:"position:relative;color:#171717;font-weight:500;",
                            class:'box_buy_section animate3'
                        },
                        [
                            __c(
                                'div',
                                {
                                    style:'position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(-30%);font-size:50px;',
                                    class:"box_buy_section_child"
                                },[
                                    '3'
                                ]
                            ),
                            __c('p',{},['Buy PRESIDENT XI Jinping $RULE at ',__c('a',{href:'https://sunpump.meme/token/'},['https://sunpump.meme/token/'])])
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.footer = () =>{
    return __c(
        'div',
        {
            style:'height:500px;width:100%;background:#cab518;margin-top:50px;border:8px solid #000;border-radius:20px;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;column-gap:30px;flex-wrap:wrap;row-gap:50px;'
        },
        [
            __c(
                'h2',
                {
                    style:'',
                    class:'btn_model_dark'
                },
                [
                    'TELEGRAM'
                ]
            ),

            __c(
                'h2',
                {
                    style:'',
                    class:'btn_model_dark'
                },
                [
                    'TWITTER'
                ]
            )
        ]
    )
}

// __SYD.page1 = () =>{
//     return __c(
//         'div',
//         {
//             style:__sC._body_style({
//                 method:'add',style:{
//                     height:'fit-content',
//                     flexDirection:'row',
//                     transform:'unset',
//                     marginBottom:'20px',
//                     alignItems:'flex-start',
//                     flexWrap:'wrap'
//                 }
//             })
//         },
//         [

//         ]
//     )
// }

__m(__SYD.container())
