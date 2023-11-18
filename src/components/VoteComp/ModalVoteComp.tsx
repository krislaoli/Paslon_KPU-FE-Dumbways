import { Link } from "react-router-dom";


interface CardProps {
  backgroundColor: string;
  image: string;
  name: string;
  desc: string;
  title: string;
}

const Card: React.FC<CardProps> = ({
  image,
  name,
  backgroundColor,
  desc,
  title,
}) => {
  return (
    <div className={`${backgroundColor} p-4 rounded-md shadow-md w-96 h-100`}>
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover mb-4 rounded-md"
      />
      <h2 className="text-2xl font-semibold text-white">{name}</h2>
      <p className="text-white">{desc}</p>
      <div className="mt-4">
        <p className="text-white font-bold">Partai Pengusung:</p>
        <p className="text-white">{title}</p>
      </div>
    </div>
  );
};

export default function ModalVoteComp() {
  return (
    <div className="mt-10 dashboard-responsive w-100 min-vh-100">
      <div>
        <h1 className="font-bold text-4xl text-center text-slate-800">
          MASUKAN PILIHANMU
        </h1>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center font-bold bg-[#FF6C22] text-white mx-[170px] rounded-full w-[40px] h-[40px] flex items-center justify-center">
            1
          </div>
          <div className="text-center font-bold bg-[#FF6C22] text-white mx-[170px] rounded-full w-[40px] h-[40px] flex items-center justify-center">
            2
          </div>
          <div className="text-center font-bold bg-[#FF6C22] text-white mx-[170px] rounded-full w-[40px] h-[40px] flex items-center justify-center">
            3
          </div>

          <Card
            image="public/paslon-image/paslon-1.jpg"
            name="Toni Santoso"
            backgroundColor="bg-[#023c40]"
            desc="Menjadikan air menjadi biru"
            title="- Partai Demokrat"
          />
          <Card
            image="public/paslon-image/paslon-2.jpg"
            name="Minion"
            backgroundColor="bg-[#023c40]"
            desc="Menjadikan air menjadi biru"
            title="- Partai Demokrat"
          />
          <Card
            image="public/paslon-image/paslon-3.jpg"
            name="Toys"
            backgroundColor="bg-[#023c40]"
            desc="Menjadikan air menjadi biru"
            title="- Partai Demokrat"
          />
        </div>
        <div className="flex flex-col md:flex-row mt-11">
          <div className="mb-4 md:mb-0 md:mr-4">
            <button
              type="submit"
              className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-900"
              style={{ background: "rgba(94, 90, 0, 1)" }}
            >
              Reset
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-900"
              style={{ background: "rgba(94, 90, 0, 1)" }}
            >
             <Link to="/votepage"> Submit</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}          