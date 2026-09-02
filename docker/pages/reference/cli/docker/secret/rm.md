> Commit-pinned source for Docker main: [data/cli/engine/docker_secret_rm.yaml](https://github.com/docker/docs/blob/2028912e0e64869c14702deec64ba2ef5cc10441/data/cli/engine/docker_secret_rm.yaml)

# docker secret rm

Remove one or more secrets

**Usage:** `docker secret rm SECRET [SECRET...]`

**Aliases:** docker secret rm, docker secret remove

## Description

Removes the specified secrets from the swarm.

For detailed information about using secrets, refer to [manage sensitive data with Docker secrets](/engine/swarm/secrets/).

> [!NOTE]
> This is a cluster management command, and must be executed on a swarm
> manager node. To learn about managers and workers, refer to the
> [Swarm mode section](/engine/swarm/) in the
> documentation.

## Examples

This example removes a secret:

```console
$ docker secret rm secret.json
sapth4csdo5b6wz2p5uimh5xg
```

> [!WARNING]
> Unlike `docker rm`, this command does not ask for confirmation before removing
> a secret.
