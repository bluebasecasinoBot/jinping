import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v, createElement} from './sydneyLib/sydneyDom.js';

__sS(
    {
        nameTag:'_social_style',
        style:{
            minHeight:'60px',
            minWidth:'80px',
            cursor:'pointer',
            border:'2px solid #fff'
        }
    }
)

__SYD._p2 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    flexDirection:__p(['_p2','_flex'],'row'),
                    transform:'unset',
                    marginBottom:'20px',
                    alignItems:'flex-start',
                    position:'relative'
                }
            })
        },
        [
            __c(
                'div',
                {
                    style:`min-height:fit-content;height:100%;width:${__p(['_p2','_flex'],'row') === 'row' ? '60%' : '100%'};background:transparent;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px;z-index:300;padding-top:20%;`
                },
                [
                    __c('h2',{class:'',style:`color:#ffb973;text-align:center;width:100%;font-size:${__p(['_p2','__font'],{2:'50px'})['2']}`},['PRESIDENT XI Jinping $RULE']),
                    // __c('h1',{class:'',style:`font-family:sunrise;font-size:${__p(['_p2','__font'],{1:'70px'})['1']};`},['$JADE']),
                    // __c('h2',{class:'',style:`color:#ffb973;text-align:center;width:100%;font-size:${__p(['_p2','__font'],{2:'50px'})['2']}`},['The Celestial Meme Coin on the Tron Blockchain!']),
                    __SYD.about_text_p2(),
                    __SYD.about_text_p3(),
                    __SYD.about_text_p4(),
                    __SYD.page1Socials(),
                    __c(
                        'div',
                        {style:'display:flex;width:100%;row-gap:10px;align-items:center;text-align:left;height:100px;column-gap:20px'},
                        [
                            __c(
                                'p',
                                {
                                    style:'font-size:22px;width:max-content;min-width:fit-content;text-align:left;font-weight:900;'
                                },
                                [
                                    'C.A'
                                ]
                            ),
                            __c(
                                'div',
                                {
                                    style:'min-height:70px;min-width:70px;background-color:#d83f2a;cursor:pointer;display:flex;align-items:center;font-size:15px;padding:0 5px',
                                    class:'btn_copy'
                                },[
                                    '-------------------------------------------'
                                ],{genericStyle:['bg_fit']},
                                {
                                    events:{
                                        onclick:() =>{
                                            navigator.clipboard.writeText('0x1852B16e564f5413C45986D13442791B08C9D3B8')
                                            // __v['c_a'].textContent = 'Contract Address Copied'
                                            alert('contract address copied')

                                            // const timer = setTimeout(() =>{
                                            // __v['c_a'].textContent = '0x1852B16e564f5413C45986D13442791B08C9D3B8'
                                            // clearTimeout(timer)
                                            // },1500)
                                        }
                                    }
                                }
                            )
                            // __c(
                            //     'div',
                            //     {
                            //         style:`padding:50px 10px;width:100%;background:#884711;font-family:ubuntu;font-size:${__p(['_p2','_flex'],'row') === 'row' ? '20px' : '13px'};font-weight:900;text-align:center;cursor:pointer;border-radius:20px;box-shadow:1.5px 1.5px 0px 2px rgba(21,2,9);color:#fff;`
                            //     },
                            //     [
                            //         '0x1852B16e564f5413C45986D13442791B08C9D3B8'

                            //     ],
                            //     {
                            //         events:{
                            //             onclick:() =>{
                            //                 navigator.clipboard.writeText('0x1852B16e564f5413C45986D13442791B08C9D3B8')
                            //                 __v['c_a'].textContent = 'Contract Address Copied'

                            //                 const timer = setTimeout(() =>{
                            //                 __v['c_a'].textContent = '0x1852B16e564f5413C45986D13442791B08C9D3B8'
                            //                 clearTimeout(timer)
                            //                 },1500)
                            //             }
                            //         },
                            //         type:'c_a'
                            //     }
                            // )
                        ]
                    )
                ]
            ),
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p2','_flex'],'row') === 'row' ? '100vh' : '300px'};width:${__p(['_p2','_flex'],'row') === 'row' ? '40%' : '100%'};border-radius:20px;background-image:url("./b2.png");background-size:contain;background-color:transparent;height:50%;width:100%;`//url("./assets/goatx.jpg")
                },[],
                {
                    genericStyle:[__p(['_p2','_flex'],'row') === 'row' ? 'bg_cover' : 'bg_fit'],
                }
            ),
        ],
        {
            createState:{
                stateName:'_p2',
                state:{_flex:'row',__font:{1:'70px',2:'50px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{_flex:'column-reverse',__font:{1:'30px',2:'20px'}}}],
                defState:{_flex:'row',__font:{1:'70px',2:'50px'}}
            }
        }
    )
}

__SYD.page1Socials = () =>{
    return __c(
        'div',
        {
            style:'width:100%;padding:10px 0;display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap',
        },
        [
            // __SYD.page1SocialBtn({contentSrc:'mm'}),
            __SYD.page1SocialBtn({contentSrc:'./t.png'}),
            __SYD.page1SocialBtn({contentSrc:'./tw.png'})
        ]
    )
}

__SYD.page1SocialBtn = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {
            style:__sC._social_style({method:'add',style:{backgroundImage:`url('${contentSrc}')`}}),
            class:'click btn_buy' + contentSrc === './t.png' ? ' animate1' : ' animate2'
        },
        [],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    window.location = link
                }
            }
        }
    )
}
__SYD.freeText_def = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:22px;width:50%;min-width:fit-content;text-align:center'
        },
        [
            text
        ]
    )
}
__SYD.freeText_def_small = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:16px;width:100%;text-align:center'
        },
        [
            text
        ]
    )
}

__SYD.about_text_p2= () =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;text-align:left;font-weight:500;width:100%;text-align:center;'},[
        `Hey everyone as you all know I am xi Jinping a Chinese politician who has been the general secretary of the (CCP) and (CMC), and thus the paramount leader of China, since 2012. I have also been the president of the People's Republic of China (PRC) since 2013. As a member of the fifth generation of Chinese leadership, Xi is the first CCP general secretary born after the establishment of the PRC.`,
    ])
}

__SYD.about_text_p3= () =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;text-align:left;font-weight:500;width:100%;text-align:center;margin-top:5px;'},[
        `What am I trying to say ? `,
    ])
}

__SYD.about_text_p4 = () =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;text-align:left;font-weight:500;width:100%;text-align:center;margin-top:5px;'},[
        `It’s time to take over the tron space done it in chine and I’ll do it again`,
    ])
}
