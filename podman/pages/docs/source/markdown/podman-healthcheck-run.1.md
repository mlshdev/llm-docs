> Release-pinned source for Podman v6.1.0: [docs/source/markdown/podman-healthcheck-run.1.md](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-healthcheck-run.1.md)

# podman-healthcheck-run

## NAME

podman-healthcheck-run - Run a container healthcheck

## SYNOPSIS

**podman healthcheck run** \[*options*] *container*

## DESCRIPTION

Runs the healthcheck command defined in a running container manually.  The resulting error codes are defined
as follows:

- 0 = healthcheck command succeeded
- 1 = healthcheck command failed
- 125 = an error has occurred

Possible errors that can occur during the healthcheck are:

- unable to find the container
- container has no defined healthcheck
- container is not running

## OPTIONS

#### **--help**

Print usage statement

#### **--ignore-result**

Exit with code 0 regardless of the healthcheck result and if the container is
still in the startup period. Other errors will not be ignored.

## EXAMPLES

Run healthchecks in specified container:

```
$ podman healthcheck run mywebapp
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman.1.md)**, **[podman-healthcheck(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-healthcheck.1.md)**, **[podman-run(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-run.1.md.in)**, **[podman-create(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-create.1.md.in)**, **[podman-inspect(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-inspect.1.md.in)**

## HISTORY

Feb 2019, Originally compiled by Brent Baude <bbaude@redhat.com>
