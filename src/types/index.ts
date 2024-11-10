export interface LoggerConfig {
  label: string;
  logDirPath?: string;
  environment?: "development" | "production" | "test";
  maxSize?: string;
  maxFiles?: string;
  consoleLevel?: string;
  fileLevel?: string;
}
