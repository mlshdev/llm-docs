> Commit-pinned source for Docker main: [data/cli/buildx/docker_buildx_dial-stdio.yaml](https://github.com/docker/docs/blob/2028912e0e64869c14702deec64ba2ef5cc10441/data/cli/buildx/docker_buildx_dial-stdio.yaml)

# docker buildx dial-stdio

Proxy current stdio streams to builder instance

**Usage:** `docker buildx dial-stdio`

## Description

dial-stdio uses the stdin and stdout streams of the command to proxy to the
configured builder instance. It is not intended to be used by humans, but
rather by other tools that want to interact with the builder instance via
BuildKit API.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--platform` |  | Target platform: this is used for node selection |
| `--progress` | `none` | Set type of progress output (`auto`, `plain`, `rawjson`, `tty`). Use plain to show container output |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--builder` |  | Override the configured builder instance |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

Example go program that uses the dial-stdio command wire up a buildkit client.
This is, for example, use only and may not be suitable for production use.

```go
client.New(ctx, "", client.WithContextDialer(func(context.Context, string) (net.Conn, error) {
    c1, c2 := net.Pipe()
    cmd := exec.Command("docker", "buildx", "dial-stdio")
    cmd.Stdin = c1
    cmd.Stdout = c1

    if err := cmd.Start(); err != nil {
        c1.Close()
        c2.Close()
        return nil, err
    }

    go func() {
        cmd.Wait()
        c2.Close()
    }()

    return c2
}))
```
