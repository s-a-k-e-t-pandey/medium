import { Hono } from 'hono'

const app = new Hono()

app.get('/api/v1/blog/:id', (c) => {
  return c.text('get blog')
})

app.get('/api/v1/blog/bulk', (c)=>{
  return c.text('return')
})

export default app
