export default function Home() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh'
    }}>

      {/* TOPO */}
      <header style={{
        backgroundColor: '#111',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '2px solid #ff0000'
      }}>
        <h1 style={{ color: '#ff0000', fontSize: '32px' }}>
          2M PEÇAS AUTOMOTIVAS
        </h1>
        <p>Peças originais com preço de verdade</p>
      </header>

      {/* BANNER */}
      <section style={{
        background: 'linear-gradient(90deg, #ff0000, #000)',
        padding: '40px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '40px', marginBottom: '10px' }}>
          🔥 PROMOÇÃO IMPERDÍVEL 🔥
        </h2>
        <p style={{ fontSize: '20px' }}>
          Trabalhamos com linha completa de autopeças
        </p>
      </section>

      {/* SOBRE */}
      <section style={{ padding: '30px' }}>
        <h2 style={{ color: '#ff0000' }}>
          Sobre a 2M Peças
        </h2>

        <p style={{ marginTop: '15px', lineHeight: '28px' }}>
          Somos especializados na venda de peças automotivas originais e de qualidade,
          atendendo todo o Brasil com agilidade, confiança e preço competitivo.
        </p>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{
        backgroundColor: '#111',
        padding: '30px'
      }}>
        <h2 style={{ color: '#ff0000' }}>
          Por que comprar com a gente?
        </h2>

        <ul style={{ marginTop: '15px', lineHeight: '30px' }}>
          <li>✅ Peças originais e de qualidade</li>
          <li>💰 Preço competitivo de verdade</li>
          <li>🚚 Entrega rápida e segura</li>
          <li>📦 Estoque completo</li>
          <li>🤝 Atendimento diferenciado</li>
          <li>💵 Boleto sem juros até 90 dias</li>
        </ul>
      </section>

      {/* WHATSAPP */}
      <section style={{
        padding: '40px',
        textAlign: 'center'
      }}>
        <h2>Solicite um orçamento agora</h2>

        <a
          href="https://wa.me/5511995453335"
          target="_blank"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '15px 30px',
            backgroundColor: '#25D366',
            color: '#fff',
            borderRadius: '10px',
            fontSize: '20px',
            textDecoration: 'none'
          }}
        >
          Chamar no WhatsApp
        </a>
      </section>

      {/* RODAPÉ */}
      <footer style={{
        backgroundColor: '#000',
        padding: '20px',
        textAlign: 'center',
        borderTop: '2px solid #ff0000'
      }}>
        <p>© 2026 - 2M Peças Automotivas</p>
      </footer>

    </main>
  )
}
<a
  href="https://wa.me/5511995453335"
  target="_blank"
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: '#fff',
    padding: '15px 20px',
    borderRadius: '50px',
    fontSize: '18px',
    textDecoration: 'none',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
  }}
>
  WhatsApp
</a>
