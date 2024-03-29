import { styled } from "styled-components";

function boardItem(props) {
  const { board, isSelected, onSelect, onDelete } = props;

  return (
    <Wrapper _isSelected={isSelected} onClick={onSelect}>
      {board.title}

      <button
        onClick={(event) => {
          event.stopPropagation();

          if (window.confirm("정말 보드를 삭제하시겠습니까?")) {
            onDelete();
          }
        }}
      >
        삭제
      </button>
    </Wrapper>
  );
}

export default boardItem;

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: #fff;
  :hover {
    background-color: #eee;
  }
  ${(props) =>
    props._isSelected &&
    `
    background-color:#ddd;
  `}
`;
