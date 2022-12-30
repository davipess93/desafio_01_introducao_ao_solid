import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.headers.user_id as string;

      console.log(user_id);

      const allUsers = this.listAllUsersUseCase.execute({ user_id });

      return response.json(allUsers);
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { ListAllUsersController };
