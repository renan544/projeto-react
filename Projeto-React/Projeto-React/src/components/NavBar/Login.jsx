import React from "react";

function Login({ itslogin, quantidade, onAbrirCarrinho, onAbrirLogin, onAbrirCadastro }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Aizza Store</div>
      
      <div style={styles.menu}>
       
        <button onClick={onAbrirLogin} style={styles.botaoLogin}>
          {itslogin}
        </button>

       
        <button onClick={onAbrirCadastro} style={styles.botaoCadastro}>
          Cadastrar
        </button>

    
        <button onClick={onAbrirCarrinho} style={styles.botaoCarrinho}>
          🛒 Carrinho ({quantidade})
        </button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#1e1e24",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    marginBottom: "30px"
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ffffff"
  },
  menu: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  },
  botaoLogin: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "1px solid #ffffff",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  botaoCadastro: {
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  botaoCarrinho: {
    backgroundColor: "#22c55e",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Login;