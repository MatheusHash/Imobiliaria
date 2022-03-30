// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import casa from './casa.json'
export default function handler(req, res) {
  const data = JSON.stringify(casa);
  
  res.status(200).json(data);
}
