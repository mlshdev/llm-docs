> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.executecommand/README.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/core-nodes/n8n-nodes-base.executecommand/README.md)

# Execute Command

The Execute Command node runs shell commands on the host machine that runs n8n.

> **Warning**
> **Security considerations**
>
> The Execute Command node can introduce significant security risks in environments that operate with untrusted users. Because of this, the node is [disabled](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/block-specific-nodes#exclude-nodes) by default from n8n 2.0.

> **Info**
> **Which shell runs the command?**
>
> This node executes the command in the default shell of the host machine. For example, `cmd` on Windows and `zsh` on macOS.
>
> If you run n8n with Docker, your command will run in the n8n container and not the Docker host.
>
> If you're using [queue mode](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode), the command runs on the worker that's executing the task in production mode. When running manual executions, it runs on the main instance, unless you set `OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS` to `true`.

> **Info**
> **Not available on Cloud**
>
> This node isn't available on n8n Cloud.

## Node parameters <a id="node-parameters"></a>

Configure the node using the following parameters.

### Execute Once <a id="execute-once"></a>

Choose whether you want the node to execute only once (turned on) or once for every item it receives as input (turned off).

### Command <a id="command"></a>

Enter the command to execute on the host machine. Refer to sections below for examples of running [multiple commands](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand#run-multiple-commands) and [cURL commands](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand#run-curl-command).

#### Run multiple commands <a id="run-multiple-commands"></a>

Use one of two methods to run multiple commands in one Execute Command node:

- Enter each command on one line separated by `&&`. For example, you can combine the change directory (cd) command with the list (ls) command using `&&`.

  ```bash
  cd bin && ls
  ```
- Enter each command on a separate line. For example, you can write the list (ls) command on a new line after the change directory (cd) command.

  ```bash
  cd bin
  ls
  ```

#### Run cURL command <a id="run-curl-command"></a>

You can also use the [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) node to make a cURL request.

If you want to run the curl command in the Execute Command node, you will have to build a Docker image based on the existing n8n image. The default n8n Docker image uses Alpine Linux.

> **Info**
> **`apk` isn't included in the n8n image**
>
> The `apk` package manager was removed from the official n8n Docker image. To install a package like `curl`, you need to restore `apk` from a fresh Alpine base image first, as shown below.

1. Create a file named `Dockerfile`.
2. Add the below code snippet to the Dockerfile.

```shell
   FROM n8nio/n8n
   USER root

   # Restore the apk package manager (removed from the base image)
   COPY --from=alpine:3.22 /sbin/apk /sbin/apk
   COPY --from=alpine:3.22 /lib/apk /lib/apk
   COPY --from=alpine:3.22 /usr/lib/libapk* /usr/lib/

   RUN apk add --no-cache curl
   USER node
```

3. In the same folder, execute the command below to build the Docker image.

```shell
   docker build -t n8n-curl .
```

4. Replace the Docker image you used before. For example, replace `n8nio/n8n` with `n8n-curl`.
5. Run the newly created Docker image. You'll now be able to execute curl using the Execute Command Node.

## Templates and examples <a id="templates-and-examples"></a>

[Browse n8n-nodes-base.executecommand integration templates](https://n8n.io/integrations/execute-command) or [search all templates](https://n8n.io/workflows/)

## Common issues <a id="common-issues"></a>

For common questions or issues and suggested solutions, refer to [Common Issues](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand/common-issues).
