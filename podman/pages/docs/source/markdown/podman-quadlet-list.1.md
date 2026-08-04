> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-quadlet-list.1.md.in](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-quadlet-list.1.md.in)

# podman-quadlet-list

## NAME

podman-quadlet-list - List installed quadlets (alias ls)

## SYNOPSIS

**podman quadlet list** \[*options*]

## DESCRIPTION

List all Quadlets configured for the current user.

## OPTIONS

#### **--filter**, **-f**=*filter*

Filter output based on conditions give.

If there is more than one filter, the `--filter` option should be passed multiple times: **--filter** *name=test* **--filter** *status=active/running*.

Supported filters:

| Filter | Description                                                                                                                                       |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| name   | Filter by quadlet name                                                                                                                            |
| status | Filter by quadlet status. Valid values: `Not loaded`, `active/running`, `inactive/dead`, `failed/failed`, `activating/start`, `deactivating/stop` |
| pod    | Filter by the `Pod=` value (displays only for .container units)                                                                                   |

#### **--format**=*format*

Pretty-print output to JSON or using a Go template (default "{{range .}}{{.Name}}\t{{.UnitName}}\t{{.Path}}\t{{.Status}}\t{{.App}}\t{{.Pod}}\n{{end -}}")

Print results with a Go template.

| **Placeholder** | **Description**                                                  |
| --------------- | ---------------------------------------------------------------- |
| .App            | Name of application if Quadlet is part of an app                 |
| .Name           | Name of the Quadlet file                                         |
| .Path           | Quadlet file path on disk                                        |
| .Pod            | Pod quadlet file from `Pod=` in `[Container]` (empty if not set) |
| .Status         | Quadlet status corresponding to systemd unit                     |
| .UnitName       | Systemd unit name corresponding to quadlet                       |

#### **--noheading**, **-n**

Omit the table headings from the listing.

## EXAMPLES

Simple list command

```
$ podman quadlet list
NAME                            UNIT NAME                     PATH ON DISK                                                          STATUS      APPLICATION  POD
test-service-quadlet.container  test-service-quadlet.service  /home/user/.config/containers/systemd/test-service-quadlet.container  Not loaded
sample-quadlet.container        sample-quadlet.service        /home/user/.config/containers/systemd/sample-quadlet.container        Not loaded               sample-quadlet.pod
sample-quadlet.pod              sample-quadlet-pod.service    /home/user/.config/containers/systemd/sample-quadlet.pod              Not loaded
```

Filter list by name.

```
$ podman quadlet list --filter 'name=test*'
NAME                             UNIT NAME                      PATH ON DISK                                                           STATUS      APPLICATION  POD
test-service-quadlet.container   test-service-quadlet.service   /home/user/.config/containers/systemd/test-service-quadlet.container   Not loaded
test-with-pod.container          test-with-pod.service          /home/user/.config/containers/systemd/test-with-pod.container          Not loaded               mypod.pod
```

Filter list by pod.

```console
$ podman quadlet list --filter 'pod=mypod'
NAME                             UNIT NAME                      PATH ON DISK                                                           STATUS      APPLICATION  POD
test-with-pod-1.container        test-with-pod-1.service        /home/user/.config/containers/systemd/test-with-pod-1.container        Not loaded               mypod.pod
test-with-pod-2.container        test-with-pod-2.service        /home/user/.config/containers/systemd/test-with-pod-2.container        Not loaded               mypod.pod

Format list output for a specific field.
```

```console
$ podman quadlet list --format '{{ .UnitName }}'
test-service-quadlet.service
sample-quadlet.service
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**, **[podman-quadlet(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-quadlet.1.md)**, **[podman-systemd.unit(5)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-systemd.unit.5.md)**
