(function($){
  var disable = true;

  var methods = {
    init : function(options) {
      return this.each(function(){
        var $this = $(this);

        var url = $this.attr('href');

        $this.mouseenter(function(){
          disable = false;
        }).mouseleave(function(){
          disable = true;
        });
        $this.on('click',{url: url} ,methods.redirect);
      });
    },
    redirect : function(e){
      e.preventDefault();
      if(disable){
        window.location = window.location.href
      }else{
        window.location = e.data.url;
      }
    }
  };

  $.fn.disableLink = function(method){
    if (methods[method]){
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }else if(typeof method === 'object' || ! method){
      return methods.init.apply(this, arguments);
    }else{
      $.error('Метод с именем ' +  method + ' не существует для jQuery.disableLink');
    }
  };
})(jQuery);
