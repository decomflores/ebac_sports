import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existeNosFavoritos = state.itens.find((p) => p.id === produto.id)

      if (existeNosFavoritos) {
        // Se já existe, removemos (desfavoritar)
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        // Se não existe, adicionamos
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
