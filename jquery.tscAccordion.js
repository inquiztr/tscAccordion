/** 
 * TSC Accordion
 * Robin Bank, Aug 2015
 *
 *
 */

<<<<<<< HEAD:jquery.tscAccordian.js
(function ($, window, document, undefined) {
=======

(function($, window, document, undefined) {
>>>>>>> origin/master:jquery.tscAccordion.js
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

<<<<<<< HEAD:jquery.tscAccordian.js
        init: function () {            
            this.activeRow = null;
            this._findAllGroups();
            this._bindEvents();
            
            this._setDefaultStates();
            this._addButtonMarkup();
            
        },

        // Private methods start with underscore

        _addButtonMarkup: function () {

            for (var i = 0; i < accCollection.length; i++) {
                //$(accCollection[i].element).append("<div class='plusMinusIcon'></div>");
                var icon = document.createElement("div");
                icon.className = "plusMinusIcon";
                accCollection[i].element.appendChild(icon);
            }
        },

        _findAllGroups: function () {

            accGroups = $('[accordion]').filter(function () {
                return $(this).attr('accordion').toLowerCase().indexOf('true') > -1;
            });
=======
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

>>>>>>> origin/master:jquery.tscAccordion.js
            //build the Accordion Collection
            for (var i = 0; i < accGroups.length; i++) {
                accCollection[i] = {}; //initial sub object
                accCollection[i].element = accGroups[i];
                accCollection[i].autoclose = $(accGroups[i]).attr('autoclose').toLowerCase();
                accCollection[i].collapsed = $(accGroups[i]).attr('collapsed').toLowerCase();
                if ($(accGroups[i]).prop('nodeName') == 'H2') {
<<<<<<< HEAD:jquery.tscAccordian.js
                    accCollection[i].elementTarget = $(accGroups[i]).parent().siblings().get(0);
                    accCollection[i].elementParent = $(accGroups[i]).parent().parent();
                }
                if ($(accGroups[i]).prop('nodeName') == 'SPAN') {
                    accCollection[i].elementTarget = $(accGroups[i]).next().get(0);
                    accCollection[i].elementParent = $(accGroups[i]).parent();
=======
                    accCollection[i].elementTarget = $(accGroups[i]).siblings().get(0);
                    accCollection[i].elementParent = $(accGroups[i]).parent();
                }
                if ($(accGroups[i]).prop('nodeName') == 'SPAN') {
                    accCollection[i].elementTarget = $(accGroups[i]).next().get(0);
>>>>>>> origin/master:jquery.tscAccordion.js
                }
            }
        },

<<<<<<< HEAD:jquery.tscAccordian.js
        _chromeIconFix: function (element) {
            //chrome bug fix, when it doesnt redraw the background image. this should fix it
            var oldBG = $(element).css("background-image");
            $(element).css("background-image", oldBG);
        },

        _toggleState: function (key) {
            //if open then close
            $(accCollection[key].elementParent).toggleClass('collapse');
            this._chromeIconFix(accCollection[key].element);
        },

        _bindEvents: function () {
=======
        _toggleState: function(key) {
            //if open then close
            $(accCollection[key].elementParent).toggleClass('collapse');

        },

        _bindEvents: function() {
>>>>>>> origin/master:jquery.tscAccordion.js
            for (var i = 0; i < accCollection.length; i++) {
                $(accCollection[i].element).on('click', {
                    elementTarget: accCollection[i].elementTarget,
                    autoclose: accCollection[i].autoclose,
                    key: i,
                    that: this
<<<<<<< HEAD:jquery.tscAccordian.js
                }, function (event) {
                    $(event.data.that._toggleState(event.data.key));
                    //if current menu is auto run autoclose

                    if (event.data.autoclose == "true") {
                        $(event.data.that._autoClose(event.data.key))
                    }

=======
                }, function(event) {
                    $(event.data.that._toggleState(event.data.key));
                    //if current menu is auto run autoclose
                    
                    if(event.data.autoclose=="true"){
                        $(event.data.that._autoClose(event.data.key))    
                    }
                    
>>>>>>> origin/master:jquery.tscAccordion.js
                });
            }
        },

<<<<<<< HEAD:jquery.tscAccordian.js
        _autoClose: function (groupKeepOpen) {
=======
        _autoClose: function(groupKeepOpen) {
>>>>>>> origin/master:jquery.tscAccordion.js
            for (var i = 0; i < accCollection.length; i++) {
                if (groupKeepOpen != i) {
                    if (accCollection[i].autoclose == 'true') {
                        //close the item
<<<<<<< HEAD:jquery.tscAccordian.js
=======
                        //debugger;
>>>>>>> origin/master:jquery.tscAccordion.js
                        this._setState(i, 'close');
                    }
                }
            }
        },
<<<<<<< HEAD:jquery.tscAccordian.js
        
        

        _setState: function (i, setState) {
            if (setState == "open") {
                $(accCollection[i].elementParent).removeClass('collapse');
            } else if (setState == "close") {
                $(accCollection[i].elementParent).addClass('collapse');
            }
            this._chromeIconFix(accCollection[i].element);
        },

        _setDefaultStates: function () {
            for (var i = 0; i < accCollection.length; i++) {
                if (accCollection[i].collapsed == 'true') {
                    this._setState(i, 'close');
                }
            }
        },

        _setupAcc: function () {
            //find all accordions
            $(accGroups).each(function () {
=======

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
>>>>>>> origin/master:jquery.tscAccordion.js
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
    

<<<<<<< HEAD:jquery.tscAccordian.js

    $.fn[pluginName] = function (options) {
=======
    $.fn[pluginName] = function(options) {
>>>>>>> origin/master:jquery.tscAccordion.js
        var args = arguments;

        // Is the first parameter an object (options), or was omitted,
        // instantiate a new instance of the plugin.
        if (options === undefined || typeof options === 'object') {
<<<<<<< HEAD:jquery.tscAccordian.js
            return this.each(function () {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
=======
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
>>>>>>> origin/master:jquery.tscAccordion.js
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



<<<<<<< HEAD:jquery.tscAccordian.js
}(jQuery, window, document));
=======
}(jQuery, window, document));

$(function() {
    $('.wrapper').tscAccordion();
});
>>>>>>> origin/master:jquery.tscAccordion.js
