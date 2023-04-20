import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This item is feedback item 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This item is feedback item 3",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Delete feedback 
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // add feedback 
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4;
    // console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  // Set item to be updated 
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
