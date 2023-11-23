import React, { useState } from "react";
import styled from "styled-components";

const Post = styled.div`
  width: 95%;
  max-width: 500px;
  margin: 20px auto 0px auto;
  padding: 20px;
  box-shadow: 0px 0px 3px 0px gray;
`;

const Comment = styled.div`
  textarea {
    /* 텍스트영역에 대한 스타일 설정 */
  }
  label {
    /* 레이블 요소에 대한 스타일 설정 */
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-right: 10px;
`;

const Card = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  max-width: 100%;

  &:hover {
    transform: scale(1.05);
  }

  .movie-info {
    display: none;
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: opacity 0.3s ease;
  }

  &:hover .movie-info {
    display: block;
  }
`;

const Poster = styled.img`
  width: 100px;
  height: auto;
`;

const MyCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  .col {
    margin: 0;
  }
`;

const MovieReviewSite = () => {
  const [movies] = useState([
    {
      title: "영화 제목 1",
      poster:
        "https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg",
      details: "상세 정보 1",
    },
    {
      title: "영화 제목 2",
      poster:
        "https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg",
      details: "상세 정보 2",
    },
    {
      title: "영화 제목 3",
      poster:
        "https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg",
      details: "상세 정보 3",
    },
    {
      title: "영화 제목 4",
      poster:
        "https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg",
      details: "상세 정보 4",
    },
  ]);

  return (
    <div>
      <MyCards>
        {movies.map((movie, index) => (
          <Card key={index}>
            <Poster
              src={movie.poster}
              alt={movie.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.description}</p>
              <p>{movie.rating}</p>
              <p className="mycomment">{movie.comment}</p>
              <div className="movie-info">
                <p>상세 정보: {movie.details}</p>
              </div>
            </div>
          </Card>
        ))}
      </MyCards>
    </div>
  );
};

export default MovieReviewSite;
