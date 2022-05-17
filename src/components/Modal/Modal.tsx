import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { groupBankData, groupContact, groupInvoice } from '../../helpers'
import { addForm, toggleModal } from '../../store/appSlice'
import { AppDispatch } from '../../store/store'
import Field from './Field'
import './modal.scss'

interface IModal {
  show: boolean
}

const Modal: React.FC<IModal> = ({ show }) => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch<AppDispatch>()
  const { reset, handleSubmit, register, formState: { errors, isValid } } = useForm({
    mode: 'all'
  })

  // Success modal
  const onSubmit = (data: any) => {
    dispatch(addForm(data))
    cancelForm()
  }

  // cancelForm
  const cancelForm = () => {
    dispatch(toggleModal(false))
    setPage(1)
    reset()
  }

  // prevStep
  const prevStep = () => {
    setPage(page => page - 1)
  }

  // nextStep
  const nextStep = () => {
    if (isValid) setPage(page => page + 1)
  }

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-overlay" onClick={cancelForm}></div>
      <div className="modal-wrapper">
        <button className="btn btn-close" onClick={cancelForm}></button>
        
        <form onSubmit={handleSubmit(onSubmit)}>
      
          {page === 1 && <section>
            <h2>Invoice Address</h2>
            <div className="modal-body">
              {groupInvoice.map(el => (
                <Field key={el.id} details={el} obj={register(el.id, el.options)} error={errors[el?.id]} />
              ))}
            </div>
          </section>}

          {page === 2 && <section>
            <h2>Bank Data</h2>
            <div className="modal-body">
              {groupBankData.map(el => (
                <Field key={el.id} details={el} obj={register(el.id, el.options)} error={errors[el?.id]} />
              ))}
            </div>
          </section>}

          {page === 3 && <section>
            <h2>Contact</h2>
            <div className="modal-body">
              {groupContact.map(el => (
                <Field key={el.id} details={el} obj={register(el.id, el.options)} error={errors[el?.id]} />
              ))}
            </div>
          </section>}

          <div className="modal-footer">
            <button className="btn btn-outlined" type="button" onClick={() => cancelForm()}>Cancel</button>
            {page !== 1 && <button className="btn btn-outlined" onClick={prevStep} type="button">Previous</button>}
            {page !== 3 && <button className="btn" type="button" onClick={nextStep} disabled={!isValid}>Next</button>}
            {page === 3 && <button className="btn" type="submit" disabled={!isValid}>Save</button>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal