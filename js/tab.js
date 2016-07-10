$('.tabWrap').each(function()
{
	var wrap = $(this);
	var tabs = $('.tab li',wrap);
	var cons = $('.tabCon',wrap);
	tabs.click(function()
	{
		tabs.removeClass('currentTab');
		cons.removeClass('currentCon');
		$(this).addClass('currentTab');
		var index = tabs.index(this);
		cons.eq(index).addClass('currentCon');
	})
})