import { DISABLE_BALANCE_ON_ADD,DISABLE_BALANCE_ON_EDIT,ALLOW_REGISTRATION } from '../actions/type'


// const initialState = {
// 	disableBalanceOnAdd: true,
// 	disableBalanceOnEdit: true,
//   allowRegistration: false
// }


export default function(state = {} , action){
   switch (action.type) {
    case DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: action.payload
        //disableBalanceOnAdd: !state.disableBalanceOnAdd
      };
    case DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: action.payload
        //disableBalanceOnEdit: !state.disableBalanceOnEdit
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: action.payload
        //allowRegistration: !state.allowRegistration
      };
    default:
      return state;
  }
}
