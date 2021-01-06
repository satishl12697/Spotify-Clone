export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finishing the developing
  // token:
  //   "BQCLA-Cg_73cpMd8rxVkiCFyWDSuhmyRi-ORcBP-Hbiyt286cB0-FDxlwnYpDIPitjmYxg5qdhoUJEY38SYzis3khasn3qclDZ99cjvts7JQ92he2fuhIjYl9cG_2GxEQl9Yk6_FiY42CWuTYqAJijTWI3sZOQ535vOQJFcKo8p46pTR",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
