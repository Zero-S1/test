# feed流广告
# https:\/\/api\.zhihu\.com\/feeds\?action_feed=true url script-response-body https://raw.githubusercontent.com/haiBosuPal/test/master/sscript/zhihu_feed.js
# http-response https:\/\/api\.zhihu\.com\/feeds\?action_feed=true requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/haiBosuPal/test/master/sscript/zhihu_feed.js,script-update-interval=0
let body = $response.body
body=JSON.parse(body)


body['data'].forEach((element, index)=> {
    //block ad||title||up
   if(element.hasOwnProperty('ad')){
         body['data'].splice(index,1)  
    }
})
/*
body['data']['items'].forEach((element, index)=> {
    //block ad||title||up
   if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']!="small_cover_v2"||["华为","小米"].includes(element['title'])||["广东共青团","浙江共青团","翔翔大作战","徐大虾咯","敬汉卿","NathanRich火锅大王","千户长生"].includes(element['args']['up_name'])){ 
         body['data']['items'].splice(index,1)  
    }
})

body['data']['relates'].forEach((element, index)=> {
   if(element.hasOwnProperty('is_ad')){      
      body['data']['relates'].splice(index,1)  
    }
});
*/

body=JSON.stringify(body)
$done({body})
