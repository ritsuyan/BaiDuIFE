$(function () {
  init()
})

function init() {
    $('.new_button').click(function () {

        /*
         *     new button only one fun show the inside
         */

var $html = $(
            '<div class="new_con">' +
            ' <div class="con con1"> ' +
            ' <input type="text" value="这里是标题" onclick="this.select()"/> ' +
            '</div>' +

            '<div class="con con2">' +

            '<div class="new_wrp"></div>' +
            '<div class="ty_wp">' +
            '<span class="qs_type qs_before">单选</span>' +

            '<span class="qs_type">多选</span>' +

            '<span class="qs_type">文本</span>' +

            '</div>' +
            '<div class="add_qs">+     添加问题</div>' +
            '</div> ' +


            '<div class="con3">' +
            '<span>问卷截止日期 &nbsp <input type="text"  id="calendar" /> </span>' +
            '<span class="btn sav_btn" >保存问卷</span>' +
            '<span class="btn rel_btn">发布问卷</span>' +
            '</div>' +
            '</div>'
        );
        $('.con_bg').empty().append($html)

        $("input[type=text]").on('keydown', function (e) {
            console.log(e.target)
            if (e.keyCode == 13) {
                console.log(e.keyCode)
                $(this).blur();
            }
        })
        // keydown end

        var $wp = $('.ty_wp');
        $('.add_qs').on('click', function (e) {
            /*
             *  when add qs,it just one fun which toggle the qs type,
             * */

            console.log(e.target)
            $('.ty_wp').slideToggle('1000')
        })

        $('.qs_type').click(function (e) {
            /*
             *  qs type also only one fun create the qs then hid
             * */
            console.log($(e.target).text())
            var $ty = $(e.target).text();
            qsTyBox($ty)
        })

        $('.opt').on('click', function (e) {

        })
    });

}


function qsTyBox($ty){
    var obj = {title:""},
        $box ;
    var chle = $('.new_wrp').children().length;
    console.log(chle)
    obj.title = chle + 1;
     switch($ty){
         case '单选' :

             $box = $(
                 '<div class="new_qs">'+'Q'+ +
                 obj.title + '<input type="text" value="单选题" onclick="this.select()" />' +
                 '<span class="opt">○ 选项1</span>' +
                 '<span class="opt" id="opt2">○ 选项2</span>' +
                 '<div class="cre_opt">+</div>' +
                 '<div class="opt_move">' +
                     // TODO add by type
                 '<span>复用</span>' +
                 '<span>删除</span>' +
                 '</div>' +
                 '</div>'
             );
             add_box(obj,$box)
             break;

         case '多选' :
             $box = $(
                 '<div>Q' +
                 obj.title + '<input type="text" value="多选题" onclick="this.select()" />' +
                 '<span class="opt">选项一</span>' +
                 '<span class="opt">选项二</span>' +
                 '<span class="opt">选项三</span>' +
                 '<span class="opt>选项四</span>' +
                 '<div class="cre_opt">+</div>' +
                 '<div class="opt_move">' +
                     // TODO add by type
                 '<span>复用</span>' +
                 '<span>删除</span>' +
                 '</div>' +
                 '</div>'
             );
             add_box(obj,$box)

             break;

         case '文本' :
              $box = $(
                 '<div>Q' +
             obj.title  +  '<input type="text" value="文本题" onclick="this.select()" />' +
             '<div class="required">' + '<input type="checkbox" />' + '此题是否必填</div>' +
             '<div class="opt_move">' +
                 // TODO add by type
                 '<span>复用</span>' +
                 '<span>删除</span>' +
             '</div>' +
                 '</div>'
             );
             add_box(obj,$box)
     }

}

function add_box(obj,$box){
    //$box.insertBefore($('.new_wrp'))

    $('.new_wrp').append($box)
    $('.con_bg').css('height','+=138px')

    $('.ty_wp').css('display','none')
   // $(".ty_").css('margin-top','+=100px')
    itemDetail($box)

    $(".new_qs input[type=text]").on('keydown',function (e) {
        console.log(e.target)
        if (e.keyCode == 13) {
            console.log(e.keyCode)
            $(this).blur();
        }
    })

    $('.cre_opt').on('click', function (e) {
        /*
        *    only one fun to create the item
        *
        * */
      var opt_len =  $('.new_qs').children($('.opt')).length ; //5
        console.log(opt_len)
      var $c_s = $('<span class="opt">○ 选项'+(opt_len-2)+'</span>');
        console.log($c_s)
      $c_s.insertBefore($('.cre_opt'))
      $c_s.css('top',opt_len*11+"%")
    })


}


function itemDetail($box){
   var curr_box =$box[0];
    var $boxparent = $box.parent();
     console.log(curr_box)
    if(curr_box.previousElementSibling !== null){
        alert(1)
        add_item_opt('pre',$boxparent)
    }
    if(curr_box.nextElementSibling !== null){
         add_item_opt('nex',$boxparent)
    }

}

function add_item_opt(opt,par){
    var tex ;
    if(opt === 'pre'){
        tex = '上移'
    }
    if(opt === 'nex'){
        tex = '下移'
    }
    var ist = $(
        '<span>'+tex+'</span>'
    );
    console.log(ist)
    par.append(ist)
  //  ist.insertBefore($('.opt_move:first-child'))
    // parent class opt_move

}

function initCan() {
    var $calendar = $(
        '<div id="calendarIn">' +
        '<div class="head">' +
        '<span class="arrowReduce left"><-</span>' +
        '<span class="month"></span>' +
        '<span class="arrowIncre right">-></span>' +
        '</div>' +

        '<div class="content">' +
        '<div class="week">' +
        '<span class="common redColor">日</span>' +
        '<span class="common ">一</span>' +
        '<span class="common ">二</span> ' +
        '<span class="common ">三</span>' +
        '<span class="common ">四</span>' +
        '<span class="common ">五</span>' +
        '<span class="common redColor">六</span>' +

        '<div class="dayContent">' +

        '</div>' +

        '</div>' +
        '</div>' +
        '</div>'
    );
    $calendar.insertBefore($('#calendar'))

}