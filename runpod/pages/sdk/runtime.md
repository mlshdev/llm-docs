> Pinned source for Runpod main: [sdk/runtime.mdx](https://github.com/runpod/docs/blob/d83395f928bd3bd0f862b1c40d662baf9924c1d1/sdk/runtime.mdx)
> Canonical documentation: https://docs.runpod.io/sdk/runtime

# Runpod SDK runtime

Learn what the runpod-sdk-runtime package does, where its source lives, and when you need to think about it separately from the runpod Python SDK.

When you run an app built with the Runpod SDK, two pieces of code are involved:

- **The SDK** (`runpod`) runs on your machine. It defines your app, talks to the Runpod API, and powers the `rp` CLI.
- **The runtime** (`runpod-sdk-runtime`) runs on each worker. It loads your code, binds storage and other resources, and executes your functions when requests arrive.

The runtime used to ship inside the SDK. It now lives in its own repository, [runpod-workers/sdk-runtime](https://github.com/runpod-workers/sdk-runtime), and is released as a separate package. This lets Runpod ship runtime fixes and update worker images without requiring you to upgrade the SDK, and the reverse.

## How the runtime gets onto workers

You don't install the runtime yourself. Runpod handles it in one of two ways, depending on how your resource is configured:

- **Default images.** Runpod's worker images come with the runtime already installed and cached on Runpod machines, so workers start without an extra install step.
- **Custom images.** If you set `image=` on a resource, the worker installs `runpod-sdk-runtime` when it starts. Your image needs Python and `pip`, and the worker needs network access to the package index.

## When you need the runtime separately

Most users never interact with the runtime directly. You might need to think about it in these cases:

- **You use a custom container image.** The image must be able to install `runpod-sdk-runtime` at startup. If the install fails, the worker can't start and requests time out.
- **You need a specific runtime version.** For example, to pick up a fix before it reaches the default images, or to pin a known-good version.
- **You're debugging worker startup.** Worker logs that mention the runtime or its bootstrap step come from this package, not from your code or the SDK.
- **You want to read or contribute to the worker-side code.** It lives in the [runpod-workers/sdk-runtime](https://github.com/runpod-workers/sdk-runtime) repository, not in runpod-python.

## Serverless workers you build yourself

The runtime is only used by apps defined with `runpod.App`. If you build your own worker container with a handler function and `runpod.serverless.start`, you don't need the runtime. Keep installing the `runpod` package in your image as before. See [Handler functions](https://docs.runpod.io/serverless/workers/handler-functions).

## Next steps

- [Read the SDK overview](https://docs.runpod.io/sdk/overview).
- [Migrate from Flash](https://docs.runpod.io/sdk/migrate-from-flash) if you have an existing Flash project.
