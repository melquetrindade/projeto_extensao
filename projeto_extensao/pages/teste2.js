import { useState, useEffect } from 'react';

function MeuComponente() {
 const [dados, setDados] = useState(null);

 useEffect(() => {
    const carregarDados = async () => {
      //const locale = 'pt-BR'; // Supondo que você tenha uma maneira de determinar a localização
      const dadosImportados = await import(`../repository/xique_xique.json`);
      setDados(dadosImportados.default);
    };

    carregarDados();
 }, []);

 return (
    <div>
      {dados ? (
        <div>{JSON.stringify(dados)}</div>
      ) : (
        <div>Carregando dados...</div>
      )}
    </div>
 );
}

export default MeuComponente;