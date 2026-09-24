> Pinned source for Docker main: [content/manuals/ai/sandboxes-api/install.md](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/content/manuals/ai/sandboxes-api/install.md)

# Install the Docker Sandboxes SDK

> \[!NOTE]
> The Docker Sandboxes API and SDK are experimental. Features, interfaces,
> and behavior may change.

Use the Docker Sandboxes SDK to create and manage cloud sandboxes from
JavaScript or TypeScript. The SDK includes methods for running commands,
transferring files, and waiting for a sandbox to start or stop.

You don't need the Docker CLI to use the SDK.

## Install the SDK

With Node.js 20 or later, install the SDK in your project:

```console
$ npm install @docker/sandboxes
```

Import `Sandboxes` from `@docker/sandboxes`.

## Connect to Cloud Sandboxes

Before connecting, [activate a Docker Agentic Platform subscription](https://docs.docker.com/agentic-platform/signup/#activate-cloud-access)
for your Docker account.

Configure your client with browser sign-in for interactive use or a personal
access token for automation. The SDK supplies the service URL and manages
access tokens. See [Authentication and authorization](https://docs.docker.com/ai/sandboxes-api/authentication/) for
setup instructions.

Follow [Run your first cloud sandbox](https://docs.docker.com/ai/sandboxes-api/get-started/) for a complete TypeScript
example that creates a sandbox, runs a command, and deletes it.
