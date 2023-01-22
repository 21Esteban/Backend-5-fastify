// import { Router } from "express";
import userCtrl from "../controllers/user.controller.js";

// const route = Router();

// route.post("/register", userCtrl.register);
// route.post("/login", userCtrl.login);

// export default route;

import userCtrol from "../controllers/user.controller.js";

export const userRoutes = (fastify, opts, done) => {
  fastify.post(
    "/register",
    {
      schema: {
        body: {
          type: "object",
          required: ["name","lastname","email","password"],
          properties: {
            name: {
              type: "string",
              minLength: 1,
              maxLength: 20,
            },
            lastname: {
                type: "string",
                minLength: 1,
                maxLength: 20,
              },
            email: {
              type: "string",
              minLength: 1,
              maxLength: 50,
              format:"email"
            },
            password: {
                type: "string",
                minLength: 1,
                maxLength: 50,
              },
          },
        },
      },
    },
    userCtrol.register
  );
  fastify.post("/login",{
    schema: {
      body: {
        type: "object",
        required: ["email","password"],
        properties: {
          email: {
            type: "string",
            minLength: 1,
            maxLength: 50,
            format:"email"
          },
          password: {
              type: "string",
              minLength: 1,
              maxLength: 50,
            },
        },
      },
    },
  }, userCtrol.login);

  done();
};
