const initializeState = [];

const resumeReducer = (state = initializeState, action) => {
    switch (action.type) {
        case START_FETCHING_CONTINENTS:
          return {
            ...state,
            loading: true,
          };
        case FETCHING_CONTINENTS_SUCCEED:
          return {
            ...state,
            loading: false,
            continents: action.payload,
          };
        
        default:
          return state;
      }
}

export default resumeReducer;