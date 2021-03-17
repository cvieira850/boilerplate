import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  test('Should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /boilerplate do caio/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
