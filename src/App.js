import React,{useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MovieCard from "./components/MovieCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const movieList = [
  {
    id: "-1",
    name: "Rohit",
    
  },
  {
    id: "-2",
    name: "Rahul",
   
  },
  {
    id: "-3",
    name: "Ankit",
    
  },
  {
    id: "-4",
    name: "Mohan",
   
  },
  {
    id: "movie-5",
    name: "Avatar",
    
  },
];



function App() {
  const [movies,setMovies] = useState(movieList)
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
   
  
    const startIndex =  result.source.index
    const endIndex =    result.destination.index

    const moviesNew = Array.from(movies);
    const [removed] = moviesNew.splice(startIndex, 1);
    moviesNew.splice(endIndex, 0, removed);
  
    setMovies(moviesNew)
  };

  return (     
        <DragDropContext onDragEnd={onDragEnd} 
        >
          <Droppable droppableId="droppable" >
            {(provided, snapshot) => (
              <List
                {...provided.droppableProps}
                innerRef={provided.innerRef}
                subheader="My Top 5 Student List"
              className=" text-center"

              >
                {movies.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <ListItem className="bg-light border"
                        innerRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={item.id}
                      >
                       <div className="row bg-light">
                         <MovieCard movie={item} />

                         
                         </div> 
                      </ListItem>
                    )}
                  </Draggable>
                ))}
              </List>
            )}
          </Droppable>
        </DragDropContext>
     
  );
}

export default App;
