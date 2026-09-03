> Commit-pinned source for Docker main: [data/cli/secrets/docker_pass_rm.yaml](https://github.com/docker/docs/blob/88c23a1ca40fdf176064bef4dbb7b2495debebb3/data/cli/secrets/docker_pass_rm.yaml)

# docker pass rm

Remove secrets from local keychain.

**Usage:** `docker pass rm name1 name2 ... [flags]`

## Description

Removes one or more named secrets from the local OS keychain. Use `--all` to remove every stored secret at once.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all` |  | Remove all secrets |

## Examples

### Remove a specific secret:

```console
$ docker pass rm GH_TOKEN
```

### Remove multiple secrets:

```console
$ docker pass rm GH_TOKEN NPM_TOKEN
```

### Remove all secrets:

```console
$ docker pass rm --all
```
