/**
 * UX Rocket
 * Plugin sample for classic simple UX Rocket Plugin
 * @author Bilal Cinarli
 */

/**
 * Basic UX Rocket plugin have a jQuery plugin registry part,
 * Constructor Method, Layout Method and Binding Method.
 *
 * Plugins must check and set related "plugin ready" class e.g. "uxitd-pluginname-ready"
 * on the element. 
 *
 * If any layout changes or wrapping will occur, make sure you check and use "uxitd-plugin-wrap"
 * wrapper already applied to element and add your needed classes/attributes to this
 * wrap element.
 */

;(function($){
    var ux, // local shorthand

        defaults = {
            onReady: false,
            onFoo: false,
			onBar: false
        };

	// Constructor Method
	// Consolidates the options, calls the setLayout, onReady and bindUIActions methods
	// Make sure, while building "opts" for the element, also get option settings
	// from data-attributes added to element 
    var PluginSample = function(el,options){
        var $el = $(el)
			opts = $.extend({}, defaults, options, $el.data());

        $el.data('opts', opts);

        // set plugin layout for css and additional objects
        setLayout($el);

        callback(opts.onReady);

        // bind UI actions
        bindUIActions($el, opts);
    };
	
	// Layout operations
    var setLayout = function($el){
        var columns = '';
			
			columns = ' ' + $el.context.className;
		
	    if($el.parent().is('.uxitd-plugin-wrap')){
	        $el.parent().addClass('uxitd-pluginsample-wrap' + columns);
	    }
	    else {
	        $el.wrap('<span class="uxitd-plugin-wrap uxitd-plugin-wrap' + columns + '"></span>');
	    }
    };

	// Event bindings
    var bindUIActions = function($el, opts){

    };

    // global callback
    var callback = function(fn){
        // if callback string is function call it directly
        if(typeof fn === 'function'){
            call(fn);
        }

        // if callback defined via data-attribute, call it via new Function
        else {
            if(fn !== false){
                var func = new Function('return ' + fn);
                func();
            }
        }
    };

	// jQuery Plugin registry
    ux = $.fn.pluginsample = $.uxpluginsample = function(options){
        return this.each(function(){
            var $el = $(this),
                pluginsample;

            if($el.hasClass('uxitd-pluginsample-ready')){
                return;
            }

            $el.addClass('uxitd-pluginsample-ready');

            // call the constructor
            pluginsample = new PluginSample(this, options);
        });
    };

    // version
	// use semantic versioning
    ux.version = "0.1.0";

    // settings
    ux.settings = defaults;
})(jQuery);