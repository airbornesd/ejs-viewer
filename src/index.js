import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(join(__dirname, '../views')));

const emailData = {
  data: `Dear {{SOMETHING_NAME}},
  
  Thank you for using MyGold app - 'A Complete Gold Ecosystem', Powered by Blockchain.
  
  Congratulations, you have bought {{SOMETHING_NAME}}grams of Gold at Buy Rate ₹{{SOMETHING_NAME}}! 🎉`,
};

// emailData.data = emailData.data.replace(/\n/g, '<br>');

app.get('/', (req, res) => {
  res.render('index', { emailData });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
