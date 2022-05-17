export interface patternEmail {
  value: RegExp
  message: string
}
export interface fieldOptions {
  required?: string | boolean
  pattern?: patternEmail
}

export interface country {
  id: string
  value: string
}

export interface field {
  id: string
  type?: string
  label: string
  select?: boolean
  options?: fieldOptions
}

export interface error {
  message: string
  ref: any
  type: string
}

export interface formData {
  id: string
  additional?: string
  bankName: string
  bic: string
  birthday?: string
  company: string
  country?: string
  email: string
  fax?: string
  homepage?: string
  iban: string
  name: string
  postalCode?: string
  street?: string
}



export const groupInvoice: field[] = [
  {
    id: 'company',
    type: 'text',
    label: 'Company',
    options: {
      required: 'Required field'
    }
  },
  {
    id: 'name',
    type: 'text',
    label: 'Name',
    options: {
      required: 'Required field'
    }
  },
  {
    id: 'additional',
    type: 'text',
    label: 'Additional'
  },
  {
    id: 'street',
    type: 'text',
    label: 'Street'
  },
  {
    id: 'postalCode',
    type: 'text',
    label: 'Postal code'
  },
  {
    id: 'country',
    label: 'Country',
    select: true
  }
]

export const groupBankData: field[] = [
  {
    id: 'iban',
    type: 'text',
    label: 'IBAN',
    options: {
      required: 'Required field'
    }
  },
  {
    id: 'bic',
    type: 'text',
    label: 'BIC',
    options: {
      required: 'Required field'
    }
  },
  {
    id: 'bankName',
    type: 'text',
    label: 'Bank name',
    options: {
      required: 'Required field'
    }
  }
]

export const groupContact: field[] = [
  {
    id: 'fax',
    type: 'text',
    label: 'Fax'
  },
  {
    id: 'email',
    type: 'email',
    label: 'E-mail',
    options: {
      required: 'Required field',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Not valid E-mail'
      }
    }
  },
  {
    id: 'birthday',
    type: 'date',
    label: 'Birthday'
  },
  {
    id: 'homepage',
    type: 'text',
    label: 'Homepage'
  },
]


export const countries: country[] = [
  { id: '1', value: 'Germany' },
  { id: '2', value: 'Spain' },
  { id: '3', value: 'Portugal' },
  { id: '4', value: 'Sweden' },
  { id: '5', value: 'Canada' },
  { id: '6', value: 'Italy' },
  { id: '7', value: 'Denmark' },
]