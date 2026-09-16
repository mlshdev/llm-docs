> Pinned source for Runpod main: [serverless/endpoints/model-caching.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/serverless/endpoints/model-caching.mdx)
> Canonical documentation: https://docs.runpod.io/serverless/endpoints/model-caching

# Cached models

Accelerate worker cold starts and reduce costs by using cached models. Review configuration and operations guidance for Runpod Serverless.

> **Tip**
>
> To learn how to use cached models with the Hugging Face Transformers library, see [Use Hugging Face models](https://docs.runpod.io/serverless/development/huggingface-models#use-cached-models). For a complete end-to-end deployment walkthrough, see the [cached model tutorial](https://docs.runpod.io/tutorials/serverless/model-caching-text).

Enabling cached models on your endpoints can reduce cold start times and dramatically reduce the cost for loading large models.

## Why use cached models?

- **Faster cold starts:** Using cached models can reduce cold start times to just a few seconds, even for large models.
- **Reduced costs:** You aren't billed for worker time while your model is being downloaded. This is especially impactful for large models that can take several minutes to load.
- **Accelerated deployment:** You can deploy cached models instantly without waiting for external downloads or transfers.
- **Smaller container images:** By decoupling models from your container image, you can create smaller, more focused images that contain only your application logic.
- **Shared across workers:** Multiple workers running on the same host machine can reference the same cached model, eliminating redundant downloads and saving disk space.

## Cached model compatibility

Cached models work with any model hosted on Hugging Face, including:

- **Public models:** Any publicly available model on Hugging Face.
- **Gated models:** Models that require you to accept terms (provide a Hugging Face access token).
- **Private models:** Private models your Hugging Face token has access to.

> **Tip**
>
> Cached models aren't suitable if your model is private and not hosted on Hugging Face. In that case, [bake it into your Docker image](https://docs.runpod.io/serverless/workers/deploy#including-models-and-external-files) instead.

## How it works

When you select a cached model for your endpoint, Runpod automatically tries to start your workers on hosts that already contain the selected model.

If no cached host machines are available, the system delays starting your workers until the model is downloaded onto the machine where your workers will run, ensuring you still won't be charged for the download time.

```mermaid
%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#9289FE','primaryTextColor':'#fff','primaryBorderColor':'#9289FE','lineColor':'#5F4CFE','secondaryColor':'#AE6DFF','tertiaryColor':'#FCB1FF','edgeLabelBackground':'#5F4CFE', 'fontSize':'15px','fontFamily':'font-inter'}}}%%

flowchart TD
    Start([Request received]) --> CheckWorkers{Worker<br/>ready?}
    
    CheckWorkers -->|"&nbsp;&nbsp;Yes&nbsp;&nbsp;"| Process[Process request]
    
    CheckWorkers -->|"&nbsp;&nbsp;No&nbsp;&nbsp;"| CheckCache{Cached model<br/>host available?}
    
    CheckCache -->|"&nbsp;&nbsp;Yes&nbsp;&nbsp;"| FastStart[Start worker on<br/>cached host]
    FastStart --> Ready1[Worker ready<br/>in seconds]
    Ready1 --> Process
    
    CheckCache -->|"&nbsp;&nbsp;No&nbsp;&nbsp;"| WaitForCache[Wait for model download<br/>on target host]
    WaitForCache --> Ready2[Worker ready<br/>after download]
    Ready2 --> Process
    
    Process --> Response([Return response])

    style Start fill:#5F4CFE,stroke:#5F4CFE,color:#FFFFFF,stroke-width:2px
    style Response fill:#5F4CFE,stroke:#5F4CFE,color:#FFFFFF,stroke-width:2px
    
    style CheckWorkers fill:#f87171,stroke:#f87171,color:#000000,stroke-width:2px
    style CheckCache fill:#fb923c,stroke:#fb923c,color:#000000,stroke-width:2px
    
    style Process fill:#22C55E,stroke:#22C55E,color:#000000,stroke-width:2px
    
    style FastStart fill:#22C55E,stroke:#22C55E,color:#000000,stroke-width:2px
    style Ready1 fill:#22C55E,stroke:#22C55E,color:#000000,stroke-width:2px
    
    style WaitForCache fill:#ecc94b,stroke:#ecc94b,color:#000000,stroke-width:2px
    style Ready2 fill:#ecc94b,stroke:#ecc94b,color:#000000,stroke-width:2px

    linkStyle default stroke-width:2px,stroke:#5F4CFE
```

## Enable cached models

Follow these steps to select and add a cached model to your endpoint:

1. Navigate to the [Serverless section](https://www.console.runpod.io/serverless) of the console and click **New Endpoint**. Choose your deployment type (Hugging Face, Docker, GitHub, or Hub).

   If you select **Hugging Face**, the model field is the primary input—model caching is pre-configured automatically.
2. In the **Endpoint Configuration** step, scroll down to **Model** and add the link or path for the model you want to use.

   For example, `Qwen/qwen3-32b-awq`.

   The console displays the model size and estimated GPU requirements to help you choose the right GPU configuration.

   ![](https://raw.githubusercontent.com/runpod/docs/1ac8c64f9623ca776ec994c36b22d4329facbb1d/images/model-cache-setting.png)
3. If you're using a gated model, you'll need to enter a [Hugging Face access token](https://huggingface.co/docs/hub/en/security-tokens).
4. Complete your endpoint configuration and click **Deploy Endpoint** .

You can add a cached model to an existing endpoint by selecting **Manage → Edit Endpoint** in the endpoint details page and updating the **Model** field.

Once it's deployed, your workers will all have access to the cached model for inference.

## Using cached models in your workers

When using [vLLM workers](https://docs.runpod.io/serverless/vllm/overview) or other official Runpod worker images, you can usually just set the **Model** field as shown above (or use the `MODEL_NAME` environment variable), and your workers will automatically use the cached model for inference.

To use cached models with [custom workers](https://docs.runpod.io/serverless/quickstart), you'll need to manually locate the cached model path and integrate it into your worker code.

### Where cached models are stored

Cached models are available to your workers at `/runpod-volume/huggingface-cache/hub/` following Hugging Face cache conventions. The directory structure replaces forward slashes (`/`) from the original model name with double dashes (`--`), and includes a version hash subdirectory.

> **Note**
>
> While cached models use the same mount path as network volumes (`/runpod-volume/`), the model loaded from the cache will load significantly faster than the same model loaded from a network volume.

For example, here is how the model `gensyn/qwen2.5-0.5b-instruct` would be stored:

- `runpod-volume`
  - `huggingface-cache`
    - `hub`
      - `models--gensyn--qwen2.5-0.5b-instruct`
        - `refs`
          - `main` — Contains the commit hash of the 'main' branch
        - `snapshots`
          - `abcdef1234567890...` — Actual model files, named by commit hash

### Locate cached models in your handler

To use a cached model in your handler function, you need to resolve the local path to the model files. The path follows a predictable pattern based on the model identifier:

```
/runpod-volume/huggingface-cache/hub/models--{org}--{name}/snapshots/{hash}/
```

For example, `Qwen/Qwen2.5-0.5B-Instruct` would be stored at:

```
/runpod-volume/huggingface-cache/hub/models--Qwen--Qwen2.5-0.5B-Instruct/snapshots/abc123.../
```

For complete implementation details including a helper function to resolve these paths dynamically, see [Use Hugging Face models](https://docs.runpod.io/serverless/development/huggingface-models#use-cached-models).

### Examples and resources

- [Hugging Face integration](https://docs.runpod.io/serverless/development/huggingface-models#use-cached-models)

  Learn how to adapt your Transformers code to use cached models
- [Cached model tutorial](https://docs.runpod.io/tutorials/serverless/model-caching-text)

  End-to-end walkthrough deploying Phi-3 with model caching
- [Example repository](https://github.com/runpod-workers/model-store-cache-example)

  Sample worker using cached models for LLM inference
- [vLLM workers](https://docs.runpod.io/serverless/vllm/overview)

  Pre-built workers with automatic cached model support

## Current limitations

- Each endpoint is currently limited to one cached model at a time.
- If a Hugging Face repository contains multiple quantization versions of a model (for example, 4-bit AWQ and 8-bit GPTQ versions), the system currently downloads all quantization versions. The ability to select specific quantizations will be available in a future update.
