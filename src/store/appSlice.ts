import { createSlice } from '@reduxjs/toolkit'
import { formData } from '../helpers'

export interface appState {
  modalShow: boolean
  formdata: formData[]
}

const initialState: appState = {
  modalShow: false,
  formdata: []
}

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.modalShow = action.payload
    },
    addForm: (state, action) => {
      const newData: formData = {
        id: Date.now().toString(),
        ...action.payload
      }
      state.formdata = [...state.formdata, newData]
    },
    removeForm: (state, action) => {
      state.formdata = state.formdata.filter(el => el.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleModal, addForm, removeForm } = appSlice.actions
export default appSlice.reducer