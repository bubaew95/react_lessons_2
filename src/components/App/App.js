import React, { useEffect } from 'react'
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from 'redux/actions/booksAction';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const user = useSelector((state) => state.bookReducer);
  console.log(user)

  return (
    <div className="App">
    </div>
  );
}

export default App;
