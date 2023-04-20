import Link from "next/link";
import { Alumni_Sans_Inline_One } from "next/font/google";

const AlumniSans = Alumni_Sans_Inline_One({
  subsets: ["latin"],
  variable: "--font-Alumni",
  weight: ["400"],
});

function About() {
  return (
    <div className=" flex flex-col gap-5 items-start  text-blue-50 w-full  p-30% laptop:fixed laptop:top-0 laptop:right-0 laptop:animate-Fade h-screen laptop:w-1/1 laptop:bg-hero-two-pattern bg-cover bg-center laptop:saturate-0 ">
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

      <p className="text-slate-600 font-poppins tablet:text-white laptop:text-white telemovel:overflow-scroll">
        Informações adicionais sobre o Chaos: Ao iniciar no servidor, saiba que
        você receberá uma Carta na bag com todas as informações necessárias.
        Área inicial com NPC [COMECE AQUI] que upa você para o 80 e já treina
        todas suas habilidades. NPC [NEMESIS] vai te presentear com uma caixa
        que possui um SET Tier 9 e uma boa quantidade de ouro para o início da
        sua jornada. Área exclusiva para treinamento de profissões. NPCs para
        compra de off-parts e miscellaneous. Área com todos os itens
        selecionados exclusivamente para Transmogrificação, itens comuns e
        recolor. NPC para liberação de cooldown de Raides e Masmorras. Comandos
        adicionados no jogo: .duel (teleporta para área criada exclusiva para
        duelos) .prof (teleporta para área de treino de profissões) .vip
        (teleporta para área vip, onde ficam as opções para quem deseja doar e
        ajudar sendo um colaborador do Chaos) .start (teleporta para o inicio,
        para quem deseja receber uma nova caixa tier 9) .mog (teleporta para a
        área de transmogrificação) Rates do Chaos: Pet EXP x20 Honor x2
        Reputação x50 Treino de Profissão x3 Essas são apenas algumas informação
        do Chaos, venham conhecer e se surpreendam ainda mais. O server NÃO TEM
        NENHUM FIM LUCRATIVO. É um projeto dedicado a estudos do World of
        Warcraft, voltado para a diversão dos players e aprendizado dos
        desenvolvedores. Porém, para o servidor se manter ativo existem certos
        gastos. Pensando nisso, criamos um sistema com alguns benefícios para
        quem colaborar com DOAÇÕES.
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

export default About;
