import { create } from "zustand";
import { EditarTemaMonedaUser, MostrarUsuarios } from "../index";

export const useUsuariosStore = create((set, get) => ({
  idusuario:0,
  datausuarios: [],
  
  mostrarUsuarios: async () => {
    const response = await MostrarUsuarios();
    set({ datausuarios: response });
    if(response){
      set({idusuario:response.id})
      return response
    }else{
       return [];
    }
   
  },
  editartemamonedauser: async (p) => {
    await EditarTemaMonedaUser(p);
    const {mostrarUsuarios} = get();
    set(mostrarUsuarios)

  },
}));
