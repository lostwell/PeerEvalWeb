// back-end peer eval

var no_categories = 1;

$(window).on('load', function(){
     // when the latest textbox category is clicked, new textbox for category will be inserted
     $(document).on('keypress', '#category', function(){
          no_categories++;
          document.getElementById("category").removeAttribute("id");
          var id_categoryno = "category" + no_categories;
          //var id_question = "question" + no_categories;
          var add_box = '<div class="set">\
                              <span class="categoryContainer">\
                                   <label class="expandable"><img src="../images/down-arrow.png"/></label>\
                                   <input id="category" class="category" type="text" placeholder="Type to add a category">\
                                   <label class="delete"><img src="../images/delete-hover.png"/></label>\
                              </span>\
                              <span class="questionContainer">\
                                <ol class="itemList">\
                                    <div id=' + id_categoryno + '>\
                                        <li>\
                                            <span class="item">\
                                                <input id="question" type="text" placeholder="Type to add a question">\
                                                <label class="delete"><img src="../images/delete-hover.png"/></label>\
                                            </span>\
                                        </li>\
                                    </div>\
                                </ol>\
                            </span>\
                         </div>';
          $("#categories").append(add_box);
     });

     $(document).on('keypress', '#question', function(){
          var parent_id = '#' + $(this).closest('div').attr('id');
          console.log("Here! " + parent_id);
          //var class_name = "set" + no_categories;
          var add_box = '<li>\
                              <span class="item">\
                                   <input id="question" type="text" placeholder="Type to add a question">\
                                   <label class="delete"><img src="../images/delete-hover.png"/></label>\
                              </span>\
                         </li>';
          $(parent_id).append(add_box);
          $(this).removeAttr('id');
     });
});

function add_eventhandling(id_name){
     $(document).on('keypress', '#question', function(){
          console.log("Here!");
          no_categories++;
          document.getElementById("question").removeAttribute("id");
          //var class_name = "set" + no_categories;
          var add_box = '<li>\
                              <span class="item">\
                                   <input id="question" type="text" placeholder="Type to add a question">\
                                   <label class="delete"><img src="../images/delete-hover.png"/></label>\
                              </span>\
                         </li>';
          $(id_name).append(add_box);
     });
}

function show_hide_icons(id_name){
     var checkbox =  $("input:checkbox:checked").length;
     var icon = document.getElementById(id_name);

     if(((id_name == 'edit') && (checkbox == 1)) || ((id_name == 'delete') && (checkbox > 0))){
          console.log("Item is Checked!");
          icon.style.visibility = 'visible';
     }   
     else{
          icon.style.visibility = 'hidden';
          console.log("No/more than one item is checked :<");
     }
}

