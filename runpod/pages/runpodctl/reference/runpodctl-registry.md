> Pinned source for Runpod main: [runpodctl/reference/runpodctl-registry.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/runpodctl/reference/runpodctl-registry.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-registry

# registry

Use runpodctl to list, inspect, create, update, and remove credentials for private container registries used by Runpod workloads.

Manage container registry authentications for private Docker images.

```bash Command
runpodctl registry <subcommand> [flags]
```

## Alias

You can use `reg` as a shorthand for `registry`:

```bash
runpodctl reg list
```

## Subcommands

### List registry authentications

List all your container registry authentications:

```bash
runpodctl registry list
```

### Get registry authentication details

Get details about a specific registry authentication:

```bash
runpodctl registry get <registry-id>
```

### Create a registry authentication

Create credentials for a private container registry. Supply the password in one of three ways:

- Pass it directly with the `--password` flag.
- Pipe or redirect it into `--password-stdin`.
- Omit both flags to enter it at an interactive prompt.

Pass the password directly with `--password`:

```bash
runpodctl registry create --name "docker-hub" --username "myuser" --password "mypassword"
```

Omit the password flag to have the command prompt for the password without echoing it:

```bash
runpodctl registry create --name "docker-hub" --username "myuser"
```

Pipe a token held in an environment variable into `--password-stdin`:

```bash
printenv REGISTRY_TOKEN | runpodctl registry create --name "docker-hub" --username "myuser" --password-stdin
```

Redirect a token from a file into `--password-stdin`:

```bash
runpodctl registry create --name "docker-hub" --username "myuser" --password-stdin < token.txt
```

For Google Artifact Registry or gcr.io, set `--username` to the literal `_json_key` and feed the multi-line service-account JSON key file through `--password-stdin`. The command supports multi-line passwords and strips only a single trailing newline added by the pipe or redirection.

```bash
runpodctl registry create --name "gcr" --username "_json_key" --password-stdin < service-account.json
```

> **Tip**
>
> Prefer `--password-stdin` or the interactive prompt over `--password`. A value passed to `--password` is visible in the process table and your shell history.

#### Create flags

**--name (type: string; required)**

Name for this registry authentication.

**--username (type: string; required)**

Registry username.

**--password (type: string)**

Registry password or access token. Cannot be used with `--password-stdin`. If neither `--password` nor `--password-stdin` is given, the command prompts for the password when run in an interactive terminal, or exits with an error otherwise.

**--password-stdin (type: bool)**

Read the registry password from standard input (pipe, heredoc, or file redirection). Supports multi-line values. Cannot be used with `--password`.

### Delete a registry authentication

Delete a registry authentication:

```bash
runpodctl registry delete <registry-id>
```

## Related commands

- [`runpodctl template create`](https://docs.runpod.io/runpodctl/reference/runpodctl-template)
- [`runpodctl pod create`](https://docs.runpod.io/runpodctl/reference/runpodctl-pod)
