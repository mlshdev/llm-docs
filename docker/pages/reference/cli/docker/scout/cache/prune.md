> Commit-pinned source for Docker main: [data/cli/scout/docker_scout_cache_prune.yaml](https://github.com/docker/docs/blob/2028912e0e64869c14702deec64ba2ef5cc10441/data/cli/scout/docker_scout_cache_prune.yaml)

# docker scout cache prune

Remove temporary or cached data

**Usage:** `docker scout cache prune`

## Description

The `docker scout cache prune` command removes temporary data and SBOM cache.

By default, `docker scout cache prune` only deletes temporary data.
To delete temporary data and clear the SBOM cache, use the `--sboms` flag.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--force` |  | Do not prompt for confirmation |
| `--sboms` |  | Prune cached SBOMs |

## Examples

### Delete temporary data

```console
$ docker scout cache prune
? Are you sure to delete all temporary data? Yes
    ✓ temporary data deleted
```

### Delete temporary and cache data

```console
$ docker scout cache prune --sboms
? Are you sure to delete all temporary data and all cached SBOMs? Yes
    ✓ temporary data deleted
    ✓ cached SBOMs deleted
```
