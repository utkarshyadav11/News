// pages/api/your-api-endpoint.js
export default function handler(req, res) {
      const { offset, limit } = req.query;
    
      // Perform server-side pagination using the offset and limit values
      const data = []; // Fetch data from your data source and apply pagination
    
      res.status(200).json(data);
    }
    