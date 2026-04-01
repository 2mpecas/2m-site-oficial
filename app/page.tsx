export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0b0b0b",
        color: "#ffffff",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <header
        style={{
          background: "linear-gradient(180deg, #111111 0%, #0b0b0b 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "28px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#ff2b2b",
              fontSize: "42px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            2M Peças Automotivas
          </h1>

          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              color: "#d8d8d8",
              fontSize: "19px",
              lineHeight: 1.6,
            }}
          >
            Distribuidora de autopeças com atendimento ágil, preço competitivo e
            envio para todo o Brasil.
          </p>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg, #b40000 0%, #7a0000 45%, #111111 100%)",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#ffd4d4",
            }}
          >
            Bem-vindo à 2M
          </p>

          <h2
            style={{
              marginTop: "18px",
              marginBottom: "18px",
              fontSize: "52px",
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            Parceria comercial para quem busca confiança, prazo e resultado.
          </h2>

          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              fontSize: "21px",
              lineHeight: 1.7,
              color: "#fff2f2",
            }}
          >
            Atuamos com foco em atendimento próximo, condições comerciais
            competitivas e suporte para empresas que precisam comprar bem e com
            segurança.
          </p>

          <div style={{ marginTop: "34px" }}>
            <a
              href="https://wa.me/5511995453335"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#ffffff",
                color: "#111111",
                padding: "16px 30px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 700,
                marginRight: "12px",
              }}
            >
              Falar no WhatsApp
            </a>

            <a
              href="#sobre"
              style={{
                display: "inline-block",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#ffffff",
                padding: "16px 30px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Conheça a 2M
            </a>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        style={{
          padding: "70px 20px 30px",
          backgroundColor: "#0b0b0b",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              color: "#ff3a3a",
              fontSize: "30px",
              marginBottom: "18px",
            }}
          >
            Quem somos
          </h3>

          <p
            style={{
              color: "#e6e6e6",
              fontSize: "19px",
              lineHeight: 1.9,
              marginBottom: "18px",
            }}
          >
            A 2M Peças Automotivas é uma distribuidora voltada para o atendimento
            de empresas que buscam agilidade, seriedade comercial e boas
            condições para compra. Trabalhamos com foco em relacionamento de
            longo prazo, prezando pela confiança em cada negociação.
          </p>

          <p
            style={{
              color: "#e6e6e6",
              fontSize: "19px",
              lineHeight: 1.9,
              marginBottom: 0,
            }}
          >
            Nossa estrutura foi pensada para oferecer suporte comercial eficiente,
            prazos competitivos e atendimento consultivo, sempre buscando gerar
            valor real para nossos parceiros em todo o território nacional.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "40px 20px 70px",
          backgroundColor: "#0b0b0b",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <h4 style={{ marginTop: 0, color: "#ff3a3a", fontSize: "22px" }}>
              Atendimento ágil
            </h4>
            <p style={{ color: "#d8d8d8", fontSize: "17px", lineHeight: 1.7 }}>
              Equipe preparada para atender com rapidez, clareza e foco na
              necessidade de cada cliente.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <h4 style={{ marginTop: 0, color: "#ff3a3a", fontSize: "22px" }}>
              Cobertura nacional
            </h4>
            <p style={{ color: "#d8d8d8", fontSize: "17px", lineHeight: 1.7 }}>
              Atendemos clientes em todo o Brasil, com compromisso em prazo e
              suporte comercial.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <h4 style={{ marginTop: 0, color: "#ff3a3a", fontSize: "22px" }}>
              Condições comerciais
            </h4>
            <p style={{ color: "#d8d8d8", fontSize: "17px", lineHeight: 1.7 }}>
              Trabalhamos com condições competitivas e modelos de faturamento que
              ajudam nossos parceiros a comprar melhor.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <h4 style={{ marginTop: 0, color: "#ff3a3a", fontSize: "22px" }}>
              Parceria de verdade
            </h4>
            <p style={{ color: "#d8d8d8", fontSize: "17px", lineHeight: 1.7 }}>
              Mais do que vender, buscamos construir relacionamento duradouro com
              quem compra conosco.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#111111",
          padding: "70px 20px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              color: "#ff3a3a",
              fontSize: "30px",
              marginBottom: "18px",
            }}
          >
            Condições e atendimento
          </h3>

          <p
            style={{
              color: "#e6e6e6",
              fontSize: "19px",
              lineHeight: 1.9,
              marginBottom: "18px",
            }}
          >
            Trabalhamos com formatos comerciais pensados para facilitar a rotina
            dos nossos clientes. Entre as modalidades disponíveis, o boleto
            bancário é uma das opções mais utilizadas, com prazo de até 90 dias
            sem juros.
          </p>

          <p
            style={{
              color: "#e6e6e6",
              fontSize: "19px",
              lineHeight: 1.9,
              marginBottom: 0,
            }}
          >
            Nosso objetivo é oferecer uma experiência comercial prática, segura e
            vantajosa, com atendimento próximo desde o primeiro contato.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "70px 20px",
          backgroundColor: "#0b0b0b",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "34px",
              marginTop: 0,
              marginBottom: "16px",
            }}
          >
            Vamos montar uma parceria?
          </h3>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#d8d8d8",
              fontSize: "19px",
              lineHeight: 1.8,
            }}
          >
            Entre em contato com nossa equipe para tirar dúvidas, solicitar
            atendimento e conhecer melhor as condições comerciais da 2M Peças
            Automotivas.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="https://wa.me/5511995453335"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#25D366",
                color: "#ffffff",
                padding: "16px 30px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Chamar no WhatsApp
            </a>
          </div>

          <p
            style={{
              marginTop: "20px",
              color: "#cfcfcf",
              fontSize: "17px",
            }}
          >
            Junior Campos • (11) 99545-3335
          </p>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "#080808",
          padding: "24px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#b9b9b9",
            fontSize: "15px",
          }}
        >
          © 2026 2M Peças Automotivas. Todos os direitos reservados.
        </p>
      </footer>

      <a
        href="https://wa.me/5511995453335"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          textDecoration: "none",
          padding: "14px 20px",
          borderRadius: "999px",
          fontWeight: 700,
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
          fontSize: "16px",
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}
