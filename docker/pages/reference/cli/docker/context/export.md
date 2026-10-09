> Pinned source for Docker main: [data/cli/engine/docker_context_export.yaml](https://github.com/docker/docs/blob/18bbfeeb249da011f359d558dba84c4b6dc3a335/data/cli/engine/docker_context_export.yaml)

# docker context export

Export a context to a tar archive FILE or a tar stream on STDOUT.

**Usage:** `docker context export [OPTIONS] CONTEXT [FILE|-]`

## Description

Exports a context to a file that can then be used with `docker context import`.

The default output filename is `<CONTEXT>.dockercontext`. To export to `STDOUT`,
use `-` as filename, for example:

```console
$ docker context export my-context -
```
