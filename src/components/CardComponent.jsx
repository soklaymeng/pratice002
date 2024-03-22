import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import InformationComponent from "./InformationComponent";

const CardComponent = () => {
  const initialCards = [
    {
      id: 1,
      name: "Web Designing",
      type: "Full Time",
      startDate: "12-12-2022",
      endDate: "01-03-2023",
      company: "ABA",
      detail: "I’m working on frontEnd Design using ReactJS with TailwindCSS.",
    },
    {
      id: 2,
      name: "Mobile App",
      type: "Part Time",
      startDate: "01-01-2022",
      endDate: "03-04-2022",
      company: "APD",
      detail:
        "I am working as a Mobile app developer for an e-commerce project.",
    },
    {
      id: 3,
      name: "UX-UI Design",
      type: "Freelance",
      startDate: "01-02-2023",
      endDate: "03-04-2024",
      company: "KOSIGN",
      detail:
        "I’m working as a UX-UI designer on 2 projects there. One is Leaving management System and another one is E-commerce project.",
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalData, setModalData] = useState(null);

  const seeDetails = (project) => {
    setSelectedProject(project);
    setModalData(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalData(null);
  };

  const addNewProject = (projectData) => {
    setCards([...cards, projectData]);
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < cards.length; i += 3) {
      const rowCards = cards.slice(i, i + 3);
      rows.push(
        <div key={i} className="flex justify-between mt-5">
          {rowCards.map((card, index) => (
            <div
              key={index}
              className={`relative w-[230px] h-[220px] p-3 border text-black rounded-lg shadow-md dark:bg-gray-100 items-center`}
            >
              <div className="absolute top-0 right-0 mt-1 mr-1 space-y-1">
                <div className="h-0.5 w-0.5 rounded-full bg-black"></div>
                <div className="h-0.5 w-0.5 rounded-full bg-black"></div>
                <div className="h-0.5 w-0.5 rounded-full bg-black"></div>
              </div>
              <div className="grid grid-cols-1 divide-y-2 ">
                <div className="">
                  <a href="#">
                    <p>{card.startDate}</p>
                    <p className="mt-2 text-sm text-gray-600">{card.company}</p>
                    <h5 className="text-lg font-bold text-gray-900">
                      {card.name}
                    </h5>
                  </a>
                  <div className="divide-y">
                    <p className="pt-2 text-sm text-gray-700 dark:text-gray-400">
                      <span
                        className={`px-2 rounded-lg ${
                          card.type === "Full Time"
                            ? "bg-pink-300"
                            : card.type === "Part Time"
                            ? "bg-purple-300"
                            : card.type === "Freelance"
                            ? "bg-yellow-300"
                            : "bg-gray-200"
                        }`}
                      >
                        {card.type}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  className="rounded-md bg-purple-400 px-3 py-1 text-white border-slate-200  mt-7  justify-self-end"
                  onClick={() => seeDetails(card)}
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <section className="p-5">
      <div className="navbar grid grid-cols-2 content-evenly items-start justify-around">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl text-black font-bold">Projects</a>
        </div>
        <button
          className="btn btn-end w-22 w-auto self-start justify-self-end bg-slate-200"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          ADD NEW PROJECT
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <ModalComponent onSubmit={addNewProject} />
          </div>
        </dialog>
      </div>

      <section className="gap-gap-3 grid-cols-none grid-flow-col sm:h-full flex mt-5 w-full justify-between items-center p-3">
        <button className="btn bg-purple-400 text-white w-40">
          <i className="fa-solid fa-gift"></i> Finish Project <br /> 13
        </button>
        <button className="btn bg-purple-300 text-white w-40">
          <i className="fa-solid fa-download"></i> Upcoming <br /> 13
        </button>
        <button className="btn bg-pink-400 text-white w-40">
          <i className="fa-solid fa-bars"></i> Total Project <br /> 13
        </button>
        <button className="btn btn-error w-40">
          <i className="fa-solid fa-spinner"></i> In Progress <br /> 4
        </button>
      </section>

      {renderRows()}

      {modalData && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{modalData.name}</h2>
            <p>
              <strong>Company:</strong> {modalData.company}
            </p>
            <p>
              <strong>Start Date:</strong> {modalData.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {modalData.endDate}
            </p>
            <p>
              <strong>Type:</strong> {modalData.type}
            </p>
            <button
              className="btn btn-end bg-purple-400 text-white border-slate-200 h-3"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardComponent;
