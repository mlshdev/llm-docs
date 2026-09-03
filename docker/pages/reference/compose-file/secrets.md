> Commit-pinned source for Docker main: [content/reference/compose-file/secrets.md](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/content/reference/compose-file/secrets.md)

# Secrets

Secrets are a flavor of [Configs](https://docs.docker.com/reference/compose-file/configs/) focusing on sensitive data, with specific constraint for this usage.

Services can only access secrets when explicitly granted by a [`secrets` attribute](https://docs.docker.com/reference/compose-file/services/#secrets) within the `services` top-level element.

The top-level `secrets` declaration defines or references sensitive data that is granted to the services in your Compose
application. The source of the secret is either `file` or `environment`.

- `file`: The secret is created with the contents of the file at the specified path.
- `environment`: The secret is created with the value of an environment variable on the host. This is only supported by Docker Compose. It is not supported when deploying with [`docker stack deploy`](https://docs.docker.com/engine/swarm/stack-deploy/).

## Example 1

`server-certificate` secret is created as `<project_name>_server-certificate` when the application is deployed,
by registering content of the `server.cert` as a platform secret.

```yml
secrets:
  server-certificate:
    file: ./server.cert
```

## Example 2

`token` secret is created as `<project_name>_token` when the application is deployed,
by registering the content of the `OAUTH_TOKEN` environment variable as a platform secret.

```yml
secrets:
  token:
    environment: "OAUTH_TOKEN"
```

> \[!NOTE]
> `environment` secrets are not supported when deploying with `docker stack deploy`.
> Use `file` or `external` as the secret source instead.

## Additional resources

For more information, see [How to use secrets in Compose](https://docs.docker.com/compose/how-tos/use-secrets/).
