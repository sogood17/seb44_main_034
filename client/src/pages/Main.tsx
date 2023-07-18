import { Link } from "react-router-dom";
const Main = () => {
  return (

    <>
    <Link to='/otherusermy/1'>유저1</Link>
    <Link to='/usermy/edit/1'>개인1</Link>
    <Link to='/ownermy/edit/1'>사장1</Link>
    <Link to='/cafepage/1'>카페1</Link>
    <Link to='/cafes'>카페</Link>
    <Link to='/menus/1'>메뉴1</Link>
    <Link
      to='/cafepage/edit/information/1'>카페수정1</Link>
    <Link to='/cafepage/edit/menu/1'>메뉴수정1</Link>
    <Link to='/postpage/1'>포스트1</Link>
    <Link
      to='/cafepage/edit/menu/1'>메뉴수정1</Link>
    <Link to='/postpage/create'>포스트작성</Link>
    <Link to='/postpage/edit/1'>포스트수정1</Link>
    <Link to='/allpostspage'>포스트</Link>

</>


  );
};

export default Main;
