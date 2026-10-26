/*datas that we gonna already see when we open the program
export help us to import variabels in other files */
export const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export function postsReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":/*befoe starrting tht resquet */
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_SUCCESS":/*when the datas arraives*/
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
}