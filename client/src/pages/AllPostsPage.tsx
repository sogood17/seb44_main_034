import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR_1, FONT_SIZE_1 } from '../common/common';
// import { data as dataAll } from '../mockData/cafePost.json';
import PostThumbnail from '../common/posting/PostThumbnail';
import { CafePostList } from '../types/type';
import { getAllPosts } from '../api/postApi';
import PageButton from '../components/pageButton';

const S = {
  Container: styled.div`
    display: block;
    padding: 20px;
    > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 0;
      > li {
        margin: 20px;
        @media screen and (max-width: 500px) {
          margin: 10px;
        }
      }
    }
  `,
  PostStart: styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    border-bottom: 1px solid ${COLOR_1.dark_brown};
    @media screen and (max-width: 500px) {
      font-size: ${FONT_SIZE_1.big_1};
      margin: 10px;
      padding: 2px;
      height: 45px;
      border-bottom: 1px solid rgba(72, 50, 25, 0.5);
    }
    > span {
      margin-top: 10px;
      color: ${COLOR_1.black};
      font-size: ${FONT_SIZE_1.big_4};
      @media screen and (max-width: 500px) {
        font-size: ${FONT_SIZE_1.big_2};
      }
    }
  `,
  Nav: styled.nav`
    > button {
      background-color: ${COLOR_1.white};
      border-radius: 4px;
      border: 1px solid ${COLOR_1.dark_brown};
      box-shadow: 0 4px 4px ${COLOR_1.brown};
    }
  `,
};

const AllPostsPage = () => {
  // const data = dataAll.post;

  const [page, setPage] = useState(1);
  const {
    isLoading,
    isError,
    error,
    data,
    // isFetching,
    isPreviousData,
  } = useQuery(['getAllposts', page], () => getAllPosts(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error as string}</p>

  const lastPage = () => setPage(data.totalpages);
  const firstPage = () => setPage(1);
  const pagesArray = Array(data.totalpages)
    .fill(null)
    .map((_, i) => i + 1);

  if (data) {
    const postsData= data.payload.data;
    console.log(data);
    console.log(data.payload.data);
    console.log(data.payload.pageInfo);
  return (
    <>
    <S.Container>
      <S.PostStart>
        <span>POST</span>
      </S.PostStart>
      <ul>
        {postsData.map((el: CafePostList) => (
          <li key={el.postId}>
            <Link to={`../postpage/${el.postId}`} >
            <PostThumbnail
              key={el.postId}
              image={el.image}
              title={el.title}
              author={el.author}
            />
            </Link>
          </li>
        ))}
      </ul>
      <nav>
        <button onClick = {firstPage} disabled={isPreviousData || page === 1}>
          {`<`}
        </button>
        {pagesArray.map(el => <PageButton key={el} page={el} setPage={setPage} />)}
        <button onClick={lastPage} disabled={isPreviousData || page === data.totalpages}>
          {`>`}
        </button>
      </nav>
    </S.Container>
  </>
  );
};
}

export default AllPostsPage;
