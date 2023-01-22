// import { Router } from "express";

import facturaCtrl from "../controllers/Factura.controller.js";
import { verifyToken } from "../middlewares/auth.js";

// const route = Router();

// route.get("/", facturaCtrl.listAll);
// route.get("/:id", facturaCtrl.listById);
// route.post("/", verifyToken,facturaCtrl.create);
// route.delete("/:id",verifyToken, facturaCtrl.delete);
// route.put("/:id", verifyToken,facturaCtrl.update);

// export default route;

export const facturaRoutes = (fastify, opts, done) => {


    fastify.get("/", {preValidation:[verifyToken]}, facturaCtrl.listAll);
    fastify.get("/:id", {preValidation:[verifyToken]}, facturaCtrl.listById);
  
  
  
     fastify.post(
      "/",
      {
        schema:{
          body:{
            type:"object",
            required:["product","quantity"],
            properties:{
              product:{
                type:"string",
                
                
              },
              quantity:{
                type:"number",
              },
            }
          }
        }
      ,preValidation:[verifyToken]},
  
  
  
      facturaCtrl.create
    );
    
  
  
    // fastify.get("/:id", {preValidation:[verifyToken]}, postCtrol.listarById);
    fastify.delete("/:id", {preValidation:[verifyToken]}, facturaCtrl.delete);
    fastify.put("/:id", {preValidation:[verifyToken,]}, facturaCtrl.update);
  
    done();
  };
