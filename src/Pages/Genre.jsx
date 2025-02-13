import style from "../Styles/Genre.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    name: "Movies",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Web Series",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Documentaries",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Short Films",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Music",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    name: "Podcasts",
    image: "https://picsum.photos/200/300",
  },
];
const Genre = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
    const handleSelect = (card) => {
        if (selected.includes(card)) {
            setSelected(selected.filter((item) => item.id !== card.id));
        } else {
            setSelected([...selected, card]);
        }
    }
    const handleNext = () => {
        if (selected.length >= 3) {
            localStorage.setItem("selectedMovies", JSON.stringify(selected));
            navigate("/widgets")
        } else {
            alert("Please select at least 3 categories");
        }
    }

  return (
    <div className={style.mainGenre}>
      <div className={style.leftGenre}>
        <h1 className={style.title}>Super App</h1>
        <h1 className={style.subTitle}>
          Choose your <br /> Entertainment <br /> Category
        </h1>
        <div className={style.selected}>
                    {selected.map((item) => <span className={style.selectedItem} key={item.id}>{item.title}&nbsp;&nbsp;&nbsp;&nbsp;<span className={style.remove} onClick={() => handleSelect(item)}>X</span></span>)}
                </div>
      </div>
      <div className={style.rightGenre}>
        {cards.map((card) => (
          <div
            className={style.card}
            key={card.id}
            style={{
              backgroundColor: card.bg,
              border: selected.includes(card) ? "2px solid #ffffff" : "none",
            }}
            onClick={() => handleSelect(card)}
          >
            <img src={card.image} alt={card.name}  width={150} height={150}/>
            <h3>{card.name}</h3>
          </div>
        ))}
      </div>
      <button className={style.next} onClick={handleNext}>Next</button>
    </div>
  );
};
export default Genre;
