import {LambdaExecutionContext} from "../types";

export function hello(event, context: LambdaExecutionContext, callback): void {
  const response = {
    statusCode: 200,

    headers: {
    },

    body: JSON.stringify({
      message: `Hello!!!! I am a function named "${context.functionName}"`
    })
  };

  callback(null, response);
};
