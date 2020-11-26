import express from "express"
import compression from "compression"
import * as apiController from "./controllers/api";
// env.load()

//aws
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// Create Express server
const app = express();

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,PATCH"
  );
  next();
});
app.use(compression());

// Express configuration
//app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext())

// app.set("views", path.join(__dirname, "../views"));
const router: express.Router = express.Router();

/**
 * API examples routes.
 */
router.get("/api/resources/:dbid", apiController.getResources);
router.get("/api/resource/:dbid/:prefix", apiController.getResource);
router.post("/api/resource/:dbid/", apiController.postDbid);

app.use(router);

export default app;