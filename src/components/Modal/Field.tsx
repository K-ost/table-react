import React from 'react'
import { countries, error, field } from '../../helpers'

interface IField {
  details: field
  obj: any
  error: error
}

const Field: React.FC<IField> = ({ details, obj, error }) => {
  return (
    <div className="form-line">
      <div className="form-field">
        <label className="form-label" htmlFor={details.id}>{details.label}{details.options?.required && ' *'}</label>
        {!details.select ? <input
          type={details.type}
          className={`form-control ${error ? 'error' : ''}`}
          id={details.id}
          {...obj}
        /> :
        <select className="form-select" {...obj}>
          {countries.map(opt => <option key={opt.id} value={opt.value}>{opt.value}</option>)}
        </select>
        }
      </div>
      {error && <div className="form-error">
        {error.message}
      </div>}
    </div>
  )
}

export default Field