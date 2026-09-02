> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-system-hyperv-prep.1.md](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-system-hyperv-prep.1.md)

# podman-system-hyperv-prep

## NAME

podman-system-hyperv-prep - A Windows administrator command to prepare a host that is going to run Hyper-V based Podman machines

## SYNOPSIS

**podman system hyperv-prep** \[*options*]

## DESCRIPTION

Prepare a Windows host to run Hyper-V based Podman machines by creating the
required registry entries in HKEY\_LOCAL\_MACHINE for Hyper-V VSock communication
and adding the current user to the Hyper-V Administrators group.

The registry entries are marked to persist even when all machines are removed,
and the group membership allows the user to manage Hyper-V virtual machines.
Together, these avoid the need for administrator privileges during normal machine
operations.

This command requires administrator privileges and is only available on Windows.
The **--status** option can be used without administrator privileges.

## OPTIONS

#### **--mounts**=*number*

Number of VSock entries for mount purpose. Every mounted host folder of a running machine needs a dedicated VSock. There should be enough VSock to satisfy the needs of running Podman machines on the host. The default is **2**.

#### **--force**, **-f**

Skip confirmation prompts during reset. Only valid with **--reset**.

#### **--reset**

Remove all Podman VSock registry entries and remove the current user from the
Hyper-V Administrators group. Prompts for confirmation before each action unless
**--force** is specified.

#### **--status**

Show the list of VSock registry entries and the current user's Hyper-V
Administrators group membership status.

## EXAMPLE

Create the required registry entries and add the current user to the Hyper-V
Administrators group:

```
podman system hyperv-prep
```

Show existing registry entries and group membership status:

```
podman system hyperv-prep --status
```

Remove all Podman VSock registry entries and the current user from the Hyper-V
Administrators group (with confirmation prompts):

```
podman system hyperv-prep --reset
```

Reset without confirmation prompts:

```
podman system hyperv-prep --reset --force
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-system(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-system.1.md)**

## HISTORY

April 2026
