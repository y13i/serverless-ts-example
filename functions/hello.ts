import * as λ from "apex.js";
import {LambdaExecutionContext} from "../types";

export default λ((event, context: LambdaExecutionContext): any => {
  const response = {
    statusCode: 200,

    headers: {
    },

    body: JSON.stringify({
      message: `Hello!!!! I am a function named "${context.functionName}"`
    })
  };

  return response;
});
