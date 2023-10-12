import React from "react";

function MovieReviewSite() {
  return (
    <div>
      <div className="mytitle">
        <h1>내 생애 최고의 영화들</h1>
        <button>영화 기록하기</button>
      </div>

      <div className="mypost">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">영화URL</label>
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            별점
          </label>
          <select className="form-select" id="inputGroupSelect01">
            <option selected>-- 선택하기 --</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">코멘트</label>
        </div>

        <div className="mybtns">
          <button type="button" className="btn btn-dark">
            기록하기
          </button>
          <button type="button" className="btn btn-outline-dark">
            닫기
          </button>
        </div>
      </div>

      <div className="mycards">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">영화 제목이 들어갑니다</h5>
                <p className="card-text">
                  여기에 영화에 대한 설명이 들어갑니다.
                </p>
                <p>⭐⭐⭐</p>
                <p className="mycomment">나의 의견을 쓰면 되겠죠</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">영화 제목이 들어갑니다</h5>
                <p className="card-text">
                  여기에 영화에 대한 설명이 들어갑니다.
                </p>
                <p>⭐⭐⭐</p>
                <p className="mycomment">나의 의견을 쓰면 되겠죠</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">영화 제목이 들어갑니다</h5>
                <p className="card-text">
                  여기에 영화에 대한 설명이 들어갑니다.
                </p>
                <p>⭐⭐⭐</p>
                <p className="mycomment">나의 의견을 쓰면 되겠죠</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">영화 제목이 들어갑니다</h5>
                <p className="card-text">
                  여기에 영화에 대한 설명이 들어갑니다.
                </p>
                <p>⭐⭐⭐</p>
                <p className="mycomment">나의 의견을 쓰면 되겠죠</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieReviewSite;
