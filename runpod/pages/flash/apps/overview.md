> Pinned source for Runpod main: [flash/apps/overview.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/flash/apps/overview.mdx)
> Canonical documentation: https://docs.runpod.io/flash/apps/overview

# Overview

Understand the Flash app development lifecycle. Review setup, configuration, deployment, and usage guidance for Runpod Flash.

A Flash app is a collection of Serverless endpoints deployed to Runpod.

- [Build your first app](https://docs.runpod.io/flash/apps/build-app)

  Create a Flash app, test it locally, and deploy it to production.
- [Initialize a project](https://docs.runpod.io/flash/apps/initialize-project)

  Create boilerplate code for a new Flash project with `flash init`.

## App development workflow

Building a Flash application follows a clear progression from initialization to production deployment:

1. Use `flash init` to create a new project with example workers:

   ```bash
   flash init PROJECT_NAME
   cd PROJECT_NAME
   pip install -r requirements.txt
   ```

   This gives you a working project structure with GPU and CPU worker examples. [Learn more about project initialization](https://docs.runpod.io/flash/apps/initialize-project).
2. Write your application code by defining `Endpoint` functions that execute on Runpod workers:

   ```python
   from runpod_flash import Endpoint, GpuType

   @Endpoint(
       name="inference-worker",
       gpu=GpuType.NVIDIA_GEFORCE_RTX_4090,
       workers=3,
       dependencies=["torch"]
   )
   def run_inference(prompt: str) -> dict:
       import torch
       # Your inference logic here
       return {"result": "..."}
   ```

   [Learn more about customizing your app](https://docs.runpod.io/flash/apps/customize-app).
3. Start a local development server to test your application:

   ```bash
   flash dev
   ```

   Your app runs locally and updates automatically. When you call an `@Endpoint` function, Flash sends the latest code to Runpod workers. [Learn more about local testing](https://docs.runpod.io/flash/apps/local-testing).
4. When ready for production, deploy your application to Runpod Serverless:

   ```bash
   flash deploy
   ```

   When you deploy an app, Runpod:

   1. Packages your code, dependencies, and deployment manifest into a tarball (max 1.5 GB).
   2. Uploads the tarball to Runpod.
   3. Provisions independent Serverless endpoints based on your [endpoint configurations](https://docs.runpod.io/flash/create-endpoints).

   Your entire application—including all worker functions—runs on Runpod infrastructure. [Learn more about deployment](https://docs.runpod.io/flash/apps/deploy-apps).
5. Use apps and environments to organize and manage your deployments across different stages (dev, staging, production). [Learn more about apps and environments](https://docs.runpod.io/flash/apps/apps-and-environments).

## Apps and environments

Flash uses a two-level organizational structure: **apps** (project containers) and **environments** (deployment stages like dev, staging, production). See [Apps and environments](https://docs.runpod.io/flash/apps/apps-and-environments) for complete details.

## Next steps

- [Build your first app](https://docs.runpod.io/flash/apps/build-app)

  Create a Flash app, test it locally, and deploy it to production.
- [Initialize a project](https://docs.runpod.io/flash/apps/initialize-project)

  Create boilerplate code for a new Flash project with `flash init`.
- [Test locally](https://docs.runpod.io/flash/apps/local-testing)

  Use `flash dev` for local development and testing.
- [Deploy to Runpod](https://docs.runpod.io/flash/apps/deploy-apps)

  Deploy your application to production with `flash deploy`.
