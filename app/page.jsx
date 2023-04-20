import { Bungee_Spice, Alumni_Sans_Inline_One } from "next/font/google";
import Link from "next/link";

const BungeeSpice = Bungee_Spice({
  subsets: ["latin"],
  variable: "--font-Bungee_Spice",
  weight: ["400"],
});
const AlumniSans = Alumni_Sans_Inline_One({
  subsets: ["latin"],
  variable: "--font-Alumni",
  weight: ["400"],
});
function HomePage() {
  return (
    <div className="w-full laptop:hidden">
      <div className=" border-l-2 border-indigo-100 flex-col  h-screen flex p-30%	">
        <h1
          className={`${AlumniSans.variable}  text-4xl font-light font-alumni`}
        >
          O que temos a oferecer?
        </h1>

        <br />
        <br />
        <br />
        <br />

        <p className="text-slate-700 w-full font-poppins">
          O Chaos Funserver é um servidor privado de World of Warcraft e que se
          concentra na versão Lich King do jogo. Servidor foi criado para
          oferecer uma experiência única e emocionante aos jogadores, diferente
          da encontrada mesmice em servidores oficiais. O servidor é chamado de
          Funserver porque foi desenvolvido para ser divertido e desafiador,
          proporcionando aos jogadores uma experiência diferente e personalizada
          em relação aos servidores padrão. O Chaos oferece uma ampla gama de
          recursos que não estão disponíveis em servidores oficiais. Por
          exemplo, ele apresenta níveis personalizados, equipamentos exclusivos,
          eventos especiais e desafios únicos. O servidor foi meticulosamente
          criado para agradar a todos os jogadores, desde os novatos até os mais
          experientes. Foi projetado para oferecer uma experiência de jogo
          dinâmica que mantém você voltado para mais aventuras. Ao jogar no
          Chaos Funserver, vocês podem explorar um vasto mundo de fantasia,
          cheio de criaturas e também personagens impressionantes. Aqui vocês
          podem enfrentar desafios emocionantes, como batalhas contra Bosses
          poderosos ou desafios intensos no PvP. O servidor também oferece uma
          staff amigável, ativa e dedicada em ajudar os jogadores a se
          divertirem alcançando seus objetivos de jogo.
        </p>
        <br />
        <br />
        <br />
        <br />
        <div className="flex gap-6">
          <Link
            href="/download"
            className="p-4 bg-slate-600 text-center text-white font-bold font-serif border-solid border-1 rounded hover:bg-slate-400 duration-75 ease-linear"
          >
            Download
          </Link>
          <Link
            href="http://chaoswow.servegame.com/register"
            target="_blank"
            className="p-4 bg-slate-600 text-center text-white font-bold font-serif border-solid border-1 rounded hover:bg-slate-400 duration-75 ease-linear"
          >
            Criar Conta
          </Link>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <span className="text-center font-rubik text-2xl ">
          <p className={`${BungeeSpice.variable} font-BungeeSpice `}>
            Chaos Funserver
          </p>
        </span>
      </div>
    </div>
  );
}

export default HomePage;
