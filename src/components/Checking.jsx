import React, { useState } from "react";

const images = [
  "https://www.tasteofhome.com/wp-content/uploads/2023/01/GettyImages-871227828.jpg",
  "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2017_30/2053951/170627-better-grocery-store-man-carrying-produce-se-539p.jpg",
  "https://cityfurnish.com/blog/wp-content/uploads/2023/08/healthy-positive-happy-woman-holding-paper-shopping-bag-full-fruit-vegetables-min-1200x900.jpg",
];

const Checking = () => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setOpenCategory(category === openCategory ? null : category);
  };
  return (
    <>
      <div className="container" style={{ cursor: "pointer" }}>
        <section className="row">
          <div className="col-12 col-md-3 mt-5 shadow pt-4 border">
            <h5 className="text-center">All Cateogries</h5>
            <ul className="list-unstyled ">
              <li
                className="p-2  rounded border-bottom"
                onClick={() => handleCategoryClick("freshProduce")}
              >
                Fresh Produce{" "}
                {openCategory ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "freshProduce" && (
                  <ul className="drop-down">
                    <li>fruits </li>
                    <li>vegetables</li>
                  </ul>
                )}
              </li>
              <li
                className="p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("meatSeaFood")}
              >
                Meat & seafood{" "}
                {openCategory ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "meatSeaFood" && (
                  <ul className="drop-down">
                    <li>poultry</li>
                    <li>beef</li>
                    <li>pork</li>
                    <li>fish</li>
                  </ul>
                )}
              </li>
              <li
                className=" p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("dairyEggs")}
              >
                Dairy & Eggs{" "}
                {openCategory ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "dairyEggs" && (
                  <ul className="drop-down">
                    <li>milk</li>
                    <li>cheese</li>
                    <li>yougert</li>
                    <li>eggs</li>
                  </ul>
                )}
              </li>
              <li
                className=" p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("bakery")}
              >
                Bakery{" "}
                {openCategory ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "bakery" && (
                  <ul className="drop-down">
                    <li>bread</li>
                    <li>pastries</li>
                  </ul>
                )}
              </li>
              <li
                className=" p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("grainPasta")}
              >
                Grain & Pasta{" "}
                {openCategory ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "grainPasta" && (
                  <ul className="drop-down">
                    <li>rice</li>
                    <li>pasta</li>
                    <li>flour</li>
                  </ul>
                )}
              </li>
              <li
                className=" p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("condimentSauces")}
              >
                Condiments & Sauces{" "}
                {openCategory ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "condimentSauces" && (
                  <ul className="drop-down">
                    <li>cannedvegetables</li>
                    <li>soups</li>
                  </ul>
                )}
              </li>
              <li
                className=" p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("spiceSeasoning")}
              >
                Spices & Seasoning{" "}
                {openCategory ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "spiceSeasoning" && (
                  <ul className="drop-down">
                    <li>salt</li>
                    <li>pepper</li>
                    <li>herbs</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>


          <div className="col-12 col-md-9  mt-5">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide shadow"
              data-bs-ride="carousel"
            >
              {images.map(
                (data, index) =>
                  current === index && (
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={data}
                          className="d-block w-100"
                          height={500}
                          alt="..."
                        />
                      </div>
                    </div>
                  )
              )}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
                onClick={prevSlide}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
                onClick={nextSlide}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          
        </section>
      </div>
    </>
  );
};

export default Checking;
