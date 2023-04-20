import Link from "next/link";
import Image from "next/image";
import { BsDiscord, AiFillInstagram } from "react-icons/all";

function MainAside() {
  return (
    <aside className=" flex-col saturate-0	 h-screen fixed flex items-center justify-evenly w-2/6  bg-hero-one-pattern bg-cover  bg-center bg-no-repeat laptop:w-full laptop:relative laptop:h-screen tablet:h-screen ">
      <div className=" w-full flex flex-col p-10 ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo from this website"
            width={300}
            height={10}
          />
        </Link>

        <br />
        <br />
        <h1 className="font-poppins text-2xl text-white font-bold laptop:text-xl">
          O melhor servidor funserver Brasileiro
        </h1>
        {/* <h1 className="font-poppins text-2xl text-blue-500 font-semibold italic laptop:text-xl">
          Venha se divertir e chame seus amigos
        </h1> */}
        <br />

        <p className="font-serif font-medium text-white ">
          Trazendo o melhor da versão Wrath of the Lich King com todo
          entretenimento funserver para a sua diversão e de seus amigos. Staff
          excelente e amigável, sempre atenda a melhorar tudo dentro do server e
          sempre atento a necessidade dos players. Para se divertir conosco,
          basta fazer o{" "}
          <Link
            href="/download"
            className="text-blue-500 font-bold  hover:text-slate-500 duration-75 ease-linear"
          >
            Donwload
          </Link>{" "}
          do cliente World Of Warcraft versão 3.3.5a e em seguida, criar a sua{" "}
          <Link
            href="http://chaoswow.servegame.com/register"
            target="_blank"
            className="text-blue-500 font-bold hover:text-slate-500 duration-75 ease-linear"
          >
            Conta
          </Link>{" "}
          ou se já tiver uma conta, fazer o{" "}
          <Link
            href="http://chaoswow.servegame.com/login"
            target="_blank"
            className="text-blue-500 font-bold hover:text-slate-500 duration-75 ease-linear"
          >
            Login
          </Link>
          .
        </p>
        <br />

        <ul className="flex gap-2 flex-col">
          <Link
            className="text-xl text-white font-bold hover:text-slate-500 duration-75 ease-linear laptop:text-sm font-poppins"
            href="/about"
          >
            Sobre o Chaos Funserver
          </Link>
        </ul>
      </div>

      <footer className=" w-full flex items-center justify-center flex-col gap-5 ">
        <p className=" text-white font-sans font-light relative right-4 laptop:right-1">
          Set Realmlist chaoswow.servegame.com
        </p>
        <div className="relative right-4  flex gap-10 laptop:right-1 ">
          <Link href="https://discord.gg/WFd2vEBw" target="_blank">
            <BsDiscord className="text-2xl text-white hover:text-slate-500 duration-75 ease-linear" />
          </Link>
          <Link
            href="https://www.instagram.com/chaoswowfunserver/"
            target="_blank"
          >
            <AiFillInstagram className="text-2xl text-white hover:text-slate-500 duration-75 ease-linear" />
          </Link>
        </div>
        <span className=" text-white relative right-4 laptop:right-1">
          Copyright | <b>ChaosFunserver @2023</b>
        </span>
      </footer>
    </aside>
  );
}

export default MainAside;
