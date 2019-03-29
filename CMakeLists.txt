
set(TEMPLATES skin.tmpl)  
add_custom_command(  
   OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/skin.cpp  
   COMMAND cppcms_tmpl_cc  
               ${TEMPLATES}  
               -o ${CMAKE_CURRENT_BINARY_DIR}/skin.cpp  
               ${TEMPLATES}  
   DEPENDS ${TEMPLATES}) 
