//State arg is not application's state, only the state
//this reducer is responsible for

export default function(state = null, action) {
    switch(action.type){
      case 'BOOK_SELECTED':
      return action.payload;
      //action.payload is selectedbook
    }
    return state
}
