> Pinned source for Runpod main: [tutorials/introduction/containers.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/tutorials/introduction/containers.mdx)
> Canonical documentation: https://docs.runpod.io/tutorials/introduction/containers

# Introduction to containers

Learn about Docker containers, images, and how they enable portable application deployment on Runpod.

Containers are the foundation of modern cloud computing, enabling you to package applications with all their dependencies and run them consistently across different environments. This tutorial series teaches you the container fundamentals you need to work effectively with Runpod's [Serverless](https://docs.runpod.io/serverless/overview) and [Pods](https://docs.runpod.io/pods/overview) platforms.

## Requirements

To follow this tutorial series, you need:

- Docker Desktop installed on your system.
- Basic command-line familiarity.
- A text editor for creating Dockerfiles and scripts.

If you haven't installed Docker yet, follow Docker's [official installation guide](https://docs.docker.com/get-started/get-docker/) for your operating system.

## What are containers?

A container is an isolated environment for your code. Containers package applications with everything they need to run, including the code, runtime, system tools, libraries, and settings. Unlike virtual machines, containers share the host operating system's kernel, making them lightweight and fast to start.

When you run a container, it has no knowledge of your operating system or your files. It runs in a self-contained environment with only the resources and files you explicitly provide. This isolation ensures that applications behave consistently regardless of where they run—whether on your laptop, a teammate's computer, or in the cloud.

### Why use containers?

Containers solve the classic "it works on my machine" problem by ensuring applications run identically across all environments. This consistency makes containers essential for modern software development and deployment.

Key benefits include:

- **Portability**: Run containers anywhere Docker runs—on-premises, in the cloud, or in hybrid environments.
- **Consistency**: Applications behave the same way in development, testing, and production.
- **Fast cold starts**: Containers start in seconds, making them ideal for serverless computing.
- **Dependency isolation**: Each container includes its own dependencies, preventing conflicts between applications.
- **Resource efficiency**: Containers share the host OS kernel, using fewer resources than virtual machines.

### Containers and Runpod

Runpod uses containers extensively across its platform:

- **Serverless workers**: When you [deploy a Serverless endpoint](https://docs.runpod.io/serverless/quickstart), you provide a container image that defines how your [worker processes requests](https://docs.runpod.io/serverless/workers/overview). Your handler code runs inside the container, and Runpod automatically scales workers up and down based on demand.
- **Pods**: With [Pods](https://docs.runpod.io/pods/overview), you can bring your own container (BYOC) to [run long-running GPU workloads](https://docs.runpod.io/pods/manage-pods) like training, inference servers, or development environments. [Choose from pre-built templates](https://docs.runpod.io/pods/choose-a-pod) or deploy custom containers.
- **Templates**: Runpod's [templates](https://docs.runpod.io/pods/templates/overview) are pre-configured container images optimized for specific tasks. You can [create custom templates](https://docs.runpod.io/pods/templates/create-custom-template) to standardize your container configurations across deployments.

Understanding containers is essential for leveraging Runpod's full capabilities.

## What are images?

Docker images are read-only templates used to create containers. Think of an image as a snapshot that includes your application code, runtime environment, libraries, and all dependencies needed to run your application.

Images are built using a Dockerfile, which contains a series of instructions for assembling the image. Once built, images can be stored in registries like Docker Hub or private registries, making them easy to share and deploy.

### How images and containers relate

The relationship between images and containers is similar to the relationship between a class and an instance in programming:

- **Image**: A template or blueprint (like a class definition).
- **Container**: A running instance created from an image (like an object).

You can create multiple containers from a single image, and each container runs independently with its own state and data.

### Why use images?

Docker images provide several advantages for development and deployment:

- **Reproducibility**: Images ensure your application runs the same way every time.
- **Version control**: You can tag images with version numbers and roll back to previous versions if needed.
- **Easy distribution**: Store images in registries and pull them onto any system with Docker installed.
- **Efficient storage**: Images use layers that can be shared between different images, reducing storage requirements.

### When to use custom images

While you can use pre-built images from Docker Hub, you'll often need custom images that:

- Include your specific application code.
- Install custom dependencies or libraries.
- Configure [environment variables](https://docs.runpod.io/serverless/development/environment-variables) or settings.
- Optimize for your specific use case.

For Runpod Serverless deployments, you'll create custom images that include your [handler functions](https://docs.runpod.io/serverless/workers/handler-functions) and model dependencies. For Pods, you might use existing [templates](https://docs.runpod.io/pods/templates/manage-templates) or create custom ones with your specific tools and frameworks installed.

## What is Docker Hub?

[Docker Hub](https://hub.docker.com/) is the default public registry for Docker images. It hosts millions of pre-built images for popular software, frameworks, and operating systems. You can pull images from Docker Hub, use them as base images for your own containers, or push your custom images to share with others.

When you run a command like `docker run nginx`, Docker automatically pulls the `nginx` image from Docker Hub if it's not already available locally.

For production deployments on Runpod, you'll typically push your custom images to Docker Hub or a private registry, then configure your endpoint or Pod to use that image.

## Tutorial series

This tutorial series guides you through container fundamentals in a hands-on way:

- [Create Dockerfiles](https://docs.runpod.io/tutorials/introduction/containers/create-dockerfiles)

  Learn how to write Dockerfiles, build custom images, and run your first container. Start with Docker installation and work up to creating executable containers.
- [Docker commands](https://docs.runpod.io/tutorials/introduction/containers/docker-commands)

  Master essential Docker CLI commands for building, running, managing, and debugging containers. Includes Runpod-specific guidance for deployment.
- [Persist data](https://docs.runpod.io/tutorials/introduction/containers/persist-data)

  Understand how to use Docker volumes to persist data outside of containers, essential for machine learning training and data processing workflows.

## Next steps

Ready to get hands-on with Docker? Start with [creating your first Dockerfile](https://docs.runpod.io/tutorials/introduction/containers/create-dockerfiles).

For more in-depth container concepts, see Docker's [container concepts documentation](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/).

When you're ready to deploy containers on Runpod:

**For Serverless:**

- Learn about [Serverless workers](https://docs.runpod.io/serverless/workers/overview) for scalable, GPU-powered inference.
- Review [creating Dockerfiles for Serverless](https://docs.runpod.io/serverless/workers/create-dockerfile) with Runpod-specific best practices.
- Understand [endpoint configurations](https://docs.runpod.io/serverless/endpoints/endpoint-configurations) for optimizing performance and cost.
- Explore [deploying your first endpoint](https://docs.runpod.io/serverless/quickstart) to get started quickly.

**For Pods:**

- Explore [Pods](https://docs.runpod.io/pods/overview) for long-running GPU workloads and development environments.
- Learn how to [choose the right Pod](https://docs.runpod.io/pods/choose-a-pod) for your workload.
- Understand [connecting to Pods](https://docs.runpod.io/pods/connect-to-a-pod) via SSH, web terminal, or IDE.
- Review [Pod storage options](https://docs.runpod.io/pods/storage/types) for persisting data.
