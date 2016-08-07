/**
 * Created by zhagnian on 16-8-7.
 */
module.exports=function (zipcode){
    if(zipcode.length>3) {
        return {
            err: 'please input right zipcode'
        }

    }else{
        return {
            text:'well done!'
        }
    }

};

