import winston from "winston";
import config from "config";

const NODE_ENV = config.get<string>("NODE_ENV");

const transports =
  NODE_ENV === "development"
    ? [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
            winston.format.prettyPrint(),
            winston.format.printf(
              (info) =>
                `${info.timestamp} [${info.level.toUpperCase()}]: ${
                  info.message
                }`
            )
          ),
        }),
      ]
    : [
        new winston.transports.File({
          filename: "logs/error.log",
          level: "error",
        }),
        new winston.transports.File({ filename: "logs/combined.log" }),
      ];

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.simple()
  ),
  defaultMeta: { service: "user-service" },
  transports,
});

export default logger;
