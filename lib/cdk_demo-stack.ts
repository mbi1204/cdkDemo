import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ec2 from "aws-cdk-lib/aws-ec2";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    
    
    // Define the Lambda function resource
    const myFunction = new lambda.Function(this, "fnDivisas", {
     runtime: lambda.Runtime.NODEJS_20_X, // Provide any supported Node.js runtime
     handler: "index.handler",   
     code: lambda.Code.fromAsset("lambda/prueba"),
   });
   
  }
}
