# Handle Prismic Webhook

Triggers Github Actions

Add `PRISMIC_SECRET` and `GITHUB_` credentials to `serverless.yml` or provide these environmental variables through AWS Lambda Management Console after stack is deployed.

Requires aws credentials

`aws configure`

`npm install -g serverless`

`serverless deploy`

Go to: https://console.aws.amazon.com/cloudformation

`serverless remove` to remove resource stack from AWS
