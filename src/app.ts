import Tay from 'tay';

const router: Tay.Router = new Tay.Router();

// request pre handling

// response pre handling
const server: Tay.Server = Tay.startServer(8080, [router]);

