import React from "react";

function Carrinho({ itens, removerDoCarrinho, limparCarrinho, fechar }) {
  // Calcula o valor total dos produtos no carrinho
  const total = itens.reduce((acc, produto) => acc + produto.precoProduto, 0);

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalConteudo}>
        {/* Cabeçalho do Carrinho */}
        <div style={styles.header}>
          <h2>🛒 Seu Carrinho</h2>
          <button onClick={fechar} style={styles.botaoFechar}>X</button>
        </div>

        {/* Lista de Itens */}
        <div style={styles.listaItens}>
          {itens.length === 0 ? (
            <p style={styles.carrinhoVazio}>Seu carrinho está vazio.</p>
          ) : (
            itens.map((produto, index) => (
              <div key={index} style={styles.item}>
                <img src={produto.imagemProduto} alt={produto.nomeProduto} style={styles.itemImagem} />
                <div style={styles.itemInfo}>
                  <h4>{produto.nomeProduto}</h4>
                  <p>R$ {produto.precoProduto.toFixed(2).replace(".", ",")}</p>
                </div>
                <button onClick={() => removerDoCarrinho(index)} style={styles.botaoRemover}>
                  Remover
                </button>
              </div>
            ))
          )}
        </div>

        {/* Rodapé com Total e Ações */}
        {itens.length > 0 && (
          <div style={styles.rodape}>
            <div style={styles.totalContainer}>
              <span>Total:</span>
              <span style={styles.totalValor}>R$ {total.toFixed(2).replace(".", ",")}</span>
            </div>
            <div style={styles.botoesAcao}>
              <button onClick={limparCarrinho} style={styles.botaoLimpar}>
                Esvaziar Carrinho
              </button>
              <button onClick={() => alert("Finalizando compra...")} style={styles.botaoFinalizar}>
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Estilos para forçar o Modal a aparecer na frente de tudo de forma centralizada
const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Fundo escuro transparente atrás do modal
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999 // Garante que fica na frente dos cards de produtos
  },
  modalConteudo: {
    backgroundColor: "#ffffff",
    width: "90%",
    maxWidth: "500px",
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
    marginBottom: "15px"
  },
  botaoFechar: {
    background: "none",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#999"
  },
  listaItens: {
    maxHeight: "300px",
    overflowY: "auto", // Se tiver muitos produtos, cria barra de rolagem interna
    marginBottom: "15px"
  },
  carrinhoVazio: {
    textAlign: "center",
    color: "#777",
    padding: "20px 0"
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "10px 0",
    borderBottom: "1px solid #f5f5f5"
  },
  itemImagem: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "6px"
  },
  itemInfo: {
    flex: 1
  },
  botaoRemover: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px"
  },
  rodape: {
    borderTop: "1px solid #eee",
    paddingTop: "15px"
  },
  totalContainer: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px"
  },
  totalValor: {
    color: "#22c55e"
  },
  botoesAcao: {
    display: "flex",
    gap: "10px"
  },
  botaoLimpar: {
    flex: 1,
    backgroundColor: "#6b7280",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  botaoFinalizar: {
    flex: 1,
    backgroundColor: "#22c55e",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Carrinho;