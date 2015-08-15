/** 
 * TSC Accordion
 * Robin Bank, Aug 2015
 *
 *
 */


(function($, window, document, undefined) {
    var pluginName = 'tscAccordion',
        defaults = {
            openClassName: "open",
        };
    var accGroups = []; //saved accordion selection
    var accCollection = [];  //collection of groups

    function Plugin(el, options) {
        this.el = el;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {
            this.activeRow = null;
            this._findAllGroups();
            this._bindEvents();
            this._setDefaultStates();
            //this._addButtonMarkup();
        },

        // Private methods start with underscore
        
        _findAllGroups: function() {
            accGroups = $('[accordian]').filter(function() {
                return $(this).attr('accordian').toLowerCase().indexOf('true') > -1;
            });

            //build the Accordion Collection
            for (var i = 0; i < accGroups.length; i++) {
                accCollection[i] = {}; //initial sub object
                accCollection[i].element = accGroups[i];
                accCollection[i].autoclose = $(accGroups[i]).attr('autoclose').toLowerCase();
                accCollection[i].collapsed = $(accGroups[i]).attr('collapsed').toLowerCase();
                if ($(accGroups[i]).prop('nodeName') == 'H2') {
                    accCollection[i].elementTarget = $(accGroups[i]).siblings().get(0);
                    accCollection[i].elementParent = $(accGroups[i]).parent();
                }
                if ($(accGroups[i]).prop('nodeName') == 'SPAN') {
                    accCollection[i].elementTarget = $(accGroups[i]).next().get(0);
                }
            }
        },

        _toggleState: function(key) {
            //if open then close
            $(accCollection[key].elementParent).toggleClass('collapse');

        },

        _bindEvents: function() {
            for (var i = 0; i < accCollection.length; i++) {
                $(accCollection[i].element).on('click', {
                    elementTarget: accCollection[i].elementTarget,
                    autoclose: accCollection[i].autoclose,
                    key: i,
                    that: this
                }, function(event) {
                    $(event.data.that._toggleState(event.data.key));
                    //if current menu is auto run autoclose
                    
                    if(event.data.autoclose=="true"){
                        $(event.data.that._autoClose(event.data.key))    
                    }
                    
                });
            }
        },

        _autoClose: function(groupKeepOpen) {
            for (var i = 0; i < accCollection.length; i++) {
                if (groupKeepOpen != i) {
                    if (accCollection[i].autoclose == 'true') {
                        //close the item
                        //debugger;
                        this._setState(i, 'close');
                    }
                }
            }
        },

        _setState: function(i, setState) {
            if (setState == "open") {
                $(accCollection[i].elementParent).removeClass('collapse');
            } else if (setState == "close") {
                $(accCollection[i].elementParent).addClass('collapse');
            }
        },

        _setDefaultStates: function() {
            for (var i = 0; i < accCollection.length; i++) {
                if (accCollection[i].collapsed == 'true') {
                    this._setState(i, 'close');
                }
            }
        },

        _setupAcc: function() {
            //find all accordions
            $(accGroups).each(function() {
                if ($(this).prop('nodeName') == 'H2') {
                    $(this).on('click', function() {
                        $(this).parent().next().toggle();
                    });
                }
                if ($(this).prop('nodeName') == 'SPAN') {
                    $(this).on('click', function() {
                        $(this).next().toggle();
                    });
                }
            });
        }

    };
    

    $.fn[pluginName] = function(options) {
        var args = arguments;

        // Is the first parameter an object (options), or was omitted,
        // instantiate a new instance of the plugin.
        if (options === undefined || typeof options === 'object') {
            return this.each(function() {

                // Only allow the plugin to be instantiated once,
                // so we check that the element has no plugin instantiation yet
                if (!$.data(this, 'plugin_' + pluginName)) {

                    // if it has no instance, create a new one,
                    // pass options to our plugin constructor,
                    // and store the plugin instance
                    // in the elements jQuery data object.
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            });

            // If the first parameter is a string and it doesn't start
            // with an underscore or "contains" the `init`-function,
            // treat this as a call to a public method.
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

            // Cache the method call
            // to make it possible
            // to return a value
            var returns;

            this.each(function() {
                var instance = $.data(this, 'plugin_' + pluginName);

                // Tests that there's already a plugin-instance
                // and checks that the requested public method exists
                if (instance instanceof Plugin && typeof instance[options] === 'function') {

                    // Call the method of our plugin instance,
                    // and pass it the supplied arguments.
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }

                // Allow instances to be destroyed via the 'destroy' method
                if (options === 'destroy') {
                    $.data(this, 'plugin_' + pluginName, null);
                }
            });

            // If the earlier cached method
            // gives a value back return the value,
            // otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };



}(jQuery, window, document));

$(function() {
    $('.wrapper').tscAccordion();
});