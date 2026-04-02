export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#090909",
        color: "#ffffff",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "18px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                color: "#ff2b2b",
                fontSize: "32px",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              2M
            </div>
            <div
              style={{
                color: "#d4d4d4",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Distribuidora de Peças Automotivas
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="#sobre"
              style={{ color: "#d8d8d8", textDecoration: "none", fontSize: "15px" }}
            >
              Quem somos
            </a>
            <a
              href="#atuacao"
              style={{ color: "#d8d8d8", textDecoration: "none", fontSize: "15px" }}
            >
              Atuação
            </a>
            <a
              href="#diferenciais"
              style={{ color: "#d8d8d8", textDecoration: "none", fontSize: "15px" }}
            >
              Diferenciais
            </a>
            <a
              href="#contato"
              style={{
                backgroundColor: "#ff2b2b",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              Fale conosco
            </a>
          </nav>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg, #111111 0%, #2b0000 35%, #8f0000 70%, #150000 100%)",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: "#ffd2d2",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "14px",
              }}
            >
              2M Peças Automotivas
            </p>

            <h1
              style={{
                fontSize: "52px",
                lineHeight: 1.1,
                marginTop: "18px",
                marginBottom: "20px",
              }}
            >
              Distribuidora de autopeças com atendimento estratégico para Norte,
              Nordeste, Sul, Centro-Oeste e, no Sudeste, com foco em Rio de Janeiro
              e Espírito Santo.
            </h1>

            <p
              style={{
                color: "#f1eaea",
                fontSize: "20px",
                lineHeight: 1.8,
                maxWidth: "760px",
              }}
            >
              Atendemos empresas que buscam confiança, agilidade e suporte comercial
              eficiente, com atuação direcionada para regiões estratégicas e foco em
              relacionamento de longo prazo.
            </p>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://wa.me/5511995453335?text=Olá,%20vim%20pelo%20site%20e%20quero%20mais%20informações"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#111111",
                  padding: "16px 28px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "17px",
                }}
              >
                Solicitar atendimento
              </a>

              <a
                href="#atuacao"
                style={{
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "#ffffff",
                  padding: "16px 28px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "17px",
                }}
              >
                Ver área de atuação
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(120px, 1fr))",
                  gap: "18px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.18)",
                    borderRadius: "14px",
                    padding: "20px",
                  }}
                >
                  <div style={{ color: "#ffbdbd", fontSize: "13px" }}>Atuação</div>
                  <div style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
                    Regional
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.18)",
                    borderRadius: "14px",
                    padding: "20px",
                  }}
                >
                  <div style={{ color: "#ffbdbd", fontSize: "13px" }}>Atendimento</div>
                  <div style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
                    Ágil
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.18)",
                    borderRadius: "14px",
                    padding: "20px",
                  }}
                >
                  <div style={{ color: "#ffbdbd", fontSize: "13px" }}>Faturamento</div>
                  <div style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
                    Até 90 dias
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.18)",
                    borderRadius: "14px",
                    padding: "20px",
                  }}
                >
                  <div style={{ color: "#ffbdbd", fontSize: "13px" }}>Parceria</div>
                  <div style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
                    Comercial
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        style={{
          padding: "80px 20px 30px",
          backgroundColor: "#090909",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p
            style={{
              color: "#ff4242",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          >
            Quem somos
          </p>

          <h2
            style={{
              fontSize: "38px",
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            Uma distribuidora voltada para relacionamento, confiança e resultado.
          </h2>

          <p
            style={{
              color: "#e1e1e1",
              fontSize: "19px",
              lineHeight: 1.9,
              maxWidth: "1000px",
            }}
          >
            A 2M Peças Automotivas atua com foco comercial e institucional,
            oferecendo atendimento próximo, seriedade nas negociações e suporte
            eficiente para parceiros que precisam de agilidade e segurança.
          </p>
        </div>
      </section>

      <section
        id="atuacao"
        style={{
          padding: "30px 20px 80px",
          backgroundColor: "#090909",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            backgroundColor: "#131313",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "18px",
            padding: "32px",
          }}
        >
          <p
            style={{
              color: "#ff4242",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          >
            Área de atuação
          </p>

          <h2
            style={{
              fontSize: "34px",
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            Atendimento direcionado para regiões estratégicas.
          </h2>

          <p
            style={{
              color: "#dddddd",
              fontSize: "18px",
              lineHeight: 1.9,
              marginBottom: "24px",
            }}
          >
            Nossa atuação comercial está focada nas regiões Norte, Nordeste, Sul e
            Centro-Oeste. No Sudeste, atendemos com foco especial os estados do Rio
            de Janeiro e Espírito Santo.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              "Norte",
              "Nordeste",
              "Sul",
              "Centro-Oeste",
              "Rio de Janeiro",
              "Espírito Santo",
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "14px",
                  padding: "18px",
                  textAlign: "center",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="diferenciais"
        style={{
          padding: "0 20px 80px",
          backgroundColor: "#090909",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            {
              titulo: "Atendimento próximo",
              texto:
                "Equipe preparada para atender com rapidez, clareza e suporte comercial eficiente.",
            },
            {
              titulo: "Atuação regional estratégica",
              texto:
                "Posicionamento comercial direcionado para regiões com maior prioridade de atendimento.",
            },
            {
              titulo: "Condições comerciais",
              texto:
                "Modelos de faturamento pensados para facilitar a rotina dos nossos parceiros.",
            },
            {
              titulo: "Confiança e credibilidade",
              texto:
                "Relacionamento comercial baseado em seriedade, procedência e visão de longo prazo.",
            },
          ].map((item) => (
            <div
              key={item.titulo}
              style={{
                backgroundColor: "#131313",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "18px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  color: "#ff3c3c",
                  fontSize: "22px",
                  marginTop: 0,
                  marginBottom: "14px",
                }}
              >
                {item.titulo}
              </h3>
              <p
                style={{
                  color: "#d7d7d7",
                  fontSize: "17px",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contato"
        style={{
          padding: "80px 20px",
          backgroundColor: "#111111",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#ff4242",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          >
            Contato
          </p>

          <h2
            style={{
              fontSize: "40px",
              marginTop: 0,
              marginBottom: "18px",
            }}
          >
            Vamos construir uma parceria?
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#dddddd",
              fontSize: "19px",
              lineHeight: 1.9,
            }}
          >
            Entre em contato com nossa equipe para tirar dúvidas, solicitar
            atendimento e conhecer melhor as condições comerciais da 2M Peças
            Automotivas.
          </p>

          <div style={{ marginTop: "28px" }}>
            <a
              href="https://wa.me/5511995453335?text=Olá,%20vim%20pelo%20site%20e%20quero%20mais%20informações"
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
              Solicitar atendimento no WhatsApp
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
          backgroundColor: "#060606",
          padding: "24px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#bdbdbd",
            fontSize: "14px",
            lineHeight: "1.8",
          }}
        >
          DISTRIBUIDORA DE PECAS AUTOMOTIVAS 2M LTDA <br />
          CNPJ: 60.215.000/0001-30 <br />
          RUA BATISTA CATANI, 66 - MUQUICABA <br />
          GUARAPARI - ES | CEP: 29215-300
        </p>

        <p
          style={{
            marginTop: "10px",
            color: "#888",
            fontSize: "13px",
          }}
        >
          © 2026 Todos os direitos reservados
        </p>
      </footer>

      <a
        href="https://wa.me/5511995453335?text=Olá,%20vim%20pelo%20site%20e%20quero%20mais%20informações"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          textDecoration: "none",
          padding: "14px 20px",
          borderRadius: "999px",
          fontWeight: "700",
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
          fontSize: "16px",
          zIndex: 999,
        }}
      >
        Solicitar orçamento
      </a>
    </main>
  );
}
