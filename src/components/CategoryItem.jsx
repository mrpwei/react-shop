import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  /* height: 70vh; */
  position: relative;
`;
const Image = styled.img`
  //不然其父容器Container的flex:1不生效，因为图片会撑大父容器
  width: 100%;
  /* height: 100%;
  object-fit: cover; */
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
