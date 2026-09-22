> Pinned source for Docker main: [data/cli/engine/docker_trust_key_load.yaml](https://github.com/docker/docs/blob/7d6c8bf81ab88fc6f5c4893b6259864d29de574c/data/cli/engine/docker_trust_key_load.yaml)

# docker trust key load

Load a private key file for signing

**Usage:** `docker trust key load [OPTIONS] KEYFILE`

## Description

`docker trust key load` adds private keys to the local Docker trust keystore.

To add a signer to a repository use `docker trust signer add`.

## Options

| Option   | Default  | Description             |
| -------- | -------- | ----------------------- |
| `--name` | `signer` | Name for the loaded key |

## Examples

````console
### Load a single private key

For a private key `alice.pem` with permissions `-rw-------`

```console
$ docker trust key load alice.pem

Loading key from "alice.pem"...
Enter passphrase for new signer key with ID f8097df:
Repeat passphrase for new signer key with ID f8097df:
Successfully imported key from alice.pem
````

To specify a name use the `--name` flag:

```console
$ docker trust key load --name alice-key alice.pem

Loading key from "alice.pem"...
Enter passphrase for new alice-key key with ID f8097df:
Repeat passphrase for new alice-key key with ID f8097df:
Successfully imported key from alice.pem
```

```
```
