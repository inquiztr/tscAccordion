# A jQuery Accordion plugin

This project is an accordion plugin used by TSC on the category and product results pages.
Unfortunately it expects a specific dom layout to work but I will be working to make it more flexible in the future.

**Example markup.**

```javascript
	<div class="wrapperDiv">
	    <h2 acccordian="true" autoclose="true" collapsed="true">click this to expand/close </h2>  
	    <ul class="showme">  
	      <li>content to show/hide</li>  
	      <li>content to show/hide</li>  
	    </ul>
    </div>
```

The three dom attributes define the behaviour of the accordion:
	
	accordian="true"
	this plugin will only act when it finds this attribute. (Note, im aware of typo and will fix in future)
	
	collapsed="true"
	the default view of the accordion on. True = collapsed 
	
	autoclose="true"
	set to true to have this accordion to close if another accordion on the page opens


**Usage:**
```javascript
    $(".LeftColumn").tscAccordian({})  
```

Demo:
http://plnkr.co/edit/I2Ok3z?p=preview