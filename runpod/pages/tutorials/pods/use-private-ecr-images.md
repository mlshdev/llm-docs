> Pinned source for Runpod main: [tutorials/pods/use-private-ecr-images.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/tutorials/pods/use-private-ecr-images.mdx)
> Canonical documentation: https://docs.runpod.io/tutorials/pods/use-private-ecr-images

# Use private AWS ECR images

Pull private AWS ECR container images into Runpod Pods by configuring cross-account delegation, IAM permissions, and registry authentication.

This tutorial shows how to deploy Pods using container images stored in private AWS Elastic Container Registry (ECR) repositories. You configure cross-account IAM delegation so Runpod can pull images on your behalf, with no credential sharing required and no expiring tokens to manage.

> **Note**
>
> This tutorial covers ECR integration for Pods. If you're deploying Serverless workers from ECR, see [Deploying from AWS ECR](https://docs.runpod.io/serverless/workers/deploy#deploying-from-aws-ecr). Serverless endpoints use a different credential mechanism.

## What you'll learn

- How to build and push a Docker image to a private ECR repository.
- How to configure an AWS ECR repository policy for cross-account access.
- How to add an ECR credential in the Runpod console.
- How to deploy a Pod using your private ECR image.

## Requirements

- A Runpod account with credits.
- An AWS account with ECR enabled.
- An AWS IAM user or role with `ecr:SetRepositoryPolicy` permission on the repository.
- Your AWS Account ID, a 12-digit number found in the top-right dropdown of the AWS Console.
- Docker installed on your local machine.
- AWS CLI installed (required to push images; optional if your image is already in ECR).

## Step 1: Push your image to ECR

Skip this step if your image is already in ECR.

### Configure AWS CLI credentials

Run the following command and enter your access key, secret key, and session token when prompted:

```bash
aws configure
```

You can find these credentials under **IAM → Security credentials** in the AWS Console.

### Create a private ECR repository

1. Open the [Amazon ECR console](https://console.aws.amazon.com/ecr/).
2. Under **Private registry**, select **Repositories** and click **Create repository**.
3. Enter a name and click **Create repository**.
4. Note the **URI** shown for your new repository. You'll use it in the following steps.

### Build, tag, and push your image

Authenticate Docker with ECR, then build and push your image:

```bash
# Authenticate Docker to your ECR registry
aws ecr get-login-password --region YOUR_REGION | docker login \
--username AWS \
--password-stdin YOUR_ACCOUNT_ID.dkr.ecr.YOUR_REGION.amazonaws.com

# Build your image
docker build -t YOUR_REPOSITORY_NAME .

# Tag it with your ECR URI
docker tag YOUR_REPOSITORY_NAME:latest \
YOUR_ACCOUNT_ID.dkr.ecr.YOUR_REGION.amazonaws.com/YOUR_REPOSITORY_NAME:latest

# Push it
docker push \
YOUR_ACCOUNT_ID.dkr.ecr.YOUR_REGION.amazonaws.com/YOUR_REPOSITORY_NAME:latest
```

Replace `YOUR_ACCOUNT_ID`, `YOUR_REGION`, and `YOUR_REPOSITORY_NAME` with your values.

> **Warning**
>
> Avoid using the `:latest` tag in production. Runpod shows a warning whenever an image URI ends in `:latest` because latest tags are considered unstable. Use a specific version tag (for example, `:v1.0.0`) for production deployments.

## Step 2: Configure your ECR repository policy

To pull images from your private ECR repository, Runpod needs cross-account access. You grant this by adding an IAM policy to your repository.

1. Open the [Amazon ECR console](https://console.aws.amazon.com/ecr/).
2. Select the repository containing your container image.
3. In the left navigation, select **Permissions**.
4. Click **Edit policy JSON** and add the following policy statement:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowRunpodPull",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage"
      ],
      "Condition": {
        "StringEquals": {
          "aws:PrincipalArn": [
            "arn:aws:iam::550005742258:role/prod-us-east-1-deployment-role",
            "arn:aws:iam::550005742258:role/prod-us-west-2-deployment-role"
          ]
        }
      }
    }
  ]
}
```

5. Click **Save**.

> **Note**
>
> The `aws:PrincipalArn` values are Runpod's fixed AWS deployment roles. These are not something you create or manage. `550005742258` is Runpod's AWS account ID. Runpod's infrastructure runs in both `us-east-1` and `us-west-2`, so you must whitelist both roles exactly as shown above. Do not modify them. Their permissions are intentionally limited to pulling images only, so Runpod cannot access any other part of your AWS account.

> **Note**
>
> `ecr:GetAuthorizationToken` is an account-level AWS action, not repository-scoped. If your organization uses Service Control Policies (SCPs), confirm this action is not blocked at the org level.

### Alternative: Configure via AWS CLI

```bash
aws ecr set-repository-policy \
  --repository-name YOUR_REPOSITORY_NAME \
  --policy-text '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "AllowRunpodPull",
        "Effect": "Allow",
        "Principal": "*",
        "Action": [
          "ecr:GetAuthorizationToken",
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage"
        ],
        "Condition": {
          "StringEquals": {
            "aws:PrincipalArn": [
              "arn:aws:iam::550005742258:role/prod-us-east-1-deployment-role",
              "arn:aws:iam::550005742258:role/prod-us-west-2-deployment-role"
            ]
          }
        }
      }
    ]
  }'
```

Replace `YOUR_REPOSITORY_NAME` with the name of your ECR repository.

## Step 3: Add your ECR credential to Runpod

1. Navigate to [Settings](https://console.runpod.io/user/settings) in the Runpod console.
2. Scroll down to **Container Registry Authentication** and click **Add Credential**.
3. In the **Create new registry credential** modal, switch to the **AWS ECR** tab.
4. Enter a **Credential name** (for example, `my-ecr-repo`).
5. Enter the **ECR Image URI** in the format `ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com/REPOSITORY_NAME:TAG`. You must include the tag (for example, `:latest` or `:v1.0.0`). Runpod requires the tag to store the delegation.
6. Click **Save**.

> **Note**
>
> A registered ECR credential is shared across all members of your team or organization. Members do not need to add it individually.

> **Warning**
>
> Credential creation fails if the ECR repository policy from Step 2 is not correctly configured. Runpod validates the delegation at registration time. If the policy is missing, the credential is rejected. Set up the policy before proceeding.

## Step 4: Deploy a Pod with your private image

You can deploy using a template or directly from the Pod deploy page.

### Option A: Deploy directly

1. Navigate to [Pods](https://console.runpod.io/pods) and select **Deploy**.
2. Choose your GPU configuration.
3. Under **Container Image**, enter your full ECR image URI (for example, `123456789012.dkr.ecr.us-east-2.amazonaws.com/my-app:latest`).
4. Configure any additional settings such as environment variables or exposed ports.
5. Click **Deploy**.

### Option B: Deploy via a template

1. Navigate to [Templates](https://console.runpod.io/user/templates).
2. Create a new template or update an existing one.
3. Set the **Container Image** to your ECR image URI.
4. Save the template, then deploy a Pod from it.

Runpod uses the registered credential to authenticate and pull your private image. To confirm the pull succeeded, open your Pod's logs. You should see layer download entries from your ECR registry.

> **Note**
>
> Only the repository portion of the URI needs to match the registered credential. The tag is not checked at pull time, so any tag from a registered repository works without re-registering.

> **Success**
>
> You've configured cross-account ECR delegation and deployed a Pod using a private container image.

## Troubleshooting

**Credential creation fails:**

- Confirm the repository policy JSON is saved: ECR console → your repository → **Permissions** tab.
- Check that both `aws:PrincipalArn` values match exactly, with no trailing spaces or modified characters.
- Verify your IAM user has `ecr:SetRepositoryPolicy` permission.

**Pod fails to start with an image pull error:**

- Confirm the ECR repository in the Pod or template matches the repository registered in Step 3. The tag is not checked at pull time. Any tag from a registered repository works.
- Check that the image tag exists in your ECR repository.
- Verify the repository policy is applied to the correct repository.

## Next steps

- Learn how to [create custom templates](https://docs.runpod.io/pods/templates/create-custom-template) from your container images.
- Explore [environment variables](https://docs.runpod.io/pods/templates/environment-variables) for configuring your containers.
- Set up [network volumes](https://docs.runpod.io/storage/network-volumes) for persistent storage.
