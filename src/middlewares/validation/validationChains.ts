import { body, param } from "express-validator";

export const nameBody = body("name")
  .not()
  .isEmpty()
  .withMessage("Name is required.")
  .isString()
  .isLength({ max: 20, min: 2 })
  .withMessage("Name has length min-2 and max-20 characters.");
export const emailBody = body("email")
  .not()
  .isEmpty()
  .withMessage("Email is required.")
  .isEmail()
  .withMessage("Email must be a valid email")
  .normalizeEmail();
export const phoneBody = body("phone")
  .not()
  .isEmpty()
  .withMessage("Phone is required.")
  .isMobilePhone("any", { strictMode: true })
  .withMessage("Please provide valid phone number.");
export const nameBodyOptional = body("name")
  .optional({ checkFalsy: true, nullable: true })
  .isString()
  .isLength({ max: 20, min: 2 })
  .withMessage("Name has length min-2 and max-20 characters.");
export const addressBodyOptional = body("address")
  .optional({ checkFalsy: true, nullable: true })
  .isString()
  .isLength({ max: 50, min: 2 })
  .withMessage("Address has length min-2 and max-50 characters.");
export const emailBodyOptional = body("email")
  .optional({ checkFalsy: true, nullable: true })
  .isEmail()
  .withMessage("Email must be a valid email")
  .normalizeEmail();
export const phoneBodyOptional = body("phone")
  .optional({ checkFalsy: true, nullable: true })
  .isMobilePhone("any", { strictMode: true })
  .withMessage("Please provide valid phone number.");

export const passwordBody = body("password")
  .isLength({ min: 8 })
  .withMessage("Password is minimum 8 chars long.");
export const newPasswordBody = body("newPassword")
  .isLength({ min: 8 })
  .withMessage("Password is minimum 8 chars long.");
export const codeBody = body("code")
  .isNumeric()
  .withMessage("Please provide valid code.")
  .isLength({ min: 6, max: 6 })
  .withMessage("Please provide valid code.");
export const codeParam = param("code")
  .isNumeric()
  .withMessage("Please provide valid code.")
  .isLength({ min: 6, max: 6 })
  .withMessage("Please provide valid code.");

export const tokenParam = param("token")
  .isString()
  .withMessage("Please provide valid token")
  .isLength({ min: 64, max: 64 })
  .withMessage("Please provide valid token");

export const tokenBody = body("token")
  .isString()
  .withMessage("Please provide valid token")
  .isLength({ min: 64, max: 64 })
  .withMessage("Please provide valid token");

export const keyBody = body("key")
  .isString()
  .withMessage("Please provide valid key")
  .isLength({ min: 64, max: 64 })
  .withMessage("Please provide valid key");
