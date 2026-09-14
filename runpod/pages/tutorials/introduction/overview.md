> Commit-pinned source for Runpod main: [tutorials/introduction/overview.mdx](https://docs.runpod.io/tutorials/introduction/overview)

# Overview

Step-by-step guides for building and deploying AI/ML applications on Runpod. Follow the setup and implementation steps in this Runpod tutorial.

Step-by-step guides for building and deploying example applications on Runpod.

## Serverless

For CPU-based inference, follow the [Ollama Serverless tutorial](https://docs.runpod.io/tutorials/serverless/run-ollama-inference).

- [Create an image generation endpoint](https://docs.runpod.io/tutorials/serverless/run-your-first)

  Deploy a Stable Diffusion endpoint and generate your first AI image.
- [Integrate with a web application](https://docs.runpod.io/tutorials/serverless/generate-sdxl-turbo)

  Deploy an image generation endpoint and integrate it into a web app.
- [Deploy a cached model](https://docs.runpod.io/tutorials/serverless/model-caching-text)

  Serve an LLM with reduced cost and cold start times.
- [Deploy a chatbot with Gemma 3](https://docs.runpod.io/tutorials/serverless/run-gemma-7b)

  Use vLLM and the OpenAI API to build an interactive chatbot.
- [Generate images with ComfyUI](https://docs.runpod.io/tutorials/serverless/comfyui)

  Deploy ComfyUI and generate images using JSON workflows.
- [Run Ollama on Serverless CPU](https://docs.runpod.io/tutorials/serverless/run-ollama-inference)

  Deploy an Ollama server on CPU workers and send an inference request.

## Flash

- [Generate images with Flash](https://docs.runpod.io/tutorials/flash/image-generation-with-sdxl)

  Deploy SDXL as a serverless endpoint with Python decorators.
- [Text generation with Transformers](https://docs.runpod.io/tutorials/flash/text-generation-with-transformers)

  Deploy a text generation model on Runpod.
- [Build a load balancing API](https://docs.runpod.io/tutorials/flash/build-rest-api-with-load-balancer)

  Create a REST API with automatic load balancing.

## Pods

- [Run LLM inference with JupyterLab](https://docs.runpod.io/tutorials/pods/run-your-first)

  Launch JupyterLab on a GPU Pod and run inference with Transformers.
- [Pods + Ollama](https://docs.runpod.io/tutorials/pods/run-ollama)

  Deploy Ollama on a GPU Pod and run inference using the Ollama API.
- [Build Docker images with Bazel](https://docs.runpod.io/tutorials/pods/build-docker-images)

  Build Docker images on Pods using Bazel.
- [Generate images with ComfyUI](https://docs.runpod.io/tutorials/pods/comfyui)

  Deploy ComfyUI on a GPU Pod and use the web interface.

## Public Endpoints

- [Build a text-to-video pipeline](https://docs.runpod.io/tutorials/public-endpoints/text-to-video-pipeline)

  Chain multiple Public Endpoints to generate videos from text.

## More resources

Review [container tutorials](https://docs.runpod.io/containers) for packaging guidance, or browse [community video resources](https://docs.runpod.io/references/video-resources) for additional walkthroughs.

- [Container tutorials](https://docs.runpod.io/containers)

  Learn container fundamentals, Dockerfile creation, persistence, and common Docker commands.
- [Community video resources](https://docs.runpod.io/references/video-resources)

  Browse community tutorials about Runpod workflows and supporting Linux tools.
