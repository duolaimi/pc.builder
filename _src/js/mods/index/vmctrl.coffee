# 首页相关的VM控制器
define ['smcore','_data/ibar','../common/header','../ibar/main'],(smcore,getData,header,iBar)->
    exports = {}
    exports.run = (cb)->
        smcore.scan()
        timer = null
        getData.cartList (data)->
            _VM_.ibar.cartInfo = _VM_.header_cart.cartInfo = data

        getData.userInfo (data)->
            _VM_.ibar.userInfo = _VM_.header_user.userInfo = data
            if data.status is 1
                _VM_.ibar.isLogin = _VM_.header_user.isLogin = true
        clearTimeout timer if timer
        timer = setTimeout ->
            $("#iBar").css({'height':$(window).height()}).slideDown(500)
        ,400

        cb()
        


    return exports