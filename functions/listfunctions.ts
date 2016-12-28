import * as λ from "apex.js";
import * as AWS from "aws-sdk";
import {LambdaExecutionContext} from "../types";

const lambda = new AWS.Lambda();

export default λ(async (event, context: LambdaExecutionContext): Promise<any> => {
  const functions  = [];
  let   nextMarker = null;

  do {
    const response: AWS.Lambda.ListFunctionsResponse = await lambda.listFunctions({Marker: nextMarker}).promise();

    functions.push(...response.Functions);
    nextMarker = response.NextMarker;
  } while (nextMarker);

  return Promise.resolve({
    statusCode: 200,
    headers:    {},
    body:       JSON.stringify({functions}),
  });
});
