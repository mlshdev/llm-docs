> Pinned source for Runpod main: [runpodctl/reference/runpodctl-ssh.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/runpodctl/reference/runpodctl-ssh.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-ssh

# ssh

Use runpodctl to manage SSH keys and retrieve the connection command and key details required to access a Runpod Pod.

Manage SSH keys and get SSH connection information for Pods.

```bash Command
runpodctl ssh <subcommand> [flags]
```

## Subcommands

### Get SSH connection info

Get SSH connection details for a Pod. This returns the SSH command and key information, but does not initiate an interactive session:

```bash
runpodctl ssh info <pod-id>
```

#### Info flags

**--verbose (type: bool)**

Include Pod ID and name in output. Shorthand: `-v`.

> **Note**
>
> The `ssh info` command returns connection details that you can use to connect via SSH manually. It does not start an interactive SSH session.
>
> To connect to your Pod, use the SSH command provided in the output:
>
> ```bash
> ssh user@host -p <port> -i <key-path>
> ```

### List SSH keys

List all SSH keys associated with your account:

```bash
runpodctl ssh list-keys
```

### Add an SSH key

Add a new SSH key to your account:

```bash
# Add a key from a file
runpodctl ssh add-key --key-file ~/.ssh/id_ed25519.pub

# Add a key directly
runpodctl ssh add-key --key "ssh-ed25519 AAAA..."
```

#### Add-key flags

**--key (type: string)**

The public key string to add.

**--key-file (type: string)**

Path to a file containing the public key.

### Remove an SSH key

Remove an SSH key from your account by name or fingerprint:

```bash
# Remove a key by name
runpodctl ssh remove-key --name my-laptop

# Remove a key by fingerprint
runpodctl ssh remove-key --fingerprint SHA256:abcd1234...
```

You must provide either `--name` or `--fingerprint`. If multiple keys share the same name, use `--fingerprint` instead.

#### Remove-key flags

**--name (type: string)**

Name of the key to remove.

**--fingerprint (type: string)**

Fingerprint of the key to remove. Use this when multiple keys have the same name.

## Related commands

- [`runpodctl pod get`](https://docs.runpod.io/runpodctl/reference/runpodctl-pod)
- [`runpodctl doctor`](https://docs.runpod.io/runpodctl/reference/runpodctl-doctor)
