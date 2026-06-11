import React from "react";

function CardLogin({ fechar, abrirCadastro }) {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login realizado com sucesso! (Simulação)");
    fechar();
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalConteudo}>
        <div style={styles.header}>
          <h2>🔑 Acessar Conta</h2>
          <button onClick={fechar} style={styles.botaoFechar}>X</button>
        </div>

        <form onSubmit={handleLogin} style={styles.formulario}>
          <div style={styles.campo}>
            <label style={styles.label}>E-mail:</label>
            <input type="email" placeholder="seu@email.com" required style={styles.input} />
          </div>

          <div style={styles.campo}>
            <label style={styles.label}>Senha:</label>
            <input type="password" placeholder="Digite sua senha" required style={styles.input} />
          </div>

          <button type="submit" style={styles.botaoEnviar}>Entrar</button>
        </form>

        <p style={styles.textoTroca}>
          Não tem uma conta?{" "}
          <span onClick={abrirCadastro} style={styles.linkTroca}>
            Cadastre-se aqui
          </span>
        </p>
      </div>
    </div>
  );
}

// Estilos idênticos ao do carrinho para abrir centralizado na tela
const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  },
  modalConteudo: {
    backgroundColor: "#ffffff",
    width: "90%",
    maxWidth: "400px",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
    fontFamily: "Arial, sans-serif",
    color: "#333"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
    marginBottom: "20px"
  },
  botaoFechar: {
    background: "none",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#999"
  },
  formulario: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  campo: {
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  },
  label: {
    fontWeight: "bold",
    fontSize: "14px"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  botaoEnviar: {
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "10px"
  },
  textoTroca: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
    color: "#666"
  },
  linkTroca: {
    color: "#4f46e5",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline"
  }
};

export default CardLogin;