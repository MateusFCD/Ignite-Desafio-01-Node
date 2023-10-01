export async function json(req, res) {
  const buffers = [];

  //aqui ele vai ler o body da requisição por completo para depois retornar o valor da requisição
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader("Content-Type", "application/json");
}
