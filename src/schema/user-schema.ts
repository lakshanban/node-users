import joi from "joi";

const UserSchema = joi.object({
  id: joi.number().required(),
  name: joi.string().required(),
});

export default UserSchema;
