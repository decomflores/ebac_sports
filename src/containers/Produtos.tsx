import { useGetProdutosQuery } from '../services/api'
import ProdutoComponente from '../components/Produto'
import * as S from './styles'

const Produtos = () => {
  // Buscando os dados da API via Redux Toolkit Query
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <ProdutoComponente key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default Produtos
