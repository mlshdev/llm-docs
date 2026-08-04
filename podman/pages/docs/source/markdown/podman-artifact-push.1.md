> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-artifact-push.1.md.in](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-artifact-push.1.md.in)

# podman-artifact-push

## NAME

podman-artifact-push - Push an OCI artifact from local storage to an image registry

## SYNOPSIS

**podman artifact push** \[*options*] *image*

## DESCRIPTION

Pushes an artifact from the local artifact store to an image registry.

```
# Push artifact to a container registry
$ podman artifact push quay.io/artifact/foobar1:latest
```

## OPTIONS

#### **--authfile**=*path*

Path of the authentication file. Default is `${XDG_RUNTIME_DIR}/containers/auth.json` on Linux, and `$HOME/.config/containers/auth.json` on Windows/macOS.
The file is created by **[podman login](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-login.1.md.in)**. If the authorization state is not found there, `$HOME/.docker/config.json` is checked, which is set using **docker login**.

Note: There is also the option to override the default path of the authentication file by setting the `REGISTRY_AUTH_FILE` environment variable. This can be done with **export REGISTRY\_AUTH\_FILE=*path***.

#### **--cert-dir**=*path*

Use certificates at *path* (\*.crt, \*.cert, \*.key) to connect to the registry. (Default: /etc/containers/certs.d)
For details, see **[containers-certs.d(5)](https://github.com/containers/image/blob/main/docs/containers-certs.d.5.md)**.
(This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)

#### **--creds**=*\[username\[:password]]*

The \[username\[:password]] to use to authenticate with the registry, if required.
If one or both values are not supplied, a command line prompt appears and the
value can be entered. The password is entered without echo.

Note that the specified credentials are only used to authenticate against
target registries.  They are not used for mirrors or when the registry gets
rewritten (see `containers-registries.conf(5)`); to authenticate against those
consider using a `containers-auth.json(5)` file.

#### **--digestfile**=*Digestfile*

After copying the image, write the digest of the resulting image to the file.

#### **--quiet**, **-q**

Suppress informational output messages (which indicate which instruction is being processed, and the progress of the instruction).  Print only the final error message or successful completion information, such as the image or container ID.

#### **--retry**=*attempts*

Number of times to retry pulling or pushing images between the registry and
local storage in case of failure. Default is **3**.

#### **--retry-delay**=*duration*

Duration of delay between retry attempts when pulling or pushing images between
the registry and local storage in case of failure. The default is to start at two seconds and then exponentially back off. The delay is used when this value is set, and no exponential back off occurs.

#### **--sign-by**=*key*

Add a “simple signing” signature at the destination using the specified key. (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)

#### **--sign-by-sigstore**=*param-file*

Add a sigstore signature based on further options specified in a container's sigstore signing parameter file *param-file*.
See containers-sigstore-signing-params.yaml(5) for details about the file format.

#### **--sign-by-sigstore-private-key**=*path*

Add a sigstore signature at the destination using a private key at the specified path. (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)

#### **--sign-by-sq-fingerprint**=*fingerprint*

Add a “simple signing” signature using a Sequoia-PGP key with the specified fingerprint.
(This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)

#### **--sign-passphrase-file**=*path*

If signing the image (using **--sign-by**, **sign-by-sq-fingerprint** or **--sign-by-sigstore-private-key**), read the passphrase to use from the specified path.

#### **--tls-verify**

Require HTTPS and verify certificates when contacting registries (default: **true**).
If explicitly set to **true**, TLS verification is used.
If set to **false**, TLS verification is not used.
If not specified, TLS verification is used unless the target registry
is listed as an insecure registry in **[containers-registries.conf(5)](https://github.com/containers/image/blob/main/docs/containers-registries.conf.5.md)**

## EXAMPLE

Push the specified image to a container registry:

```
$ podman artifact push quay.io/baude/artifact:single
Getting image source signatures
Copying blob 3ddc0a3cdb61 done   |
Copying config 44136fa355 done   |
Writing manifest to image destination
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**, **[podman-artifact(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-artifact.1.md)**, **[podman-pull(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-pull.1.md.in)**, **[podman-login(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-login.1.md.in)**, **[containers-certs.d(5)](https://github.com/containers/image/blob/main/docs/containers-certs.d.5.md)**

## HISTORY

Jan 2025, Originally compiled by Brent Baude <bbaude@redhat.com>
