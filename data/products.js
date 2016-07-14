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
        type: '非标检测仪器',
        des: '产品特点：1、非标项目切合实际性2、非标项目仪器整合性3、非标项目维护复杂性非标检测是根据企业的需求制定的独立测量方案，根据测量方案研发生产测量设备。跟传统影像测量仪和三坐标测量机固定型号、量程等有着明显的区别。',
        img: 'images/products/1.png',
    },

    {
        type: '非标检测仪器',
        des: '非标检测仪器',
        img: 'images/products/2.png',
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