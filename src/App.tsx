import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './components/Modal/Modal'
import Table from './components/Table/Table'
import { toggleModal } from './store/appSlice'
import { AppDispatch, RootState } from './store/store'

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const modalShow = useSelector((state: RootState) => state.app.modalShow)

  return (
    <div className="App">
      <div className="App-buttons">
        <button className="btn" onClick={() => dispatch(toggleModal(true))}>Add</button>
      </div>
      <div className="App-body">
        <Table />
      </div>
      <Modal show={modalShow} />
    </div>
  )
}

export default App
