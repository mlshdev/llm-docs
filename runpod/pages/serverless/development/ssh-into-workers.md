> Pinned source for Runpod main: [serverless/development/ssh-into-workers.mdx](https://github.com/runpod/docs/blob/1c896ad086bccb72275ab0e4211f79ff1dda0041/serverless/development/ssh-into-workers.mdx)
> Canonical documentation: https://docs.runpod.io/serverless/development/ssh-into-workers

# Connect to workers with SSH

SSH into running workers for debugging and troubleshooting. Review setup, configuration, deployment, and operations guidance for Runpod Serverless.

You can connect directly to running workers via SSH for debugging and troubleshooting. By connecting to a worker, you can inspect logs, file systems, and environment variables in real-time.

## Set up SSH access

Before you can connect to a worker, [add your SSH public key to the Credentials page](https://docs.runpod.io/get-started/credentials#ssh-public-keys).

## SSH into a worker

1. Before you can connect, you need at least one worker running. To guarantee a worker is available:

   1. Navigate to the [Serverless section](https://www.console.runpod.io/serverless) of the Runpod console.
   2. Select your endpoint from the list.
   3. Go to the **Configuration** tab.
   4. Under **Worker configuration**, set **Active workers** to 1 or more.
   5. Click **Save** to apply the changes.

   This ensures at least one worker remains running at all times, and allowing you to SSH in without your worker being automatically scaled down.
2. Select the **Workers** tab in your endpoint's details page to view all running workers for this endpoint.

   Here you'll see a list of all workers associated with your endpoint. Find a worker with a status of **Running** and click on it to open its detail pane.
3. ![](https://raw.githubusercontent.com/runpod/docs/1c896ad086bccb72275ab0e4211f79ff1dda0041/images/ssh-serverless-worker.png)

   In the worker's detail pane:

   1. Select the **Connect** tab.
   2. Under the **SSH** section, copy the provided SSH command.

   The command will look similar to this:

   ```bash
   ssh root@worker-id-xyz -i ~/.ssh/id_ed25519
   ```

   > **Note**
   >
   > If you saved your SSH key to a custom location, update the path after the `-i` flag to match your key's location.
4. Open your local terminal and paste the SSH command you copied. Press Enter to connect to the worker.

   Once connected, you can:

   - Inspect logs and debug output.
   - Check environment variables with `env`.
   - Verify file systems and mounted volumes.
   - Test your worker's behavior in the production environment.
   - Run diagnostic commands to troubleshoot issues.

## Troubleshooting SSH key authentication

If you're asked for a password when connecting to your worker via SSH, this means something is not set up correctly. Runpod does not require a password for SSH connections, as authentication is handled entirely through your SSH key pair.

Here are some common reasons why this might happen:

- If you copy and paste the key *fingerprint* (which starts with `SHA256:`) into the [Credentials page](https://console.runpod.io/user/credentials) instead of the actual public key (the contents of your `id_ed25519.pub` file), authentication will fail.
- If you omit the encryption type at the beginning of your public key when pasting it (for example, leaving out `ssh-ed25519`), the key will not be recognized.
- If you add multiple public keys but do not separate them with a newline, only the first key will work. Each key must be on its own line.
- If you specify the wrong file path to your private key when connecting, SSH will not be able to find the correct key (`No such file or directory` error).
- If your private key file is accessible by other users on your machine, SSH may refuse to use it for security reasons (`bad permissions` error).
- If your SSH configuration file (`~/.ssh/config`) points to the wrong private key, you will also be prompted for a password. Make sure the `IdentityFile` entry in your config file matches the private key that corresponds to the public key you added to your Runpod account.
