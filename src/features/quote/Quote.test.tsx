import {rest} from 'msw'
import {setupServer} from 'msw/node'
import '@testing-library/jest-dom'

const server = setupServer(
    rest.get('/quotes', (_, res, ctx) => (
      res(ctx.json({cita: 'tudo certo'}))
    )),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())