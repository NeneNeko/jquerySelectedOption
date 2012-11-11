/**
 * Created with JetBrains PhpStorm.
 * User: Toby@toflidium.com
 * Date: 11/11/12
 * Time: 14:03
 * http://github.com/tobya/jqtfm
 *
 * Simple jQuery Script to set the initial item of a select easily.
 *
 * <select name="myselect" initial="Value2">
 *   <option value="Value1"> Value 1 </Option>
 *   <option value="Value2"> Value 2 </Option>
 * </select>
 *
 /*************************************************************
 Copyright © 2012 Toby Allen (http://github.com/tobya)

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute, sub-license, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice, and every other copyright notice found in this software, and all the attributions in every file, and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 ****************************************************************/


//get all selects in document and set value to initial Attribute.
//Simple include the file and it will run.
jQuery('Document').ready(function(){
    jQuery('Select').each(function(){
          var sel = jQuery(this);
          sel.val(sel.attr('SelectedOption'));
  });
});

