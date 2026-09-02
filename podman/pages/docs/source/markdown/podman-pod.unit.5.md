> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-pod.unit.5.md.in](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-pod.unit.5.md.in)

# podman-pod.unit

# NAME

podman-pod.unit - systemd unit files for managing Podman pods using Quadlet

# SYNOPSIS

*name*.pod

# DESCRIPTION

Pod units are named with a `.pod` extension and contain a `[Pod]` section describing
the pod that is created and run as a service. The resulting service file contains a line like
`ExecStartPre=podman pod create …`, and most of the keys in this section control the command-line
options passed to Podman.

By default, the Podman pod has the same name as the unit, but with a `systemd-` prefix, i.e.
a `$name.pod` file creates a `$name-pod.service` unit and a `systemd-$name` Podman pod. The
`PodName` option allows for overriding this default name with a user-provided one.

# OPTIONS

Valid options for `[Pod]` are listed below:

| **\[Pod] options**                 | **podman pod create equivalent**     |
| ---------------------------------- | ------------------------------------ |
| AddHost=example.com:192.168.10.11  | --add-host example.com:192.168.10.11 |
| ContainersConfModule=/etc/nvd.conf | --module=/etc/nvd.conf               |
| DNS=192.168.55.1                   | --dns=192.168.55.1                   |
| DNSOption=ndots:1                  | --dns-option=ndots:1                 |
| DNSSearch=example.com              | --dns-search example.com             |
| ExitPolicy=stop                    | --exit-policy stop                   |
| GIDMap=0:10000:10                  | --gidmap=0:10000:10                  |
| GlobalArgs=--log-level=debug       | --log-level=debug                    |
| HostName=name                      | --hostname=name                      |
| IP=192.5.0.1                       | --ip 192.5.0.1                       |
| IP6=2001:db8::1                    | --ip6 2001:db8::1                    |
| Label="XYZ"                        | --label "XYZ"                        |
| Network=host                       | --network host                       |
| NetworkAlias=name                  | --network-alias name                 |
| PodmanArgs=--cpus=2                | --cpus=2                             |
| PodName=name                       | --name=name                          |
| PublishPort=8080:80                | --publish 8080:80                    |
| ServiceName=name                   | Name the systemd unit `name.service` |
| ShmSize=100m                       | --shm-size=100m                      |
| SubGIDMap=gtest                    | --subgidname=gtest                   |
| SubUIDMap=utest                    | --subuidname=utest                   |
| UIDMap=0:10000:10                  | --uidmap=0:10000:10                  |
| UserNS=keep-id:uid=200,gid=210     | --userns keep-id:uid=200,gid=210     |
| Volume=/source:/dest               | --volume /source:/dest               |

Supported keys in the `[Pod]` section are:

### `AddHost=hostname[;hostname[;...]]:ip`

Add a custom host-to-IP mapping to the container's `/etc/hosts` file.

The option takes one or multiple semicolon-separated hostnames to be mapped to
a single IPv4 or IPv6 address, separated by a colon. It can also be used to
overwrite the IP addresses of hostnames Podman adds to `/etc/hosts` by default
(also see the **--name** and **--hostname** options). This option can be
specified multiple times to add additional mappings to `/etc/hosts`. It
conflicts with the **--no-hosts** option and conflicts with *no\_hosts=true* in
`containers.conf`.

Instead of an IP address, the special flag *host-gateway* can be given. This
resolves to an IP address the container can use to connect to the host. The
IP address chosen depends on your network setup, thus there's no guarantee that
Podman can determine the *host-gateway* address automatically, which will then
cause Podman to fail with an error message. You can overwrite this IP address
using the *host\_containers\_internal\_ip* option in *containers.conf*.

The *host-gateway* address is also used by Podman to automatically add the
`host.containers.internal` and `host.docker.internal` hostnames to `/etc/hosts`.
You can prevent that by either giving the **--no-hosts** option, or by setting
*host\_containers\_internal\_ip="none"* in *containers.conf*. If no *host-gateway*
address was configured manually and Podman fails to determine the IP address
automatically, Podman will silently skip adding these internal hostnames to
`/etc/hosts`. If Podman is running in a virtual machine using `podman machine`
(this includes Mac and Windows hosts), Podman will silently skip adding the
internal hostnames to `/etc/hosts`, unless an IP address was configured
manually; the internal hostnames are resolved by the gvproxy DNS resolver
instead.

Podman will use the `/etc/hosts` file of the host as a basis by default, i.e.
any hostname present in this file will also be present in the `/etc/hosts` file
of the container. A different base file can be configured using the
*base\_hosts\_file* config in `containers.conf`.

### `ContainersConfModule=module`

Load the specified containers.conf(5) module.

This option can be listed multiple times.

### `DNS=ipaddr`

Set custom DNS servers.

This option can be used to override the DNS
configuration passed to the container. Typically this is necessary when the
host DNS configuration is invalid for the container (e.g., **127.0.0.1**). When this
is the case, the **DNS=.** flag is necessary for every run.

The special value **none** can be specified to disable creation of */etc/resolv.conf* in the container by Podman.
The */etc/resolv.conf* file in the image is then used without changes.

Note that **ipaddr** may be added directly to the container's */etc/resolv.conf*.
This is not guaranteed though.  For example, passing a custom network whose *dns\_enabled* is set to *true* to **--network** will result in */etc/resolv.conf* only referring to the aardvark-dns server.  aardvark-dns then forwards to the supplied **ipaddr** for all non-container name queries.

### `DNSOption=option`

Set custom DNS options. Invalid if using **DNSOption=**
with **Network=** that is set to **none** or **container:***id*.

### `DNSSearch=domain`

Set custom DNS search domains. Invalid if using **DNSSearch=**
with **Network=** that is set to **none** or **container:***id*.
Use **DNSSearch=.** to remove the search domain.

### `ExitPolicy=stop`

Set the exit policy of the pod when the last container exits. Default for quadlets is **stop**.

To keep the pod active, set `ExitPolicy=continue`.

### `GIDMap=[flags]container_gid:from_gid[:amount]`

Run the container in a new user namespace using the supplied GID mapping. This
option conflicts with the **UserNS=** and
**SubGIDMap=** options. This
option provides a way to map host GIDs to container GIDs in the same way as
**--uidmap** maps host UIDs to container UIDs. For details see **--uidmap**.

Note: the **GIDMap=** option cannot be
called in conjunction with the **Pod=** option as
a gidmap cannot be set on the container level when in a pod.

### `GlobalArgs=`

This key contains a list of arguments passed directly after the `podman` command in the generated
file. It can be used to access Podman features otherwise unsupported by the generator. Since the
generator is unaware of what unexpected interactions can be caused by these arguments, it is not
recommended to use this option.

The format of this is a space separated list of arguments, which can optionally be individually
escaped to allow inclusion of whitespace and other control characters.

This key can be listed multiple times.

### `HostName=name`

Set the container's hostname inside the container.

This option can only be used with a private UTS namespace `--uts=private`
(default). If `Pod=` is given and the pod shares the same UTS namespace
(default), the pod's hostname is used. The given hostname is also added to the
`/etc/hosts` file using the container's primary IP address (also see the
**AddHost=** option).

When **HostName=** is unset and the container uses a private UTS namespace (default), Podman sets the hostname to the first 12 characters of the container ID. The container name assigned with **ContainerName=** is not used unless *container\_name\_as\_hostname=true* is set in `containers.conf`.

Podman network DNS registers the container name, the short container ID (first 12 characters), and any explicitly set **--hostname** as DNS names. The default hostname matches the short ID alias. See **[podman-network(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-network.1.md)**.

### `IP=IPv4`

Specify a static IPv4 address for the container, for example **10.88.64.128**.
This option can only be used if the container is joined to only a single network - i.e.,
**Network=network-name** is used at most once -
and if the container is not joining another container's network namespace via
**Network=container:*id***.
The address must be within the network's IP address pool (default **10.88.0.0/16**).

To specify multiple static IP addresses per container, set multiple networks using
the **Network=** option with a static IP address specified for each using the `ip` mode for that option.

### `IP6=IPv6`

Specify a static IPv6 address for the container, for example **fd46:db93:aa76:ac37::10**.
This option can only be used if the container is joined to only a single network - i.e.,
**Network=network-name** is used at most once -
and if the container is not joining another container's network namespace via
**Network=container:*id***.
The address must be within the network's IPv6 address pool.

To specify multiple static IPv6 addresses per container, set multiple networks using the
**Network=** option with a static IPv6 address
specified for each using the `ip6` mode for that option.

### `Label=key=value [key=value ...]`

Add metadata to a container.

### `Network=mode`

Set the network mode for the container.

Special cases:

- If the `name` of the network ends with `.network`, a Podman network called
  `systemd-$name` is used, and the generated systemd service contains
  a dependency on the `$name-network.service`. Such a network can be automatically
  created by using a `$name.network` Quadlet file. Note: the corresponding `.network` file must exist.

- If the `name` ends with `.container`,
  the container will reuse the network stack of another container created by `$name.container`.
  The generated systemd service contains a dependency on `$name.service`. Note: the corresponding `.container` file must exist.

Valid *mode* values are:

- **bridge\[:OPTIONS,...]**: Create a network stack on the default bridge. This is the default for rootful containers. It is possible to specify these additional options:

  - **alias=***name*: Add network-scoped alias for the container.
  - **ip=***IPv4*: Specify a static IPv4 address for this container.
  - **ip6=***IPv6*: Specify a static IPv6 address for this container.
  - **mac=***MAC*: Specify a static MAC address for this container.
  - **interface\_name=***name*: Specify a name for the created network interface inside the container.
  - **host\_interface\_name=***name*: Specify a name for the created network interface outside the container.

  Any other options will be passed through to netavark without validation. This can be useful to pass arguments to netavark plugins.

  For rootless bridge networks, port forwarding uses `rootlessport` by default. Setting `rootless_port_forwarder="pasta"` in the `[network]` section of **[containers.conf(5)](https://github.com/containers/container-libs/blob/main/common/docs/containers.conf.5.md)** switches to pasta's kernel-level forwarding (via `pesto`), which preserves the original client source IP address inside the container. This option is experimental and its behavior is subject to change.

  For example, to set a static IPv4 address and a static mac address, use `--network bridge:ip=10.88.0.10,mac=44:33:22:11:00:99`.

- *\<network name or ID>***\[:OPTIONS,...]**: Connect to a user-defined network; this is the network name or ID from a network created by **[podman network create](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-network-create.1.md.in)**. It is possible to specify the same options described under the bridge mode above. Use the **--network** option multiple times to specify additional networks. \
  For backwards compatibility it is also possible to specify comma-separated networks on the first **--network** argument, however this prevents you from using the options described under the bridge section above.

- **none**: Create a network namespace for the container but do not configure network interfaces for it, thus the container has no network connectivity.

- **container:***id*: Reuse another container's network stack.

- **host**: Use the host's network namespace for the container instead of creating an isolated namespace. Warning: This gives the container full access to abstract Unix domain sockets and to TCP/UDP sockets bound to localhost. Since these mechanisms are often used to prevent access to sensitive system services, isolating them from access by external entities, use of this option may be considered a security vulnerability.

- **ns:***path*: Path to a network namespace to join.

- **private**: Create a new namespace for the container. This uses the **bridge** mode for rootful containers and **pasta** for rootless ones.

- **pasta\[:OPTIONS,...]**: use **pasta**(1) to create a user-mode networking
  stack. \
  This is the default for rootless containers and only supported in rootless mode. \
  By default, IPv4 and IPv6 addresses and routes, as well as the pod interface
  name, are copied from the host. Port forwarding preserves the original
  source IP address. Options described in pasta(1) can be specified as
  comma-separated arguments. \
  In terms of pasta(1) options, **--config-net** is given by default, in
  order to configure networking when the container is started, and
  **--no-map-gw** is also assumed by default, to avoid direct access from
  container to host using the gateway address. The latter can be overridden
  by passing **--map-gw** in the pasta-specific options (despite not being an
  actual pasta(1) option). \
  For better integration with DNS handling, **--dns-forward 169.254.1.1** is passed by default,
  and this address is added to resolv.conf(5) as first resolver. It is possible to pass
  **--dns-forward** explicitly in case a different IP address should be used. \
  To make the `host.containers.internal` /etc/hosts entry work and allow connections
  to the host, **--map-guest-addr 169.254.1.2** is passed by default. Again, it can be set
  explicitly to choose a different IP address. \
  Also, **-t none** and **-u none** are passed if, respectively, no TCP or
  UDP port forwarding from host to container is configured (via Podman's
  **--publish** or by passing the pasta **-t**/**-u** options directly),
  to disable automatic port forwarding based on bound ports. Similarly, **-T none**
  and **-U none** are given to disable the same functionality from container to
  host. \
  All options can also be set in **[containers.conf(5)](https://github.com/containers/container-libs/blob/main/common/docs/containers.conf.5.md)**;
  see the `pasta_options` key under the network section in that file. \
  Some examples:
  - **pasta:--map-gw**: Allow the container to directly reach the host using the
    gateway address.
  - **pasta:--mtu,1500**: Specify a 1500 bytes MTU for the *tap* interface in
    the container.
  - **pasta:--ipv4-only,-a,10.0.2.0,-n,24,-g,10.0.2.2,--dns-forward,10.0.2.3,-m,1500,--no-ndp,--no-dhcpv6,--no-dhcp**:
    disable IPv6, assign `10.0.2.0/24` to the `tap0` interface in the container,
    with gateway `10.0.2.3`, enable DNS forwarder reachable at `10.0.2.3`,
    set MTU to 1500 bytes, disable NDP, DHCPv6 and DHCP support.
  - **pasta:-I,tap0,--ipv4-only,-a,10.0.2.0,-n,24,-g,10.0.2.2,--dns-forward,10.0.2.3,--no-ndp,--no-dhcpv6,--no-dhcp**:
    same as above, but leave the MTU to 65520 bytes
  - **pasta:-t,auto,-u,auto,-T,auto,-U,auto**: enable automatic port forwarding
    based on observed bound ports from both host and container sides
  - **pasta:-T,5201**: enable forwarding of TCP port 5201 from container to
    host, using the loopback interface instead of the tap interface for improved
    performance

### `NetworkAlias=alias`

Add a network-scoped alias for the container, setting the alias for all networks that the container joins. To set a
name only for a specific network, use the alias option as described under the **--network** option.
If the network has DNS enabled (`podman network inspect -f {{.DNSEnabled}} <name>`),
these aliases can be used for name resolution on the given network. This option can be specified multiple times.

### `PodmanArgs=`

This key contains a list of arguments passed directly to the end of the `podman` command
in the generated file. It can be used to access Podman features otherwise unsupported
by the generator. Since the generator is unaware of what unexpected interactions can be
caused by these arguments, it is not recommended to use this option.

The format of this is a space separated list of arguments, which can optionally be individually
escaped to allow inclusion of whitespace and other control characters.

This key can be listed multiple times.

### `PodName=name`

The (optional) name of the Podman pod.
If this is not specified, the default value is the same name as the unit, but with a `systemd-` prefix,
i.e. a `$name.pod` file creates a `systemd-$name` Podman pod to avoid conflicts with user-managed pods.

Please note that pods and containers cannot have the same name.
So, if PodName is set, it must not conflict with any container.

### `PublishPort=[[hostIP:][hostPort]:]containerPort[/protocol]`

Publish a container's port, or range of ports, to the host.

Both *hostPort* and *containerPort* can be specified as a range of ports.
When specifying ranges for both, the number of container ports in the
range must match the number of host ports in the range.

If *hostIP* is `0.0.0.0`, only IPv4 addresses will be bound, if set to `[::]` only
IPv6 addresses are bound. In all other cases the exact IP address as given will be bound.
If *hostIP* is not set at all, the port is bound on all IP addresses on the host,
both v4 and v6 (if possible).

The default *hostIP* can be configured in **[containers.conf(5)](https://github.com/containers/container-libs/blob/main/common/docs/containers.conf.5.md)**
using the `default_host_ips` option under the `[network]` section.
This option accepts an array to be able to set multiple bind IP addresses.
For example setting `default_host_ips = ["127.0.0.1", "::1"]` will make the
port be published on the ipv4 and ipv6 localhost address respectively.
An explicit *hostIP* set on the command will always override the config option.

By default, Podman publishes TCP ports. To publish a UDP port instead, give
`udp` as protocol. To publish both TCP and UDP ports, set `--publish` twice,
with `tcp`, and `udp` as protocols respectively. Rootful containers can also
publish ports using the `sctp` protocol.

Host port does not have to be specified (e.g. `podman run -p 127.0.0.1::80`).
If it is not, the container port is randomly assigned a port on the host.

Use **podman port** to see the actual mapping: `podman port $CONTAINER $CONTAINERPORT`.

Port publishing is only supported for containers utilizing their own network namespace
through `bridge` networks, or the `pasta` network mode.

For rootless bridge networks, port forwarding uses `rootlessport` by default, which
is a userspace proxy that does not preserve client source IPs. Setting
`rootless_port_forwarder="pasta"` in the `[network]` section of
**[containers.conf(5)](https://github.com/containers/container-libs/blob/main/common/docs/containers.conf.5.md)**
switches to pasta's kernel-level forwarding via `pesto`, preserving the original
client IP address inside the container. This option is experimental and its
behavior is subject to change.

### `ServiceName=name`

By default, Quadlet will name the systemd service unit by appending `-pod` to the name of the Quadlet.
Setting this key overrides this behavior by instructing Quadlet to use the provided name.

Note that the name should not include the `.service` file extension.

### `ShmSize=number[unit]`

Size of */dev/shm*. A *unit* can be **b** (bytes), **k** (kibibytes), **m** (mebibytes), or **g** (gibibytes).
If the unit is omitted, the system uses bytes. If the size is omitted, the default is **64m**.
When *size* is **0**, there is no limit on the amount of memory used for IPC by the container.
This option conflicts with **--ipc=host**.

### `SubGIDMap=name`

Run the container in a new user namespace using the map with *name* in the */etc/subgid* file.
When running rootless, the user needs the necessary permissions to use the mapping. See **subgid**(5).
This flag conflicts with **UserNS=** and **GIDMap=**.
Together with **GIDMap=** it acts as if **GIDMap=** was passed with all mappings of the *name* group in */etc/subgid*.

### `SubUIDMap=name`

Run the container in a new user namespace using the map with *name* in the */etc/subuid* file.
When running rootless, the user needs the necessary permissions to use the mapping. See **subuid**(5).
This flag conflicts with **UserNS=** and **UIDMap=**.
Together with **UIDMap=** it acts as if **UIDMap=** was passed with all mappings of the *name* user in */etc/subuid*.

### `UIDMap=container_uid:from_uid[:amount]`

Run all containers in the pod in a new user namespace using the supplied mapping. This
option conflicts with the **UserNS=** and **SubUIDMap=** options. This
option provides a way to map host UIDs to container UIDs. It can be passed
several times to map different ranges.

### `UserNS=mode`

Set the user namespace mode for all the containers in a pod. It defaults to the `PODMAN_USERNS` environment variable. An empty value ("") means user namespaces are disabled.

Rootless user **UserNS=Key** mappings:

| Key     | Host User | Container User                                             |
| ------- | --------- | ---------------------------------------------------------- |
| ""      | $UID      | 0 (Default User account mapped to root user in container.) |
| host    | $UID      | 0 (Default User account mapped to root user in container.) |
| keep-id | $UID      | $UID (Map user account to same UID within container.)      |
| auto    | $UID      | nil (Host User UID is not mapped into container.)          |
| nomap   | $UID      | nil (Host User UID is not mapped into container.)          |

Valid *mode* values are:

- *auto\[:**OPTIONS,...**]*: automatically create a namespace. It is possible to specify these options to `auto`:

  - *gidmapping=**CONTAINER\_GID:HOST\_GID:SIZE* to force a GID mapping to be present in the user namespace.

  - *size=**SIZE*: to specify an explicit size for the automatic user namespace. e.g. `UserNS=auto:size=8192`. If `size` is not specified, `auto` estimates the size for the user namespace.

  - *uidmapping=**CONTAINER\_UID:HOST\_UID:SIZE* to force a UID mapping to be present in the user namespace.

- *host*: run in the user namespace of the caller. The processes running in the container have the same privileges on the host as any other process launched by the calling user (default).

- *keep-id*: creates a user namespace where the current rootless user's UID:GID are mapped to the same values in the container. This option is not allowed for containers created by the root user.

- *nomap*: creates a user namespace where the current rootless user's UID:GID are not mapped into the container. This option is not allowed for containers created by the root user.

### `Volume=[[SOURCE-VOLUME|HOST-DIR:]CONTAINER-DIR[:OPTIONS]]`

Create a bind mount. If `-v /HOST-DIR:/CONTAINER-DIR` is specified, Podman
bind mounts `/HOST-DIR` from the host into `/CONTAINER-DIR` in the Podman
container. Similarly, `-v SOURCE-VOLUME:/CONTAINER-DIR` mounts the named
volume from the host into the container. If no such named volume exists,
Podman creates one. The **nocreate** option can be used to disable this
behavior and require the volume to already exist. If no source is given,
the volume is created as an anonymously named volume with a randomly
generated name, and is removed when the container is removed via
the `--rm` flag or the `podman rm --volumes` command.

Special case:

- If `SOURCE-VOLUME` ends with `.volume`, a Podman named volume called `systemd-$name` is used as the source, and the generated systemd service contains a dependency on the `$name-volume.service`. Note that the corresponding `.volume` file must exist.

(Note when using the remote client, including Mac and Windows (excluding WSL2) machines, the volumes are mounted from the remote server, not necessarily the client machine.)

The *OPTIONS* is a comma-separated list and can be one or more of:

- **rw**|**ro**
- **z**|**Z**
- \[**O**]
- \[**U**]
- \[**no**]**copy**
- \[**no**]**dev**
- \[**no**]**exec**
- \[**no**]**suid**
- \[**r**]**bind**
- \[**r**]**shared**|\[**r**]**slave**|\[**r**]**private**\[**r**]**unbindable** <sup>\[1]</sup>
- **idmap**\[=**options**]
- **nocreate**

The `CONTAINER-DIR` must be an absolute path such as `/src/docs`. The volume
is mounted into the container at this directory.

If a volume source is specified, it must be a path on the host or the name of a
named volume. Host paths are allowed to be absolute or relative; relative paths
are resolved relative to the directory Podman is run in. If the source does not
exist, Podman returns an error. Users must pre-create the source files or
directories.

Any source that does not begin with a `.` or `/` is treated as the name of
a named volume. If a volume with that name does not exist, it is created.
Volumes created with names are not anonymous, and they are not removed by the `--rm`
option and the `podman rm --volumes` command.

The **nocreate** option can be specified for named volumes to prevent automatic
volume creation. If **nocreate** is set and the volume does not exist, Podman
returns an error instead of creating the volume. This is useful when you want
to ensure that a volume was explicitly created before use.

```
$ podman podman-pod.unit.5.md.in -v myvolume:/data:nocreate alpine
```

Specify multiple **-v** options to mount one or more volumes into a
container.

`Write Protected Volume Mounts`

Add **:ro** or **:rw** option to mount a volume in read-only or
read-write mode, respectively. By default, the volumes are mounted read-write.
See examples.

`Chowning Volume Mounts`

When a named volume is first mounted to a container, Podman
automatically adjusts the ownership of the volume's mount point during
container initialization. This chown operation occurs under the
following conditions:

- The volume was not used yet (has `NeedsChown` set to true)
- The volume is empty or has not been copied up yet
- The volume is not managed by an external volume driver
- The volume driver is not "image"

For volumes with idmapped mounts (using the `idmap` option), the
ownership change takes into account the container's user namespace
mappings, but the idmapped volume retains proper UID/GID mapping. For
volumes without idmapping, the mount point is chowned to match the
container's process user and group, mapped to the host user namespace
if user namespace remapping is enabled.

If a container is created in a new user namespace, the UID and
GID in the container may correspond to another UID and GID on the host.

The `:U` suffix tells Podman to use the correct host UID and GID based on the
UID and GID within the container, to change recursively the owner and
group of the source volume. Chowning walks the file system under the volume and
changes the UID/GID on each file. If the volume has thousands of inodes, this
process takes a long time, delaying the start of the container.

**Warning** use with caution since this modifies the host filesystem.

`Labeling Volume Mounts`

Labeling systems like SELinux require that proper labels are placed on volume
content mounted into a container. Without a label, the security system
might prevent the processes running inside the container from using the
content. By default, Podman does not change the labels set by the OS.

To change a label in the container context, add either of two suffixes
**:z** or **:Z** to the volume mount. These suffixes tell Podman to relabel file
objects on the shared volumes. The **z** option tells Podman that two or more
containers share the volume content. As a result, Podman labels the
content with a shared content label. Shared volume labels allow all containers
to read/write content. The **Z** option tells Podman to label the content with
a private unshared label. Only the current container can use a private
volume.

Note: all containers within a `pod` share the same SELinux label. This
means all containers within said pod can read/write volumes shared into the
container created with the `:Z` on any one of the containers. Relabeling walks
the file system under the volume and changes the label on each file; if the
volume has thousands of inodes, this process takes a long time, delaying the
start of the container. If the volume was previously relabeled with the
`z` option, Podman is optimized to not relabel a second time. If files are
moved into the volume, then the labels can be manually changed with the
`chcon -Rt container_file_t PATH` command.

Note: Do not relabel system files and directories. Relabeling system content
might cause other confined services on the machine to fail.  For these types
of containers we recommend disabling SELinux separation.  The option
**--security-opt label=disable** disables SELinux separation for the container.
For example if a user wanted to volume mount their entire home directory into a
container, they need to disable SELinux separation.

```
$ podman podman-pod.unit.5.md.in --security-opt label=disable -v $HOME:/home/user fedora touch /home/user/file
```

`Overlay Volume Mounts`

The `:O` flag tells Podman to mount the directory from the host as a
temporary storage using the `overlay file system`. The container processes
can modify content within the mountpoint which is stored in the
container storage in a separate directory. In overlay terms, the source
directory is the lower, and the container storage directory is the
upper. Modifications to the mount point are destroyed when the container
finishes executing, similar to a tmpfs mount point being unmounted.

For advanced users, the **overlay** option also supports custom non-volatile
**upperdir** and **workdir** for the overlay mount. Custom **upperdir** and
**workdir** can be fully managed by the users themselves, and Podman does not
remove it on lifecycle completion.
Example **:O,upperdir=/some/upper,workdir=/some/work**

Subsequent executions of the container sees the original source directory
content, any changes from previous container executions no longer exist.

One use case of the overlay mount is sharing the package cache from the
host into the container to allow speeding up builds.

Note: The `O` flag conflicts with other options listed above.

Content mounted into the container is labeled with the private label.
On SELinux systems, labels in the source directory must be readable
by the  container label. Usually containers can read/execute `container_share_t`
and can read/write `container_file_t`. If unable to change the labels on a
source volume, SELinux container separation must be disabled for the  container
to work.

Do not modify the source directory mounted into the container with an overlay mount,
it can cause unexpected failures. Only modify the directory after the container finishes running.

`Mounts propagation`

By default, bind-mounted volumes are `private`. That means any mounts done
inside the container are not visible on the host and vice versa.
One can change this behavior by specifying a volume mount propagation property.
When a volume is `shared`, mounts done under that volume inside the container
are visible on host and vice versa. Making a volume **slave**<sup>\[1]</sup>
enables only one-way mount propagation: mounts done on the host under that volume
are visible inside the container but not the other way around.

To control mount propagation property of a volume one can use the \[**r**]**shared**,
\[**r**]**slave**, \[**r**]**private** or the \[**r**]**unbindable** propagation flag.
Propagation property can be specified only for bind mounted volumes and not for
internal volumes or named volumes. For mount propagation to work the source mount
point (the mount point where source dir is mounted on) has to have the right propagation
properties. For shared volumes, the source mount point has to be shared. And for
slave volumes, the source mount point has to be either shared or slave. <sup>\[1]</sup>

To recursively mount a volume and all of its submounts into a
container, use the **rbind** option. By default the bind option is
used, and submounts of the source directory is not mounted into the
container.

Mounting the volume with a **copy** option tells podman to copy content from
the underlying destination directory onto newly created internal volumes. The
**copy** only happens on the initial creation of the volume. Content is not
copied up when the volume is subsequently used on different containers. The
**copy** option is ignored on bind mounts and has no effect.

Mounting volumes with the **nosuid** options means that SUID executables on the
volume can not be used by applications to change their privilege. By default
volumes are mounted with **nosuid**.

Mounting the volume with the **noexec** option means that no executables on the
volume can be executed within the container.

Mounting the volume with the **nodev** option means that no devices on the volume
can be used by processes within the container. By default volumes
are mounted with **nodev**.

If the *HOST-DIR* is a mount point, then **dev**, **suid**, and **exec** options are
ignored by the kernel.

Use **df HOST-DIR** to figure out the source mount, then use
**findmnt -o TARGET,PROPAGATION *source-mount-dir*** to figure out propagation
properties of source mount. If **findmnt**(1) utility is not available, then one
can look at the mount entry for the source mount point in */proc/self/mountinfo*. Look
at the "optional fields" and see if any propagation properties are specified.
In there, **shared:N** means the mount is shared, **master:N** means mount
is slave, and if nothing is there, the mount is private. <sup>\[1]</sup>

To change propagation properties of a mount point, use **mount**(8) command. For
example, if one wants to bind mount source directory */foo*, one can do
**mount --bind /foo /foo** and **mount --make-private --make-shared /foo**. This
converts /foo into a shared mount point. Alternatively, one can directly
change propagation properties of source mount. Say */* is source mount for
*/foo*, then use **mount --make-shared /** to convert */* into a shared mount.

Note: if the user only has access rights via a group, accessing the volume
from inside a rootless container fails.

`Idmapped mount`

If `idmap` is specified, create an idmapped mount to the target user
namespace in the container. The idmap option supports a custom mapping
that can be different than the user namespace used by the
container. The mapping can be specified after the idmap option like:
`idmap=uids=0-1-10#10-11-10;gids=0-100-10`.
For each triplet, the first value is the start of the backing file
system IDs that are mapped to the second value on the host.  The
length of this mapping is given in the third value.
Multiple ranges are separated with #.

# EXAMPLES

Example: container in a pod

test.pod:

```
[Pod]
PodName=test
```

centos.container:

```
[Container]
Image=quay.io/centos/centos:latest
Exec=sh -c "sleep inf"
Pod=test.pod
```

# SEE ALSO

[podman-kube-play(1)](https://docs.podman.io/en/latest/markdown/podman-kube-play.1.html),
[podman-systemd.unit(5)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-systemd.unit.5.md),
[systemd.unit(5)](https://www.freedesktop.org/software/systemd/man/systemd.unit.html)
