// import { Router } from "express";
import categoryCtrl from "../controllers/Category.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";

// const route = Router();

// route.get("/", categoryCtrl.listAll);
// route.get("/:id", categoryCtrl.listById);
// route.post("/", verifyToken, upload.single("img"), categoryCtrl.create);
// route.delete("/:id", verifyToken, categoryCtrl.delete);
// route.put("/:id", verifyToken, upload.single("img"), categoryCtrl.update);

// export default route;

export const categoryRoutes = (fastify, opts, done) => {


    fastify.get("/", {preValidation:[verifyToken]}, categoryCtrl.listAll);
    fastify.get("/:id", {preValidation:[verifyToken]}, categoryCtrl.listById);
  
  
  
     fastify.post(
      "/",
      {
        schema:{
          body:{
            type:"object",
            required:["name","description"],
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
            }
          }
        }
      ,preValidation:[verifyToken,upload.single("img")]},
  
  
  
      categoryCtrl.create
    );
    
  
  
    // fastify.get("/:id", {preValidation:[verifyToken]}, postCtrol.listarById);
    fastify.delete("/:id", {preValidation:[verifyToken]}, categoryCtrl.delete);
    fastify.put("/:id", {preValidation:[verifyToken,upload.single("img"),]}, categoryCtrl.update);
  
    done();
  };
