// import { Router } from "express";
import productCtrl from "../controllers/Product.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";


// const route = Router();

// route.get("/", productCtrl.listAll);
// route.get("/:id", productCtrl.listById);
// route.post("/", verifyToken, upload.single("img"), productCtrl.create);
// route.delete("/:id", verifyToken, productCtrl.delete);
// route.put("/:id", verifyToken, upload.single("img"), productCtrl.update);

// export default route;


export const productRoutes = (fastify, opts, done) => {


    fastify.get("/", {preValidation:[verifyToken]}, productCtrl.listAll);
    fastify.get("/:id", {preValidation:[verifyToken]}, productCtrl.listById);
  
  
  
     fastify.post(
      "/",
      {
        schema:{
          body:{
            type:"object",
            required:["name","description","rate","price","stock"],
            properties:{
              title:{
                type:"string",
                minLength:1,
                maxLength: 20
                
              },
              description:{
                type:"string",
                minLength:1,
                maxLength: 50
              },
              rate:{
                type:"number",
                
              },
              price:{
                type:"number",
                
              },
              stock:{
                type:"number",
                
              },
            }
          }
        }
      ,preValidation:[verifyToken,upload.single("img")]},
  
  
  
      productCtrl.create
    );
    
  
  
    // fastify.get("/:id", {preValidation:[verifyToken]}, postCtrol.listarById);
    fastify.delete("/:id", {preValidation:[verifyToken]}, productCtrl.delete);
    fastify.put("/:id", {preValidation:[verifyToken,upload.single("img"),]}, productCtrl.update);
  
    done();
  };