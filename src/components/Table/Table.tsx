import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { removeForm } from '../../store/appSlice'

const Table: React.FC = () => {
  const formdata = useSelector((state: RootState) => state.app.formdata)
  const dispatch = useDispatch<AppDispatch>()

  // Remove row
  const removeRow = (id: string) => {
    const shouldRemoved = window.confirm('Подвтерждаете удаление?')
    if (shouldRemoved) {
      dispatch(removeForm(id))
    }
  }

  return (
    <>
      <table className="App-table">
        <thead>
          <tr>
            <th></th>
            <th>Company</th>
            <th>Name</th>
            <th>Additional</th>
            <th>Street</th>
            <th>Postal Code</th>
            <th>Country</th>
            <th>IBAN</th>
            <th>BIC</th>
            <th>Bank name</th>
            <th>Fax</th>
            <th>E-mail</th>
            <th>Birthday</th>
            <th>Homepage</th>
          </tr>
        </thead>
        <tbody>
          {formdata.map(row => (
            <tr key={row.id}>
              <td>
                <button className="btn btn-trash" onClick={() => removeRow(row.id)}></button>
              </td>
              <td>{row.company}</td>
              <td>{row.name}</td>
              <td>{row.additional}</td>
              <td>{row.street}</td>
              <td>{row.postalCode}</td>
              <td>{row.country}</td>
              <td>{row.iban}</td>
              <td>{row.bic}</td>
              <td>{row.bankName}</td>
              <td>{row.fax}</td>
              <td>{row.email}</td>
              <td>{row.birthday}</td>
              <td>{row.homepage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!formdata.length && <div className="App-empty">Данных пока что нет</div>}
    </>
  )
}

export default Table