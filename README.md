# React_Modal
Simple React modal styled with styled component.


-- Created simple modal with React and styled-components library.
-- I used use State hook for managing state to control if the Modal is opened or closed. 
-- There are two simple buttons changing the state of the modal. 
-- Modal receives children as the prop since we don't know what will be the component inside.

--- You can notice that there is e.stopPropagation() function. Goal of using this function is to stop bubbling effect if the user click on something instide
ModalWindow beside button.
