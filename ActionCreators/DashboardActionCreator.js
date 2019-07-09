
export  const  FetchFeed = (FetchURL)=> {
    return { type: 'FETCH_FEED' , URL: FetchURL}
}

export const FetchAsync = (FectchURL)=>{

    return dispatch => fetch(FectchURL) 
    .then(res => res.json())
    .then(
      data=>dispatch(FetchFeed(data))
    );
}