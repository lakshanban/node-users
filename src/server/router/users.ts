import { Router } from "express";
import userController from "../../controllers/user-controller";

const router: Router = Router();

router.get("/:id", userController.getUser);
router.post("/", userController.addUser);

export default router;
