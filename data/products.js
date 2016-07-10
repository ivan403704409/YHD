window.Model = function (){

}
var Class = [
    { id: 1,  name: '自动化光学定位联板测试机' },
    { id: 2,  name: '弹力测试机' },
    { id: 3,  name: '自动化光学定位联板测试机' },
];

var subClass = [
    { id: 1, name: 'xxx', parent: '1' },
    { id: 2, name: 'xxx2', parent: '1' },
];


Model.prototype.getProducts = function (){

}

window.products = [
    {
        type: 'LX326',
        des: 'LX326是集教育、商务、家庭娱乐一身的超实用多功能机型，采用三片式0.63无机液晶板，拥有实测3300lm高…',
        img: 'images/small_201306081535406093.png',
    },

    {
        type: 'LX326',
        des: 'LX326是集教育、商务、家庭娱乐一身的超实用多功能机型，采用三片式0.63无机液晶板，拥有实测3300lm高…',
        img: 'images/small_201306081535406093.png',
    },
    {
        type: 'LX326',
        des: 'LX326是集教育、商务、家庭娱乐一身的超实用多功能机型，采用三片式0.63无机液晶板，拥有实测3300lm高…',
        img: 'images/small_201306081535406093.png',
    },
    {
        type: 'LX326',
        des: 'LX326是集教育、商务、家庭娱乐一身的超实用多功能机型，采用三片式0.63无机液晶板，拥有实测3300lm高…',
        img: 'images/small_201306081535406093.png',
    },
];

$.each(window.products, function(index, val) {
     val.id = index;
});




function compile($dom, $tmpl, data){
    $.each(data, function(index, val) {
        dom = $tmpl.tmpl(this);
        $dom.append(dom);
    });
}
window.compile = compile;