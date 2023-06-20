import { render, fireEvent } from '@testing-library/react'
import { Footer, Props } from './Footer'
import { LoginConnectionType } from '../../../model/login'

describe('Footer component', () => {
	const mockHandleConnectionType = jest.fn()
	const mockHandleSignIn = jest.fn()

	const defaultProps: Props = {
		handleConnectionType: mockHandleConnectionType,
		handleSighIn: mockHandleSignIn,
		type: LoginConnectionType.Default
	}

	test('renders the default footer when type is not SSO', () => {
		const { getByText } = render(<Footer {...defaultProps} />)

		expect(getByText('Sign in')).toBeInTheDocument()
		expect(getByText('Continue With SSO')).toBeInTheDocument()
	})

	test('renders the SSO footer when type is SSO', () => {
		const { getByText } = render(<Footer {...defaultProps} type={LoginConnectionType.Sso} />)

		expect(getByText('Sign in with SSO')).toBeInTheDocument()
		expect(getByText('Use Basic-Auth')).toBeInTheDocument()
	})

	test('calls handleSighIn when "Sign in" button is clicked', () => {
		const { getByText } = render(<Footer {...defaultProps} />)
		const signInButton = getByText('Sign in')

		fireEvent.click(signInButton)

		expect(mockHandleSignIn).toHaveBeenCalledTimes(1)
	})

	test('calls handleConnectionType with LoginConnectionType.Default when "Use Basic-Auth" button is clicked', () => {
		const { getByText } = render(<Footer {...defaultProps} type={LoginConnectionType.Sso} />)
		const basicAuthButton = getByText('Use Basic-Auth')

		fireEvent.click(basicAuthButton)

		expect(mockHandleConnectionType).toHaveBeenCalledTimes(1)
		expect(mockHandleConnectionType).toHaveBeenCalledWith(LoginConnectionType.Default)
	})

	test('calls handleConnectionType with LoginConnectionType.Sso when "Continue With SSO" button is clicked', () => {
		const { getByText } = render(<Footer {...defaultProps} />)
		const ssoButton = getByText('Continue With SSO')

		fireEvent.click(ssoButton)

		expect(mockHandleConnectionType).toHaveBeenCalledTimes(1)
		expect(mockHandleConnectionType).toHaveBeenCalledWith(LoginConnectionType.Sso)
	})
})
