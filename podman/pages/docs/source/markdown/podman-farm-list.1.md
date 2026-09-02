> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-farm-list.1.md](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-farm-list.1.md)

# podman-farm-list

## NAME

podman-farm-list - List the existing farms

## SYNOPSIS

**podman farm list** \[*options*]

**podman farm ls** \[*options*]

## DESCRIPTION

List all the existing farms.

## OPTIONS

#### **--format**=*format*

Change the default output format.  This can be of a supported type like 'json' or a Go template.
Valid placeholders for the Go template listed below:

| **Placeholder** | **Description**                                                       |
| --------------- | --------------------------------------------------------------------- |
| .Connections    | List of all system connections in the farm                            |
| .Default        | Indicates whether farm is the default                                 |
| .Name           | Farm name                                                             |
| .ReadWrite      | Indicates if this farm can be modified using the podman farm commands |

## EXAMPLE

List all farms:

```
$ podman farm list
Name        Connections  Default     ReadWrite
farm1       [f38 f37]    false       true
farm2       [f37]        true        true
```

Show farms in JSON format:

```
$ podman farm list --format json
[
  {
    "Name": "farm1",
    "Connections": [
      "f38",
      "f37"
    ],
    "Default": false,
    "ReadWrite": true
  },
  {
    "Name": "farm2",
    "Connections": [
      "f37"
    ],
    "Default": true,
    "ReadWrite": true
  }
]
```

Show only farm names:

```
$ podman farm list --format "{{.Name}}"
farm1
farm2
```

Show detailed farm information:

```
$ podman farm list --format "Farm: {{.Name}} (Default: {{.Default}}, ReadWrite: {{.ReadWrite}})\nConnections: {{.Connections}}"
Farm: farm1 (Default: false, ReadWrite: true)
Connections: [f38 f37]
Farm: farm2 (Default: true, ReadWrite: true)
Connections: [f37]
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-farm(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-farm.1.md)**

## HISTORY

July 2023, Originally compiled by Urvashi Mohnani (umohnani at redhat dot com)
