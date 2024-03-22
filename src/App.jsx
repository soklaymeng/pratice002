import { useState } from "react";
import "./App.css";
import ClientComponent from "./components/ClientComponent";
import ContentComponent from "./components/ContentComponent";
import NavBarComponent from "./components/NavBarComponent";
import SidebarComponent from "./components/SidebarComponent";

function App() {
  const [message, setMessage] = useState([
    {
      id: 1,
      img: "ppl1.jpg",
      name: "David",
      message:
        "Hey tell me about progress of project? Waiting for your response",
      date: "21 July",
      like: false,
    },
    {
      id: 2,
      img: "ppl2.jpg",
      name: "Stephanie",
      message:
        "I got your first assignment. It was quite good. You can start work on next assignment",
      date: "19 July",
      like: true,
    },
    {
      id: 3,
      img: "ppl3.jpg",
      name: "William",
      message:
        "I want some changes in previous work you sent me. Waiting for your reply.",
      date: "17 July",
      like: false,
    },
    {
      id: 4,
      img: "ppl4.jpg",
      name: "Alona",
      message: "I am really impressed from your work. Keep doing great work",
      date: "15 July",
      like: true,
    },
    {
      id: 5,
      img: "ppl5.jpg",
      name: "Hira",
      message: "When you start redesign of app? Previous project was perfect.",
      date: "13 July",
      like: false,
    },
    {
      id: 6,
      img: "ppl6.jpg",
      name: "Ghulam",
      message:
        "I want to let you know I am agree on that project. Looking for anther good one.",
      date: "11 July",
      like: false,
    },
    {
      id: 7,
      img: "ppl2.jpg",
      name: "Mina",
      message:
        "You did a great job for the previous project. Looking forward for another one next time.",
      date: "13 July",
      like: true,
    },
    {
      id: 8,
      img: "ppl4.jpg",
      name: "Noona",
      message: "How is the project going? I'm waiting to see...",
      date: "13 July",
      like: true,
    },
  ]);

  return (
    <section className=" fixed w-auto flex justify-center items-center h-[100vh] bg-gray-200 overflow-scroll ">
      <div className="container bg-white  w-[80%] h-[80%] rounded-3xl mx-auto shadow-sm-light rounded-tl-3xl ">
        <div className="navbar flex">
          <NavBarComponent />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-1">
            <SidebarComponent />
          </div>
          <div className=" col-span-11">
            <div className="grid grid-cols-12">
              <div className="col-span-9">
                <ContentComponent />
              </div>
              <div className="col-span-3">
                <ClientComponent userInfor={message} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
