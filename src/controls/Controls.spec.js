// Test away
import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Controls from './Controls'

// afterEach(rtl.cleanup())

let wrapper

beforeEach(() => {
  wrapper = rtl.render(<Controls />)
})

describe('Dashboard component', () => {
  test('matches the snapshot!', () => {
    expect(wrapper.container).toMatchSnapshot()
  })

  test('should show close gate button', () => {
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument()
  })

  test('should show lock gate button', () => {
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument()
  })
})
