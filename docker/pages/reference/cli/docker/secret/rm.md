> Pinned source for Docker main: [data/cli/engine/docker_secret_rm.yaml](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/data/cli/engine/docker_secret_rm.yaml)

# docker secret rm

Remove one or more secrets

**Usage:** `docker secret rm SECRET [SECRET...]`

**Aliases:** docker secret rm, docker secret remove

## Description

Removes the specified secrets from the swarm.

For detailed information about using secrets, refer to [manage sensitive data with Docker secrets](https://docs.docker.com/engine/swarm/secrets/).

> \[!NOTE]
> This is a cluster management command, and must be executed on a swarm
> manager node. To learn about managers and workers, refer to the
> [Swarm mode section](https://docs.docker.com/engine/swarm/) in the
> documentation.

## Examples

````console
This example removes a secret:

```console
$ docker secret rm secret.json
sapth4csdo5b6wz2p5uimh5xg
````

> \[!WARNING]
> Unlike `docker rm`, this command does not ask for confirmation before removing
> a secret.
> { .warning }

```
```
