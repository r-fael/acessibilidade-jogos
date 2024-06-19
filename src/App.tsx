import React, { useState } from "react";
import styles from "./App.module.scss";
import menu from "./assets/menu.svg";
import caption from "./assets/caption.svg";
import game from "./assets/game.svg";
import toggle from "./assets/toggle.svg";
import eye from "./assets/eye.svg";
import color from "./assets/color.svg";
import target from "./assets/target.svg";
import people from "./assets/people.svg";
import settings from "./assets/settings.svg";
import { useMediaQuery } from "@mui/material";

const sections = [
  {
    title: "Opções de acessibilidade no menu",
    icon: menu,
    alt: "menu",
    description:
      "No menu de configurações, inclua opções para ajustar o tamanho da fonte, ativar legendas, remapear controles e ajustar configurações de áudio, como volume e balanceamento de som.",
  },
  {
    title: "Legendas",
    icon: caption,
    alt: "caption",
    description:
      "Ao longo do jogo, exiba legendas para todos os diálogos e efeitos sonoros relevantes, permitindo que jogadores surdos ou com dificuldades auditivas possam acompanhar completamente a história e os eventos.",
  },
  {
    title: "Controles personalizáveis",
    icon: game,
    alt: "game",
    description:
      "No menu de configurações, permita que os jogadores remapeiem os controles do jogo para atender às suas preferências individuais de jogabilidade. Por exemplo, permita que os jogadores alterem a atribuição de botões no teclado ou no controle do jogo.",
  },
  {
    title: "Modo de dificuldade ajustáveis",
    icon: toggle,
    alt: "toggle",
    description:
      "Ofereça uma variedade de modos de dificuldade, como fácil, médio e difícil. Por exemplo, no modo fácil, reduza o número de inimigos e torne os quebra-cabeças menos complexos, enquanto no modo difícil, aumente o número de inimigos e a inteligência artificial.",
  },
  {
    title: "Feedback visual e auditivo",
    icon: eye,
    alt: "eye",
    description:
      "Ao executar uma ação no jogo, forneça feedback visual e auditivo claro para indicar que a ação foi realizada com sucesso. Por exemplo, ao pressionar um botão para pular, exiba uma animação de salto e reproduza um som de salto.",
  },
  {
    title: "Opções de cor",
    icon: color,
    alt: "color",
    description:
      "No menu de configurações, inclua opções para ajustar o esquema de cores do jogo. Por exemplo, permita que os jogadores escolham entre diferentes combinações de cores ou ativem um modo de alto contraste para melhorar a visibilidade dos elementos do jogo.",
  },
  {
    title: "Tutorial Acessível",
    icon: target,
    alt: "target",
    description:
      "Desenvolva um tutorial que forneça instruções passo a passo sobre como jogar o jogo, utilizando uma combinação de texto, imagens e áudio. Por exemplo, exiba mensagens de texto que expliquem os controles básicos do jogo e forneça demonstrações visuais para ilustrar essas ações.",
  },
  {
    title: "Teste com jogadores com deficiência",
    icon: people,
    alt: "people",
    description:
      "Realize testes de usabilidade com jogadores com diferentes tipos de deficiências, como deficiência visual, auditiva ou motora, para identificar quaisquer problemas de acessibilidade e fazer ajustes necessários antes do lançamento do jogo.",
  },
];

function App() {
  const isMobile = useMediaQuery("(max-width:912px)");

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className={isMobile ? styles.mobileApp : styles.app}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Acessibilidade em
          <span className={styles.strong}>Jogos</span>
        </h1>
        <button
          className={styles.settingButton}
          onClick={() => setOpenMenu((openMenu) => !openMenu)}
        >
          <img src={settings} />
        </button>
        {openMenu ? (
          <div className={styles.menuContainer}>
            <h3 className={styles.preferences}>Preferências</h3>
            <div className={styles.optionsGrid}>
              <p className={styles.label}>Fonte</p> <button>+</button>{" "}
              <button>-</button>
              <p className={styles.label}>Contraste</p> <button>+</button>{" "}
              <button>-</button>
            </div>
            <button className={styles.returnToStandard}>
              Voltar ao padrão
            </button>
          </div>
        ) : null}
      </div>
      <div className={styles.body}>
        {sections.map((section) => (
          <div className={styles.section}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{section.title}</h2>
              <img
                src={section.icon}
                alt={section.alt}
                className={styles.icon}
              />
            </div>
            <p className={styles.description}>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
