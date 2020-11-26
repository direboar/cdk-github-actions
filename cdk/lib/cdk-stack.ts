import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";
import * as cdk from '@aws-cdk/core';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaHandler = new lambda.Function(this, "lambdaHandler", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "lambda.handler",
      code: lambda.Code.fromAsset("../app/dist"),
      functionName : "lambdaHandler",
    });

    const api = new apigw.RestApi(this, 'api');
    const appResource = api.root.addResource('api');   
    const proxy = appResource.addProxy({
      defaultIntegration: new apigw.LambdaIntegration(lambdaHandler),
      anyMethod: true // "true" is the default
    });
  }
}
