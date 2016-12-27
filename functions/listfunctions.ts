import * as AWS from "aws-sdk";
import {LambdaExecutionContext} from "../types";

const lambda = new AWS.Lambda();

export async function listfunctions(event, context: LambdaExecutionContext, callback): Promise<void> {
  const functions  = [];
  let   nextMarker = null;

  do {
    const response: AWS.Lambda.ListFunctionsResponse = await lambda.listFunctions({Marker: nextMarker}).promise();

    functions.push(...response.Functions);
    nextMarker = response.NextMarker;
  } while (nextMarker);

  callback(null, {
    statusCode: 200,
    headers:    {},
    body:       JSON.stringify({functions}),
  });
};
