const reducer = (state, action) => {
  if (state === undefined) {
    return {};
  }
  switch (action.type) {
    case 'Hello':
      return 1;
    default:
      return state;
  }
};
export default reducer;
