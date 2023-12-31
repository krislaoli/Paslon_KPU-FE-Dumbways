
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import VoteInfo from "../../components/ElectionInfoComp/VoteInfo";
// // import FooterComponent from "../../components/FooterComponent";
// import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import FooterComponent from "../FooterComponent";
import NotesComp from "./NotesComp";

const VoteResultComp: React.FC = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Tiger", "Crocodile", "Osprey"],
    datasets: [
      {
        data: [12, 9, 50],
        backgroundColor: ["red", "green", "yellow"],
        borderColor: ["red", "green", "yellow"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-[#9BA4B5] h-screen">
      <h1 className="font-bold text-5xl text-center text-black mt-10">
        INFO PEMILU TERUPDATE
      </h1>
      <div className="flex justify-center mt-10">
        <div className="my-10 w-[600px] h-[368px] top-[353px] left-[179px] radius-[15px] flex flex-col items-center justify-start mr-4">
          <p className="font-bold text-4xl text-black mb-4">Hasil :</p>
          <Pie data={data} />
        </div>
        <div className="flex flex-col space-y-4 my-10 p-4">
          <div className="bg-[#F8DE22] p-4  rounded-md shadow-md w-full md:w-[657px] h-auto md:h-[146px] md:top-[429px] md:left-[604px] radius-[15px] flex">
            <div className="bg-black w-[20%] md:w-[80px] h-auto md:h-[112px] ml-4 radius-[10px] border-[2px] rounded-md">
              <p className="text-white text-center my-3">
                No.
                <br />
                <span>Paslon</span>
                <strong className="text-4xl block">3</strong>
              </p>
            </div>
            <div className="mt-4 font-bold text-4xl text-black ml-4 text-center">
              <p className="text-start">Osprey</p>
              <p className="text-start text-3xl">50%</p>
            </div>
          </div>
          <div className="bg-[#FE0000] p-4  rounded-md shadow-md w-full md:w-[657px] h-auto md:h-[146px] md:top-[429px] md:left-[604px] radius-[15px] flex">
            <div className="bg-black w-[20%] md:w-[80px] h-auto md:h-[112px] ml-4 radius-[10px] border-[2px] rounded-md">
              <p className="text-white text-center my-3">
                No.
                <br />
                <span>Paslon</span>
                <strong className="text-4xl block">1</strong>
              </p>
            </div>
            <div className="mt-4 font-bold text-4xl text-black ml-4 text-center">
              <p className="text-start">Tiger</p>
              <p className="text-start text-3xl">12%</p>
            </div>
          </div>
          <div className="bg-[#3D9634] p-4  rounded-md shadow-md w-full md:w-[657px] h-auto md:h-[146px] md:top-[429px] md:left-[604px] radius-[15px] flex">
            <div className="bg-black w-[20%] md:w-[80px] h-auto md:h-[112px] ml-4 radius-[10px] border-[2px] rounded-md">
              <p className="text-white text-center my-3">
                No.
                <br />
                <span>Paslon</span>
                <strong className="text-4xl block">2</strong>
              </p>
            </div>
            <div className="mt-4 font-bold text-4xl text-black ml-4 text-center">
              <p className="text-start">Crocodile</p>
              <p className="text-start text-3xl">9%</p>
            </div>
          </div>
          <div>

          <h1 className="font-bold text-3xl text-[#FF0000]">ANDA SUDAH MEMILIH !!!!</h1>
          </div>
        </div>
      </div>

      {/* INFO PASLON */}
      <div className="bg-zinc-300 "></div>
      <div className="bg-zinc-300">
        <h1 className="text-5xl font-bold text-center p-10">INFO PASLON</h1>
        <Carousel>
          {/* card 1 */}
          <div className="carousel-item">
            <div>
              <img
                src="public/paslon-image/paslon-1.jpg"
                alt="Foto-Paslon"
                className="w-96 h-96 p-4 rounded-xl object-cover"
              />
            </div>
            <div className=" flex flex-col gap-7 ">
              <div className="">
                <p className="font-bold text-2xl">Nomor Urut: 1</p>
                <h1 className="font-bold text-5xl">Tiger</h1>
              </div>
              <div className="font-normal text-2xl">
                <h2>Visi-Misi</h2>
                <ul className="list-disc pl-10">
                  <li>Membuat Hutan menjadi menakutkan</li>
                  <li>Membuat Manusia berlari cepat saat saya kejar</li>
                  <li>Membuat orang selalu bisa waspada</li>
                </ul>
                <br />
                <h2>Koalisi</h2>
                <ul className="list-disc pl-10">
                  <li>Partai Pemakan Apa aja</li>
                  <li>Partai Satu darah</li>
                  <li>Partai lain</li>
                </ul>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="carousel-item">
            <div>
              <img
                src="public/paslon-image/paslon-2.jpg"
                alt="Foto-Paslon"
                className="w-96 h-96 p-4 rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col gap-7">
              <div className="">
                <p className="font-bold text-2xl">Nomor Urut: 2</p>
                <h1 className="font-bold text-5xl">Crocodile</h1>
              </div>
              <div className="font-normal text-2xl">
                <h2>Visi-Misi</h2>
                <ul className="list-disc pl-10">
                  <li>Menjadikan air menjadi hijau</li>
                  <li>Menjadikan pemancing menjadi waspada</li>
                  <li>Dapat menggoda siapapun</li>
                </ul>
                <br />
                <h2>Koalisi</h2>
                <ul className="list-disc pl-10">
                  <li>Partai Pemersatu Bangsa</li>
                  <li>Partai Menjadi Manusia</li>
                  <li>Partai lain</li>
                </ul>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="carousel-item">
            <div>
              <img
                src="public/paslon-image/paslon-3.jpg"
                alt="Foto-Paslon"
                className="w-96 h-96 p-4 rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col gap-7">
              <div className="">
                <p className="font-bold text-2xl">Nomor Urut: 3</p>
                <h1 className="font-bold text-5xl">Osprey</h1>
              </div>
              <div className="font-normal text-2xl">
                <h2>Visi-Misi</h2>
                <ul className="list-disc pl-10">
                  <li>Menjadikan Langit Untuk Bermangsa</li>
                  <li>Hidup diatas langit</li>
                  <li>Membuat langit menjadi indah</li>
                </ul>
                <br />
                <h2>Koalisi</h2>
                <ul className="list-disc pl-10">
                  <li>Partai langit</li>
                  <li>Partai udara</li>
                  <li>Partai lain</li>
                </ul>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <NotesComp />
      <FooterComponent />
    </div>
  );
};

export default VoteResultComp;
