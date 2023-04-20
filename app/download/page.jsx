import Link from "next/link";
import { Alumni_Sans_Inline_One } from "next/font/google";

const AlumniSans = Alumni_Sans_Inline_One({
  subsets: ["latin"],
  variable: "--font-Alumni",
  weight: ["400"],
});

function DownloadPage() {
  return (
    <div className=" flex flex-col gap-5 items-start  text-blue-50 w-full  p-30% laptop:fixed laptop:top-0 laptop:right-0 laptop:animate-Fade h-screen laptop:w-1/1 laptop:bg-hero-two-pattern bg-cover bg-center laptop:saturate-0">
      <Link
        href="/"
        className="hidden laptop:block text-slate-400 duration-75 ease-linear bg-white px-4 py-2 border-solid rounded hover:bg-slate-100 font-bold "
      >
        Voltar
      </Link>

      <h1
        className={`${AlumniSans.variable}  text-4xl text-slate-600  font-alumni tablet:text-white laptop:text-white`}
      >
        Sobre o Chaos Funserver
      </h1>

      <p className="text-slate-600 font-poppins tablet:text-white laptop:text-white ">
        Se você ainda não tem o World of Warcraft na versão 3.3.5 - Lich King
        baixado, separamos opções de link único para o download.
        <br />
        <br />
        <Link
          href="https://shre.ink/CHAOS"
          target="_blank"
          className="text-sky-400 font-bold font-sans hover:text-sky-950 duration-75 ease-linear  laptop:hover:text-white"
        >
          1: Para download direto do jogo
        </Link>
        <br />
        <br />
        <Link
          href="https://shre.ink/CHAOS-2"
          target="_blank"
          className="text-sky-400 font-bold font-sans hover:text-sky-950 duration-75 ease-linear  laptop:hover:text-white"
        >
          2: Para download direto com nossa realmlist por utorrent
        </Link>
        <br />
        <br />
        <Link
          href="https://mega.nz/file/Rj5nzaBI#kwOZKENdFPWgDsR16qA1IVLqU9m8SK9c9cXZnLumhUQ"
          target="_blank"
          className="text-sky-400 font-bold font-sans hover:text-sky-950 duration-75 ease-linear  laptop:hover:text-white"
        >
          3: Opção referente ao download do arquivo utorrent no mega,
          sucessivamente, quando abrir o arquivo utorrent baixando no mega,
          início do download do jogo no Utorrent. Referente ao downlod direto no
          mega, porém, esse já possui o realmist do servidor. Basta você baixar
          e logar. Caso você já tenha o WoW 3.3.5, basta você trocar o ser
          realmist para: chaoswow.servegame.com ~diretorio~\World of Warcraft
          3.3.5a\Data\enUS\realmlist
        </Link>
      </p>
      <Link
        href="/"
        className=" laptop:hidden text-white duration-75 ease-linear bg-sky-600 px-4 py-2 border-solid rounded hover:bg-sky-500 font-bold "
      >
        Home
      </Link>
    </div>
  );
}

export default DownloadPage;
