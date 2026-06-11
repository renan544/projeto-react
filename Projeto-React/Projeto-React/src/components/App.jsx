import { useState } from "react";
import Card from "./Card/Card";
import Carrinho from "./Carrinho/Carrinho";
import Login from "./NavBar/Login";
import CardLogin from "./CardLogin/Cardlogin";
import CardCadastro from "./CardLogin/CardCadastro";

const produtos = [
  {
    id: 1,
    imagemProduto: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=600&auto=format&fit=crop",
    nomeProduto: "Notebook Gamer",
    precoProduto: 4299.9,
    descricaoProduto: "Notebook de alto desempenho para jogos e trabalho.",
    marca: "TechMax"
  },
  {
    id: 2,
    imagemProduto: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=600&auto=format&fit=crop",
    nomeProduto: "Mouse Gamer RGB",
    precoProduto: 149.9,
    descricaoProduto: "Mouse ergonômico com iluminação RGB.",
    marca: "HyperTech"
  },
  {
    id: 3,
    imagemProduto: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=600&auto=format&fit=crop",
    nomeProduto: "Teclado Mecânico",
    precoProduto: 299.9,
    descricaoProduto: "Teclado mecânico com switches de alta durabilidade.",
    marca: "KeyMaster"
  },
  {
    id: 4,
    imagemProduto: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop",
    nomeProduto: "Monitor Full HD 24''",
    precoProduto: 899.9,
    descricaoProduto: "Monitor com excelente qualidade de imagem.",
    marca: "VisionTech"
  },
  {
    id: 5,
    imagemProduto: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop",
    nomeProduto: "Headset Gamer",
    precoProduto: 249.9,
    descricaoProduto: "Som imersivo com microfone integrado.",
    marca: "SoundPro"
  },
  {
    id: 6,
    imagemProduto: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop",
    nomeProduto: "Smartphone 128GB",
    precoProduto: 1899.9,
    descricaoProduto: "Desempenho rápido e câmera de alta resolução.",
    marca: "SmartOne"
  },
  {
    id: 7,
    imagemProduto: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=600&auto=format&fit=crop",
    nomeProduto: "Smartwatch Fitness",
    precoProduto: 499.9,
    descricaoProduto: "Monitore sua saúde e atividades físicas.",
    marca: "FitTech"
  },
  {
    id: 8,
    imagemProduto: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    nomeProduto: "Fone Bluetooth",
    precoProduto: 199.9,
    descricaoProduto: "Áudio sem fio com bateria de longa duração.",
    marca: "AudioMax"
  },
  {
    id: 10,
    imagemProduto: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=600&auto=format&fit=crop",
    nomeProduto: "Placa de vídeo",
    precoProduto: 890.9,
    descricaoProduto: "Para deixar seu computador muito mais rápido.",
    marca: "SpeedDrive"
  },
  {
    id: 11,
    imagemProduto: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=600&auto=format&fit=crop",
    nomeProduto: "Impressora Multifuncional",
    precoProduto: 799.9,
    descricaoProduto: "Imprime, copia e digitaliza com praticidade.",
    marca: "PrintTech"
  }
];

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(prev => [...prev, produto]);
  };

  const removerDoCarrinho = (index) => {
    setCarrinho(prev => prev.filter((_, i) => i !== index));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <>

      <Login
        itslogin="Entrar"
        quantidade={carrinho.length}
        onAbrirCarrinho={() => setMostrarCarrinho(true)}
        onAbrirLogin={() => setMostrarLogin(true)}
        onAbrirCadastro={() => setMostrarCadastro(true)}
      />


      <Card
        produtos={produtos}
        adicionarAoCarrinho={adicionarAoCarrinho}
      />


      {mostrarCarrinho && (
        <Carrinho
          itens={carrinho}
          removerDoCarrinho={removerDoCarrinho}
          limparCarrinho={limparCarrinho}
          fechar={() => setMostrarCarrinho(false)}
        />
      )}


      {mostrarLogin && (
        <CardLogin
          fechar={() => setMostrarLogin(false)}
          abrirCadastro={() => {
            setMostrarLogin(false);
            setMostrarCadastro(true);
          }}
        />
      )}


      {mostrarCadastro && (
        <CardCadastro
          fechar={() => setMostrarCadastro(false)}
          abrirLogin={() => {
            setMostrarCadastro(false);
            setMostrarLogin(true);
          }}
        />
      )}
    </>
  );
}

export default App;