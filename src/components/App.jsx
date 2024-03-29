import { styled } from "styled-components";
import BoardList from "./board/BoardList";
import BoardMenu from "./board/BoardMenu";
import { useSelector } from "react-redux";
import TodoList from "./todo/TodoList";
import TodoMenu from "./todo/TodoMenu";

function App() {
  const isBoardSelected = useSelector((state) => !!state.board.selectedBoardId);

  return (
    <Wrapper>
      <ContentContainer>
        <BoardContainer>
          <BoardList />
          <BoardMenu />
        </BoardContainer>

        <TodoContainer>
          <TodoList />
          {isBoardSelected && <TodoMenu />}
        </TodoContainer>
      </ContentContainer>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  overflow: scroll;
`;

const BoardContainer = styled.div`
  flex: 1;
  border-right: 1px solid #000;
`;

const TodoContainer = styled.div`
  flex: 2;
`;
