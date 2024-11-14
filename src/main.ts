import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger("bootstrap");
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  console.log("Hello World");
  const unusedVariable = "This variable is not used";
  await app.listen(3030);
  logger.log("Application listening on port 3000");
}
bootstrap();
