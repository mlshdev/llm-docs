> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-secret-ls.1.md.in](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-secret-ls.1.md.in)

# podman-secret-ls

## NAME

podman-secret-ls - List all available secrets

## SYNOPSIS

**podman secret ls** \[*options*]

## DESCRIPTION

Lists all the secrets that exist. The output can be formatted to a Go template using the **--format** option.

## OPTIONS

#### **--filter**, **-f**=*filter=value*

Filter output based on conditions given.
Multiple filters can be given with multiple uses of the --filter option.

Valid filters are listed below:

| **Filter** | **Description**                     |
| ---------- | ----------------------------------- |
| name       | \[Name] Secret name (accepts regex) |
| id         | \[ID] Full or partial secret ID     |

#### **--format**=*format*

Format secret output using Go template.

Valid placeholders for the Go template are listed below:

| **Placeholder** | **Description**                                                   |
| --------------- | ----------------------------------------------------------------- |
| .CreatedAt      | When secret was created (relative timestamp, human-readable)      |
| .Driver         | Driver name (string)                                              |
| .ID             | ID of secret                                                      |
| .Name           | Name of secret                                                    |
| .UpdatedAt      | When secret was last updated (relative timestamp, human-readable) |

#### **--noheading**, **-n**

Omit the table headings from the listing.

#### **--quiet**, **-q**

Print secret IDs only.

## EXAMPLES

List all secrets.

```
$ podman secret ls
```

List the name field of all secrets.

```
$ podman secret ls --format "{{.Name}}"
```

List all secrets whose name includes the specified string.

```
$ podman secret ls --filter name=confidential
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-secret(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-secret.1.md)**

## HISTORY

January 2021, Originally compiled by Ashley Cui <acui@redhat.com>
