> Commit-pinned source for Docker main: [content/manuals/build/builders/drivers/docker.md](https://github.com/docker/docs/blob/88c23a1ca40fdf176064bef4dbb7b2495debebb3/content/manuals/build/builders/drivers/docker.md)

The Buildx Docker driver is the default driver. It uses the BuildKit server
components built directly into the Docker Engine. The Docker driver requires no
configuration.

Unlike the other drivers, builders using the Docker driver can't be manually
created. They're only created automatically from the Docker context.

Images built with the Docker driver are automatically loaded to the local image
store.

## Synopsis

```console
# The Docker driver is used by buildx by default
docker buildx build .
```

It's not possible to configure which BuildKit version to use, or to pass any
additional BuildKit parameters to a builder using the Docker driver. The
BuildKit version and parameters are preset by the Docker Engine internally.

If you need additional configuration and flexibility, consider using the
[Docker container driver](https://docs.docker.com/build/builders/drivers/docker-container/).

## Further reading

For more information on the Docker driver, see the
[buildx reference](https://docs.docker.com/reference/cli/docker/buildx/create/#driver).
