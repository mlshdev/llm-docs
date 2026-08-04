> Release-pinned source for Podman v6.0.2: [pkg/api/server/* (swagger:operation annotations)](https://github.com/podman-container-tools/podman/tree/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server)

# Podman REST API endpoint reference

> Generated without executing upstream code by extracting `swagger:operation` annotations from the immutable release source.

## compat

### `POST /auth`

- Operation ID: `SystemAuth`
- Source: [pkg/api/server/register_auth.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_auth.go#L13)

### `POST /build`

- Operation ID: `ImageBuild`
- Source: [pkg/api/server/register_images.go:521](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L521)
- Responses: `200`, `400`, `500`

Build image

Build an image from the given Dockerfile(s)

### `POST /commit`

- Operation ID: `ImageCommit`
- Source: [pkg/api/server/register_images.go:469](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L469)
- Responses: `201`, `404`, `500`

New Image

Create a new image from a container

### `POST /containers/create`

- Operation ID: `ContainerCreate`
- Source: [pkg/api/server/register_containers.go:14](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L14)

### `GET /containers/json`

- Operation ID: `ContainerList`
- Source: [pkg/api/server/register_containers.go:46](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L46)
- Responses: `200`, `400`, `500`

List containers

Returns a list of containers

### `POST /containers/prune`

- Operation ID: `ContainerPrune`
- Source: [pkg/api/server/register_containers.go:104](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L104)
- Responses: `200`, `500`

Delete stopped containers

Remove containers not in use

### `DELETE /containers/{name}`

- Operation ID: `ContainerDelete`
- Source: [pkg/api/server/register_containers.go:129](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L129)
- Responses: `204`, `400`, `404`, `409`, `500`

Remove a container

### `GET /containers/{name}/archive`

- Operation ID: `ContainerArchive`
- Source: [pkg/api/server/register_archive.go:57](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_archive.go#L57)

### `PUT /containers/{name}/archive`

- Operation ID: `PutContainerArchive`
- Source: [pkg/api/server/register_archive.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_archive.go#L13)

### `POST /containers/{name}/attach`

- Operation ID: `ContainerAttach`
- Source: [pkg/api/server/register_containers.go:555](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L555)
- Responses: `101`, `400`, `404`, `500`

Attach to a container

Attach to a container to read its output or send it input. You can attach
to the same container multiple times and you can reattach to containers
that have been detached.

It uses the same stream format as docker, see the libpod attach endpoint for a description of the format.

### `GET /containers/{name}/changes`

- Operation ID: `ContainerChanges`
- Source: [pkg/api/server/register_containers.go:1744](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1744)
- Responses: `200`, `404`, `500`

Report on changes to container's filesystem; adds, deletes or modifications.

Returns which files in a container's filesystem have been added, deleted, or modified. The Kind of modification can be one of:

0: Modified
1: Added
2: Deleted

### `POST /containers/{name}/exec`

- Operation ID: `ContainerExec`
- Source: [pkg/api/server/register_exec.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_exec.go#L13)
- Responses: `201`, `404`, `409`, `500`

Create an exec instance

Create an exec session to run a command inside a running container. Exec sessions will be automatically removed 5 minutes after they exit.

### `GET /containers/{name}/export`

- Operation ID: `ContainerExport`
- Source: [pkg/api/server/register_containers.go:656](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L656)
- Responses: `200`, `404`, `500`

Export a container

Export the contents of a container as a tarball.

### `GET /containers/{name}/json`

- Operation ID: `ContainerInspect`
- Source: [pkg/api/server/register_containers.go:189](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L189)
- Responses: `200`, `404`, `500`

Inspect container

Return low-level information about a container.

### `POST /containers/{name}/kill`

- Operation ID: `ContainerKill`
- Source: [pkg/api/server/register_containers.go:218](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L218)
- Responses: `204`, `404`, `409`, `500`

Kill container

Signal to send to the container as an integer or string (e.g. SIGINT)

### `GET /containers/{name}/logs`

- Operation ID: `ContainerLogs`
- Source: [pkg/api/server/register_containers.go:254](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L254)
- Responses: `200`, `404`, `500`

Get container logs

Get stdout and stderr logs from a container.

### `POST /containers/{name}/pause`

- Operation ID: `ContainerPause`
- Source: [pkg/api/server/register_containers.go:308](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L308)
- Responses: `204`, `404`, `500`

Pause container

Use the cgroups freezer to suspend all processes in a container.

### `POST /containers/{name}/rename`

- Operation ID: `ContainerRename`
- Source: [pkg/api/server/register_containers.go:679](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L679)
- Responses: `204`, `404`, `409`, `500`

Rename an existing container

Change the name of an existing container.

### `POST /containers/{name}/resize`

- Operation ID: `ContainerResize`
- Source: [pkg/api/server/register_containers.go:617](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L617)
- Responses: `200`, `404`, `500`

Resize a container's TTY

Resize the terminal attached to a container (for use with Attach).

### `POST /containers/{name}/restart`

- Operation ID: `ContainerRestart`
- Source: [pkg/api/server/register_containers.go:332](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L332)
- Responses: `204`, `404`, `500`

Restart container

### `POST /containers/{name}/start`

- Operation ID: `ContainerStart`
- Source: [pkg/api/server/register_containers.go:359](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L359)
- Responses: `204`, `304`, `404`, `500`

Start a container

### `GET /containers/{name}/stats`

- Operation ID: `ContainerStats`
- Source: [pkg/api/server/register_containers.go:389](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L389)
- Responses: `200`, `404`, `500`

Get stats for a container

This returns a live stream of a container’s resource usage statistics.

### `POST /containers/{name}/stop`

- Operation ID: `ContainerStop`
- Source: [pkg/api/server/register_containers.go:425](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L425)
- Responses: `204`, `304`, `404`, `500`

Stop a container

### `GET /containers/{name}/top`

- Operation ID: `ContainerTop`
- Source: [pkg/api/server/register_containers.go:464](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L464)
- Responses: `200`, `404`, `500`

List processes running inside a container

### `POST /containers/{name}/unpause`

- Operation ID: `ContainerUnpause`
- Source: [pkg/api/server/register_containers.go:492](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L492)
- Responses: `204`, `404`, `500`

Unpause container

Resume a paused container

### `POST /containers/{name}/update`

- Operation ID: `ContainerUpdate`
- Source: [pkg/api/server/register_containers.go:709](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L709)
- Responses: `200`, `404`, `500`

Update configuration of an existing container, allowing changes to resource limits

Change configuration settings for an existing container without requiring recreation.

### `POST /containers/{name}/wait`

- Operation ID: `ContainerWait`
- Source: [pkg/api/server/register_containers.go:516](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L516)
- Responses: `200`, `404`, `500`

Wait on a container

Block until a container stops or given condition is met.
This is a Docker-compatible endpoint.

### `GET /exec/{id}/json`

- Operation ID: `ExecInspect`
- Source: [pkg/api/server/register_exec.go:158](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_exec.go#L158)
- Responses: `200`, `404`, `500`

Inspect an exec instance

Return low-level information about an exec instance.

### `POST /exec/{id}/resize`

- Operation ID: `ExecResize`
- Source: [pkg/api/server/register_exec.go:120](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_exec.go#L120)
- Responses: `201`, `404`, `500`

Resize an exec instance

Resize the TTY session used by an exec instance. This endpoint only works if tty was specified as part of creating and starting the exec instance.

### `POST /exec/{id}/start`

- Operation ID: `ExecStart`
- Source: [pkg/api/server/register_exec.go:82](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_exec.go#L82)
- Responses: `200`, `404`, `409`, `500`

Start an exec instance

Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.

### `POST /images/create`

- Operation ID: `ImageCreate`
- Source: [pkg/api/server/register_images.go:18](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L18)
- Responses: `200`, `404`, `500`

Create an image

Create an image by either pulling it from a registry or importing it.

### `GET /images/get`

- Operation ID: `ImageGetAll`
- Source: [pkg/api/server/register_images.go:360](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L360)
- Responses: `200`, `500`

Export several images

Get a tarball containing all images and metadata for several image repositories

### `GET /images/json`

- Operation ID: `ImageList`
- Source: [pkg/api/server/register_images.go:88](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L88)
- Responses: `200`, `500`

List Images

Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.

### `POST /images/load`

- Operation ID: `ImageLoad`
- Source: [pkg/api/server/register_images.go:130](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L130)
- Responses: `200`, `500`

Import image

Load a set of images and tags into a repository.

### `POST /images/prune`

- Operation ID: `ImagePrune`
- Source: [pkg/api/server/register_images.go:156](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L156)
- Responses: `200`, `500`

Prune unused images

Remove images from local storage that are not being used by a container

### `GET /images/search`

- Operation ID: `ImageSearch`
- Source: [pkg/api/server/register_images.go:183](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L183)
- Responses: `200`, `400`, `500`

Search images

Search registries for an image

### `DELETE /images/{name}`

- Operation ID: `ImageDelete`
- Source: [pkg/api/server/register_images.go:228](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L228)
- Responses: `200`, `404`, `409`, `500`

Remove Image

Delete an image from local storage

### `GET /images/{name}/get`

- Operation ID: `ImageGet`
- Source: [pkg/api/server/register_images.go:335](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L335)
- Responses: `200`, `500`

Export an image

Export an image in tarball format

### `GET /images/{name}/history`

- Operation ID: `ImageHistory`
- Source: [pkg/api/server/register_images.go:385](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L385)
- Responses: `200`, `404`, `500`

History of an image

Return parent layers of an image.

### `GET /images/{name}/json`

- Operation ID: `ImageInspect`
- Source: [pkg/api/server/register_images.go:409](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L409)
- Responses: `200`, `404`, `500`

Inspect an image

Return low-level information about an image.

### `POST /images/{name}/push`

- Operation ID: `ImagePush`
- Source: [pkg/api/server/register_images.go:267](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L267)
- Responses: `200`, `404`, `500`

Push Image

Push an image to a container registry

### `POST /images/{name}/tag`

- Operation ID: `ImageTag`
- Source: [pkg/api/server/register_images.go:433](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L433)
- Responses: `201`, `400`, `404`, `409`, `500`

Tag an image

Tag an image so that it becomes part of a repository.

### `GET /info`

- Operation ID: `SystemInfo`
- Source: [pkg/api/server/register_info.go:14](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_info.go#L14)
- Responses: `200`, `500`

Get info

Returns information on the system and libpod configuration

### `GET /networks`

- Operation ID: `NetworkList`
- Source: [pkg/api/server/register_networks.go:79](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L79)
- Responses: `200`, `500`

List networks

Display summary of network configurations

### `POST /networks/create`

- Operation ID: `NetworkCreate`
- Source: [pkg/api/server/register_networks.go:104](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L104)
- Responses: `201`, `400`, `500`

Create network

Create a network configuration

### `POST /networks/prune`

- Operation ID: `NetworkPrune`
- Source: [pkg/api/server/register_networks.go:192](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L192)
- Responses: `200`, `500`

Delete unused networks

Remove networks that do not have containers

### `DELETE /networks/{name}`

- Operation ID: `NetworkDelete`
- Source: [pkg/api/server/register_networks.go:14](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L14)
- Responses: `204`, `404`, `500`

Remove a network

### `GET /networks/{name}`

- Operation ID: `NetworkInspect`
- Source: [pkg/api/server/register_networks.go:46](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L46)
- Responses: `200`, `404`, `500`

Inspect a network

Display low level configuration network

### `POST /networks/{name}/connect`

- Operation ID: `NetworkConnect`
- Source: [pkg/api/server/register_networks.go:134](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L134)
- Responses: `200`, `400`, `403`, `500`

Connect container to network

Connect a container to a network

### `POST /networks/{name}/disconnect`

- Operation ID: `NetworkDisconnect`
- Source: [pkg/api/server/register_networks.go:164](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L164)
- Responses: `200`, `400`, `500`

Disconnect container from network

Disconnect a container from a network

### `GET /secrets`

- Operation ID: `SecretList`
- Source: [pkg/api/server/register_secrets.go:160](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_secrets.go#L160)

List secrets

Returns a list of secrets

### `POST /secrets/create`

- Operation ID: `SecretCreate`
- Source: [pkg/api/server/register_secrets.go:183](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_secrets.go#L183)

Create a secret

### `DELETE /secrets/{name}`

- Operation ID: `SecretDelete`
- Source: [pkg/api/server/register_secrets.go:228](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_secrets.go#L228)

Remove secret

### `GET /secrets/{name}`

- Operation ID: `SecretInspect`
- Source: [pkg/api/server/register_secrets.go:206](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_secrets.go#L206)

Inspect secret

### `GET /system/df`

- Operation ID: `SystemDataUsage`
- Source: [pkg/api/server/register_system.go:14](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_system.go#L14)
- Responses: `200`, `500`

Show disk usage

Return information about disk usage for containers, images, and volumes

### `GET /version`

- Operation ID: `SystemVersion`
- Source: [pkg/api/server/register_version.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_version.go#L13)
- Responses: `200`

Component Version information

### `GET /volumes`

- Operation ID: `VolumeList`
- Source: [pkg/api/server/register_volumes.go:221](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L221)

List volumes

Returns a list of volume

### `POST /volumes/create`

- Operation ID: `VolumeCreate`
- Source: [pkg/api/server/register_volumes.go:250](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L250)

Create a volume

### `POST /volumes/prune`

- Operation ID: `VolumePrune`
- Source: [pkg/api/server/register_volumes.go:332](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L332)

Prune volumes

### `DELETE /volumes/{name}`

- Operation ID: `VolumeDelete`
- Source: [pkg/api/server/register_volumes.go:296](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L296)
- Responses: `204`, `404`, `409`, `500`

Remove volume

### `GET /volumes/{name}`

- Operation ID: `VolumeInspect`
- Source: [pkg/api/server/register_volumes.go:273](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L273)
- Responses: `200`, `500`

Inspect volume

## libpod

### `GET /libpod/_ping`

- Operation ID: `SystemPing`
- Source: [pkg/api/server/register_ping.go:15](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_ping.go#L15)

### `POST /libpod/artifacts/add`

- Operation ID: `ArtifactAddLibpod`
- Source: [pkg/api/server/register_artifacts.go:153](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_artifacts.go#L153)
- Responses: `201`, `400`, `404`, `500`

Add a file as an artifact

Add a file as a new OCI artifact, or append to an existing artifact if 'append' is true.

### `GET /libpod/artifacts/json`

- Operation ID: `ArtifactListLibpod`
- Source: [pkg/api/server/register_artifacts.go:36](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_artifacts.go#L36)
- Responses: `200`, `500`

List artifacts

Return a list of all OCI artifacts in local storage.

### `POST /libpod/artifacts/local/add`

- Operation ID: `ArtifactLocalLibpod`
- Source: [pkg/api/server/register_artifacts.go:215](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_artifacts.go#L215)
- Responses: `201`, `400`, `404`, `500`

Add a local file as an artifact

Add a file from the local filesystem as a new OCI artifact, or append to an existing artifact if 'append' is true.

### `POST /libpod/artifacts/pull`

- Operation ID: `ArtifactPullLibpod`
- Source: [pkg/api/server/register_artifacts.go:50](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_artifacts.go#L50)
- Responses: `200`, `400`, `401`, `404`, `500`

Pull an artifact

Pull an OCI artifact from a remote registry to local storage.

### `DELETE /libpod/artifacts/remove`

- Operation ID: `ArtifactDeleteAllLibpod`
- Source: [pkg/api/server/register_artifacts.go:98](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_artifacts.go#L98)
- Responses: `200`, `404`, `500`

Remove one or more artifacts

Remove one or more OCI artifacts from local storage.
Can be filtered by name/ID or all artifacts can be removed.

### `DELETE /libpod/artifacts/{name}`

- Operation ID: `ArtifactDeleteLibpod`
- Source: [pkg/api/server/register_artifacts.go:131](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_artifacts.go#L131)
- Responses: `200`, `404`, `500`

Remove an artifact

Remove a single artifact from local storage by name or ID.

### `GET /libpod/artifacts/{name}/extract`

- Operation ID: `ArtifactExtractLibpod`
- Source: [pkg/api/server/register_artifacts.go:322](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_artifacts.go#L322)
- Responses: `200`, `400`, `404`, `500`

Extract an artifacts contents

Extract the files of an OCI artifact to the local filesystem as a tar archive.

### `GET /libpod/artifacts/{name}/json`

- Operation ID: `ArtifactInspectLibpod`
- Source: [pkg/api/server/register_artifacts.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_artifacts.go#L13)
- Responses: `200`, `404`, `500`

Inspect an artifact

Retrieve detailed information about a specific OCI artifact by name or ID.

### `POST /libpod/artifacts/{name}/push`

- Operation ID: `ArtifactPushLibpod`
- Source: [pkg/api/server/register_artifacts.go:274](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_artifacts.go#L274)
- Responses: `200`, `400`, `401`, `404`, `500`

Push an artifact

Push an OCI artifact from local storage to a remote image registry.

### `POST /libpod/build`

- Operation ID: `ImageBuildLibpod`
- Source: [pkg/api/server/register_images.go:1555](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1555)
- Responses: `200`, `400`, `500`

Build image

Build an image from the given Dockerfile(s)

### `POST /libpod/commit`

- Operation ID: `ImageCommitLibpod`
- Source: [pkg/api/server/register_images.go:1421](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1421)
- Responses: `201`, `404`, `500`

Commit

Create a new image from a container

### `POST /libpod/containers/create`

- Operation ID: `ContainerCreateLibpod`
- Source: [pkg/api/server/register_containers.go:743](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L743)

### `GET /libpod/containers/json`

- Operation ID: `ContainerListLibpod`
- Source: [pkg/api/server/register_containers.go:769](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L769)
- Responses: `200`, `400`, `500`

List containers

Returns a list of containers

### `POST /libpod/containers/prune`

- Operation ID: `ContainerPruneLibpod`
- Source: [pkg/api/server/register_containers.go:845](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L845)
- Responses: `200`, `500`

Delete stopped containers

Remove containers not in use

### `GET /libpod/containers/showmounted`

- Operation ID: `ContainerShowMountedLibpod`
- Source: [pkg/api/server/register_containers.go:868](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L868)
- Responses: `200`, `500`

Show mounted containers

Lists all mounted containers mount points

### `GET /libpod/containers/stats`

- Operation ID: `ContainersStatsAllLibpod`
- Source: [pkg/api/server/register_containers.go:1206](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1206)
- Responses: `200`, `404`, `500`

Get stats for one or more containers

Return a live stream of resource usage statistics of one or more container. If no container is specified, the statistics of all containers are returned.

### `DELETE /libpod/containers/{name}`

- Operation ID: `ContainerDeleteLibpod`
- Source: [pkg/api/server/register_containers.go:886](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L886)
- Responses: `200`, `204`, `400`, `404`, `409`, `500`

Delete container

### `GET /libpod/containers/{name}/archive`

- Operation ID: `ContainerArchiveLibpod`
- Source: [pkg/api/server/register_archive.go:137](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_archive.go#L137)

### `PUT /libpod/containers/{name}/archive`

- Operation ID: `PutContainerArchiveLibpod`
- Source: [pkg/api/server/register_archive.go:96](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_archive.go#L96)

### `POST /libpod/containers/{name}/attach`

- Operation ID: `ContainerAttachLibpod`
- Source: [pkg/api/server/register_containers.go:1410](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1410)
- Responses: `101`, `400`, `404`, `500`

Attach to a container

Attach to a container to read its output or send it input. You can attach
to the same container multiple times and you can reattach to containers
that have been detached.

### Hijacking

This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`,
and `stderr` on the same socket.

This is the response from the service for an attach request:

```
HTTP/1.1 200 OK
Content-Type: application/vnd.docker.raw-stream

[STREAM]
```

After the headers and two new lines, the TCP connection can now be used
for raw, bidirectional communication between the client and server.

To inform potential proxies about connection hijacking, the client
can also optionally send connection upgrade headers.

For example, the client sends this request to upgrade the connection:

```
POST /v4.6.0/libpod/containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1
Upgrade: tcp
Connection: Upgrade
```

The service will respond with a `101 UPGRADED` response, and will
similarly follow with the raw stream:

```
HTTP/1.1 101 UPGRADED
Content-Type: application/vnd.docker.raw-stream
Connection: Upgrade
Upgrade: tcp

[STREAM]
```

### Stream format

When the TTY setting is disabled for the container,
the HTTP Content-Type header is set to application/vnd.docker.multiplexed-stream
(starting with v4.7.0, previously application/vnd.docker.raw-stream was always used)
and the stream over the hijacked connected is multiplexed to separate out
`stdout` and `stderr`. The stream consists of a series of frames, each
containing a header and a payload.

The header contains the information about the output stream type and the size of
the payload.
It is encoded on the first eight bytes like this:

```go
header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4}
```

`STREAM_TYPE` can be:

- 0: `stdin` (is written on `stdout`)
- 1: `stdout`
- 2: `stderr`

`SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size
encoded as big endian.

Following the header is the payload, which contains the specified number of
bytes as written in the size.

The simplest way to implement this protocol is the following:

1. Read 8 bytes.
2. Choose `stdout` or `stderr` depending on the first byte.
3. Extract the frame size from the last four bytes.
4. Read the extracted size and output it on the correct output.
5. Goto 1.

### Stream format when using a TTY

When the TTY setting is enabled for the container,
the stream is not multiplexed. The data exchanged over the hijacked
connection is simply the raw data from the process PTY and client's
`stdin`.

### `GET /libpod/containers/{name}/changes`

- Operation ID: `ContainerChangesLibpod`
- Source: [pkg/api/server/register_containers.go:1783](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1783)
- Responses: `200`, `404`, `500`

Report on changes to container's filesystem; adds, deletes or modifications.

Returns which files in a container's filesystem have been added, deleted, or modified. The Kind of modification can be one of:

0: Modified
1: Added
2: Deleted

### `POST /libpod/containers/{name}/checkpoint`

- Operation ID: `ContainerCheckpointLibpod`
- Source: [pkg/api/server/register_containers.go:1613](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1613)
- Responses: `200`, `404`, `500`

Checkpoint a container

### `POST /libpod/containers/{name}/exec`

- Operation ID: `ContainerExecLibpod`
- Source: [pkg/api/server/register_exec.go:187](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_exec.go#L187)
- Responses: `201`, `404`, `409`, `500`

Create an exec instance

Create an exec session to run a command inside a running container. Exec sessions will be automatically removed 5 minutes after they exit.

### `GET /libpod/containers/{name}/exists`

- Operation ID: `ContainerExistsLibpod`
- Source: [pkg/api/server/register_containers.go:1355](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1355)
- Responses: `204`, `404`, `500`

Check if container exists

Quick way to determine if a container exists by name or ID

### `GET /libpod/containers/{name}/export`

- Operation ID: `ContainerExportLibpod`
- Source: [pkg/api/server/register_containers.go:1591](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1591)
- Responses: `200`, `404`, `500`

Export a container

Export the contents of a container as a tarball.

### `GET /libpod/containers/{name}/healthcheck`

- Operation ID: `ContainerHealthcheckLibpod`
- Source: [pkg/api/server/register_healthcheck.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_healthcheck.go#L13)
- Responses: `200`, `404`, `409`, `500`

Run a container's healthcheck

Execute the defined healthcheck and return information about the results

### `POST /libpod/containers/{name}/init`

- Operation ID: `ContainerInitLibpod`
- Source: [pkg/api/server/register_containers.go:1821](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1821)
- Responses: `204`, `304`, `404`, `500`

Initialize a container

Performs all tasks necessary for initializing the container but does not start the container.

### `GET /libpod/containers/{name}/json`

- Operation ID: `ContainerInspectLibpod`
- Source: [pkg/api/server/register_containers.go:935](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L935)
- Responses: `200`, `404`, `500`

Inspect container

Return low-level information about a container.

### `POST /libpod/containers/{name}/kill`

- Operation ID: `ContainerKillLibpod`
- Source: [pkg/api/server/register_containers.go:961](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L961)
- Responses: `204`, `404`, `409`, `500`

Kill container

send a signal to a container, defaults to killing the container

### `GET /libpod/containers/{name}/logs`

- Operation ID: `ContainerLogsLibpod`
- Source: [pkg/api/server/register_containers.go:1043](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1043)
- Responses: `200`, `404`, `500`

Get container logs

Get stdout and stderr logs from a container.

The stream format is the same as described in the attach endpoint.

### `POST /libpod/containers/{name}/mount`

- Operation ID: `ContainerMountLibpod`
- Source: [pkg/api/server/register_containers.go:990](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L990)
- Responses: `200`, `404`, `500`

Mount a container

Mount a container to the filesystem

### `POST /libpod/containers/{name}/pause`

- Operation ID: `ContainerPauseLibpod`
- Source: [pkg/api/server/register_containers.go:1098](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1098)
- Responses: `204`, `404`, `500`

Pause a container

Use the cgroups freezer to suspend all processes in a container.

### `POST /libpod/containers/{name}/rename`

- Operation ID: `ContainerRenameLibpod`
- Source: [pkg/api/server/register_containers.go:1845](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1845)
- Responses: `204`, `404`, `409`, `500`

Rename an existing container

Change the name of an existing container.

### `POST /libpod/containers/{name}/resize`

- Operation ID: `ContainerResizeLibpod`
- Source: [pkg/api/server/register_containers.go:1552](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1552)
- Responses: `200`, `404`, `409`, `500`

Resize a container's TTY

Resize the terminal attached to a container (for use with Attach).

### `POST /libpod/containers/{name}/restart`

- Operation ID: `ContainerRestartLibpod`
- Source: [pkg/api/server/register_containers.go:1120](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1120)
- Responses: `204`, `404`, `500`

Restart a container

### `POST /libpod/containers/{name}/restore`

- Operation ID: `ContainerRestoreLibpod`
- Source: [pkg/api/server/register_containers.go:1674](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1674)
- Responses: `200`, `404`, `500`

Restore a container

Restore a container from a checkpoint.

### `POST /libpod/containers/{name}/start`

- Operation ID: `ContainerStartLibpod`
- Source: [pkg/api/server/register_containers.go:1149](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1149)
- Responses: `204`, `304`, `404`, `500`

Start a container

### `GET /libpod/containers/{name}/stats`

- Operation ID: `ContainerStatsLibpod`
- Source: [pkg/api/server/register_containers.go:1177](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1177)
- Responses: `200`, `404`, `409`, `500`

Get stats for a container

DEPRECATED. This endpoint will be removed with the next major release. Please use /libpod/containers/stats instead.

### `POST /libpod/containers/{name}/stop`

- Operation ID: `ContainerStopLibpod`
- Source: [pkg/api/server/register_containers.go:1377](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1377)
- Responses: `204`, `304`, `404`, `500`

Stop a container

### `GET /libpod/containers/{name}/top`

- Operation ID: `ContainerTopLibpod`
- Source: [pkg/api/server/register_containers.go:1245](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1245)
- Responses: `200`, `404`, `500`

List processes

List processes running inside a container

### `POST /libpod/containers/{name}/unmount`

- Operation ID: `ContainerUnmountLibpod`
- Source: [pkg/api/server/register_containers.go:1021](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1021)
- Responses: `204`, `404`, `500`

Unmount a container

Unmount a container from the filesystem

### `POST /libpod/containers/{name}/unpause`

- Operation ID: `ContainerUnpauseLibpod`
- Source: [pkg/api/server/register_containers.go:1283](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1283)
- Responses: `204`, `404`, `500`

Unpause Container

### `POST /libpod/containers/{name}/update`

- Operation ID: `ContainerUpdateLibpod`
- Source: [pkg/api/server/register_containers.go:1874](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1874)
- Responses: `201`, `400`, `404`, `500`

Updates the configuration of an existing container, allowing changes to resource limits and healthchecks

Updates the configuration of an existing container, allowing changes to resource limits and healthchecks.

### `POST /libpod/containers/{name}/wait`

- Operation ID: `ContainerWaitLibpod`
- Source: [pkg/api/server/register_containers.go:1304](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_containers.go#L1304)
- Responses: `200`, `404`, `500`

Wait on a container

Wait on a container to meet a given condition

### `GET /libpod/exec/{id}/json`

- Operation ID: `ExecInspectLibpod`
- Source: [pkg/api/server/register_exec.go:333](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_exec.go#L333)
- Responses: `200`, `404`, `500`

Inspect an exec instance

Return low-level information about an exec instance.

### `POST /libpod/exec/{id}/resize`

- Operation ID: `ExecResizeLibpod`
- Source: [pkg/api/server/register_exec.go:298](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_exec.go#L298)
- Responses: `201`, `404`, `500`

Resize an exec instance

Resize the TTY session used by an exec instance. This endpoint only works if tty was specified as part of creating and starting the exec instance.

### `POST /libpod/exec/{id}/start`

- Operation ID: `ExecStartLibpod`
- Source: [pkg/api/server/register_exec.go:254](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_exec.go#L254)
- Responses: `200`, `404`, `409`, `500`

Start an exec instance

Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command.
Otherwise, it sets up an interactive session with the command. The stream format is the same as the attach endpoint.

### `GET /libpod/generate/kube`

- Operation ID: `GenerateKubeLibpod`
- Source: [pkg/api/server/register_generate.go:123](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_generate.go#L123)
- Responses: `200`, `500`

Generate a Kubernetes YAML file.

Generate Kubernetes YAML based on a pod or container.

### `GET /libpod/generate/kube`

- Operation ID: `GenerateKubeLibpod`
- Source: [pkg/api/server/register_kube.go:182](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_kube.go#L182)
- Responses: `200`, `500`

Generate a Kubernetes YAML file.

Generate Kubernetes YAML based on a pod or container.

### `GET /libpod/generate/{name}/systemd`

- Operation ID: `GenerateSystemdLibpod`
- Source: [pkg/api/server/register_generate.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_generate.go#L13)
- Responses: `200`, `500`

Generate Systemd Units

Generate Systemd Units based on a pod or container.

### `GET /libpod/images/export`

- Operation ID: `ImageExportLibpod`
- Source: [pkg/api/server/register_images.go:1327](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1327)
- Responses: `200`, `404`, `500`

Export multiple images

Export multiple images into a single object. Only `docker-archive` is currently supported.

### `POST /libpod/images/import`

- Operation ID: `ImageImportLibpod`
- Source: [pkg/api/server/register_images.go:1014](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1014)
- Responses: `200`, `400`, `500`

Import image

Import a previously exported tarball as an image.

### `GET /libpod/images/json`

- Operation ID: `ImageListLibpod`
- Source: [pkg/api/server/register_images.go:934](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L934)
- Responses: `200`, `500`

List Images

Returns a list of images on the server

### `POST /libpod/images/load`

- Operation ID: `ImageLoadLibpod`
- Source: [pkg/api/server/register_images.go:965](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L965)
- Responses: `200`, `400`, `500`

Load image

Load an image (oci-archive or docker-archive) stream.

### `POST /libpod/images/prune`

- Operation ID: `ImagePruneLibpod`
- Source: [pkg/api/server/register_images.go:1209](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1209)
- Responses: `200`, `500`

Prune unused images

Remove images that are not being used by a container

### `POST /libpod/images/pull`

- Operation ID: `ImagePullLibpod`
- Source: [pkg/api/server/register_images.go:1142](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1142)
- Responses: `200`, `400`, `500`, `default`

Pull images

Pull one or more images from a container registry. Error status codes can come either from the API or from the registry. Errors may be detected later even if the HTTP status 200 is returned, and in that case, the error description will be in the `error` field.

### `DELETE /libpod/images/remove`

- Operation ID: `ImageDeleteAllLibpod`
- Source: [pkg/api/server/register_images.go:1063](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1063)
- Responses: `200`, `400`, `500`

Remove one or more images from the storage.

### `POST /libpod/images/scp/{name}`

- Operation ID: `ImageScpLibpod`
- Source: [pkg/api/server/register_images.go:2266](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L2266)
- Responses: `200`, `400`, `500`

Copy an image from one host to another

### `GET /libpod/images/search`

- Operation ID: `ImageSearchLibpod`
- Source: [pkg/api/server/register_images.go:1252](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1252)
- Responses: `200`, `500`

Search images

Search registries for images

### `DELETE /libpod/images/{name}`

- Operation ID: `ImageDeleteLibpod`
- Source: [pkg/api/server/register_images.go:1103](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1103)
- Responses: `200`, `400`, `404`, `409`, `500`

Remove an image from the local storage.

### `GET /libpod/images/{name}/changes`

- Operation ID: `ImageChangesLibpod`
- Source: [pkg/api/server/register_images.go:1516](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1516)
- Responses: `200`, `404`, `500`

Report on changes to images's filesystem; adds, deletes or modifications.

Returns which files in an image's filesystem have been added, deleted, or modified. The Kind of modification can be one of:

0: Modified
1: Added
2: Deleted

### `GET /libpod/images/{name}/exists`

- Operation ID: `ImageExistsLibpod`
- Source: [pkg/api/server/register_images.go:864](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L864)
- Responses: `204`, `404`, `500`

Image exists

Check if image exists in local store

### `GET /libpod/images/{name}/get`

- Operation ID: `ImageGetLibpod`
- Source: [pkg/api/server/register_images.go:1294](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1294)
- Responses: `200`, `404`, `500`

Export an image

### `GET /libpod/images/{name}/history`

- Operation ID: `ImageHistoryLibpod`
- Source: [pkg/api/server/register_images.go:912](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L912)
- Responses: `200`, `404`, `500`

History of an image

Return parent layers of an image.

### `GET /libpod/images/{name}/json`

- Operation ID: `ImageInspectLibpod`
- Source: [pkg/api/server/register_images.go:1365](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1365)
- Responses: `200`, `404`, `500`

Inspect an image

Obtain low-level information about an image

### `POST /libpod/images/{name}/push`

- Operation ID: `ImagePushLibpod`
- Source: [pkg/api/server/register_images.go:788](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L788)
- Responses: `200`, `404`, `500`

Push Image

Push an image to a container registry

### `GET /libpod/images/{name}/resolve`

- Operation ID: `ImageResolveLibpod`
- Source: [pkg/api/server/register_images.go:2299](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L2299)
- Responses: `204`, `400`, `500`

Resolve an image (short) name

Resolve the passed image name to a list of fully-qualified images referring to container registries.

### `POST /libpod/images/{name}/tag`

- Operation ID: `ImageTagLibpod`
- Source: [pkg/api/server/register_images.go:1387](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1387)
- Responses: `201`, `400`, `404`, `409`, `500`

Tag an image

Tag an image so that it becomes part of a repository.

### `GET /libpod/images/{name}/tree`

- Operation ID: `ImageTreeLibpod`
- Source: [pkg/api/server/register_images.go:886](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L886)
- Responses: `200`, `404`, `500`

Image tree

Retrieve the image tree for the provided image name or ID

### `POST /libpod/images/{name}/untag`

- Operation ID: `ImageUntagLibpod`
- Source: [pkg/api/server/register_images.go:1481](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1481)
- Responses: `201`, `400`, `404`, `409`, `500`

Untag an image

Untag an image. If not repo and tag are specified, all tags are removed from the image.

### `GET /libpod/info`

- Operation ID: `SystemInfoLibpod`
- Source: [pkg/api/server/register_info.go:30](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_info.go#L30)
- Responses: `200`, `500`

Get info

Returns information on the system and libpod configuration

### `POST /libpod/kube/apply`

- Operation ID: `KubeApplyLibpod`
- Source: [pkg/api/server/register_kube.go:236](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_kube.go#L236)
- Responses: `200`, `500`

Apply a podman workload or Kubernetes YAML file.

Deploy a podman container, pod, volume, or Kubernetes yaml to a Kubernetes cluster.

### `POST /libpod/local/build`

- Operation ID: `LocalBuildLibpod`
- Source: [pkg/api/server/register_images.go:1910](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L1910)
- Responses: `200`, `400`, `404`, `500`

Create image from local build context

Build an image from a local build context directory without requiring tar archive upload. The build context must already exist on the server filesystem.

### `POST /libpod/local/images/load`

- Operation ID: `LocalImagesLibpod`
- Source: [pkg/api/server/register_images.go:990](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_images.go#L990)
- Responses: `200`, `400`, `404`, `500`

Load image from local path

Load an image (oci-archive or docker-archive) from a file path accessible on the server.

### `POST /libpod/networks/create`

- Operation ID: `NetworkCreateLibpod`
- Source: [pkg/api/server/register_networks.go:350](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L350)
- Responses: `200`, `400`, `409`, `500`

Create network

Create a new network configuration

### `GET /libpod/networks/json`

- Operation ID: `NetworkListLibpod`
- Source: [pkg/api/server/register_networks.go:299](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L299)
- Responses: `200`, `500`

List networks

Display summary of network configurations.
  - In a 200 response, all of the fields named Bytes are returned as a Base64 encoded string.

### `POST /libpod/networks/prune`

- Operation ID: `NetworkPruneLibpod`
- Source: [pkg/api/server/register_networks.go:433](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L433)
- Responses: `200`, `500`

Delete unused networks

Remove networks that do not have containers

### `DELETE /libpod/networks/{name}`

- Operation ID: `NetworkDeleteLibpod`
- Source: [pkg/api/server/register_networks.go:224](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L224)
- Responses: `200`, `404`, `500`

Remove a network

Remove a configured network

### `POST /libpod/networks/{name}/connect`

- Operation ID: `NetworkConnectLibpod`
- Source: [pkg/api/server/register_networks.go:379](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L379)
- Responses: `200`, `404`, `500`

Connect container to network

Connect a container to a network.

### `POST /libpod/networks/{name}/disconnect`

- Operation ID: `NetworkDisconnectLibpod`
- Source: [pkg/api/server/register_networks.go:406](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L406)
- Responses: `200`, `404`, `500`

Disconnect container from network

Disconnect a container from a network.

### `GET /libpod/networks/{name}/exists`

- Operation ID: `NetworkExistsLibpod`
- Source: [pkg/api/server/register_networks.go:277](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L277)
- Responses: `204`, `404`, `500`

Network exists

Check if network exists

### `GET /libpod/networks/{name}/json`

- Operation ID: `NetworkInspectLibpod`
- Source: [pkg/api/server/register_networks.go:326](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L326)
- Responses: `200`, `404`, `500`

Inspect a network

Display configuration for a network.

### `POST /libpod/networks/{name}/update`

- Operation ID: `NetworkUpdateLibpod`
- Source: [pkg/api/server/register_networks.go:250](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_networks.go#L250)
- Responses: `200`, `400`, `500`

Update existing podman network

### `DELETE /libpod/play/kube`

- Operation ID: `PlayKubeDownLibpod`
- Source: [pkg/api/server/register_kube.go:160](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_kube.go#L160)
- Responses: `200`, `500`

Remove resources created from kube play

Tears down pods, secrets, and volumes defined in a YAML file

### `POST /libpod/play/kube`

- Operation ID: `PlayKubeLibpod`
- Source: [pkg/api/server/register_kube.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_kube.go#L13)
- Responses: `200`, `500`

Play a Kubernetes YAML file.

Create and run pods based on a Kubernetes YAML file.

### Content-Type

Then endpoint support two Content-Type
 - `plain/text` for yaml format
 - `application/x-tar` for sending context(s) required for building images

#### Tar format

The tar format must contain a `play.yaml` file at the root that will be used.
If the file format requires context to build an image, it uses the image name and
check for corresponding folder.

For example, the client sends a tar file with the following structure:

```
└── content.tar
 ├── play.yaml
 └── foobar/
     └── Containerfile
```

The `play.yaml` is the following, the `foobar` image means we are looking for a context with this name.
```
apiVersion: v1
kind: Pod
metadata:
name: demo-build-remote
spec:
containers:
 - name: container
   image: foobar
```

### `DELETE /libpod/quadlets`

- Operation ID: `QuadletDeleteAllLibpod`
- Source: [pkg/api/server/register_quadlets.go:135](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_quadlets.go#L135)
- Responses: `200`, `400`, `500`

Remove quadlet files (batch operation)

Remove one or more quadlet files. Supports removing specific quadlets by name or all quadlets
for the current user. Can force removal of running quadlets and control systemd reload behavior.

### `POST /libpod/quadlets`

- Operation ID: `QuadletInstallLibpod`
- Source: [pkg/api/server/register_quadlets.go:80](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_quadlets.go#L80)
- Responses: `200`, `400`, `500`

Install quadlet files

Install one or more files for a quadlet application. Each request should contain a single quadlet file
and optionally more files such as containerfile, kube yaml or configuration files. Supports both tar
archives and multipart form data uploads.

### `GET /libpod/quadlets/json`

- Operation ID: `QuadletListLibpod`
- Source: [pkg/api/server/register_quadlets.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_quadlets.go#L13)
- Responses: `200`, `500`

List quadlets

Return a list of all quadlets.

### `DELETE /libpod/quadlets/{name}`

- Operation ID: `QuadletDeleteLibpod`
- Source: [pkg/api/server/register_quadlets.go:180](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_quadlets.go#L180)
- Responses: `200`, `400`, `404`, `500`

Remove a quadlet file

Remove a quadlet file by name. Can force removal of running quadlets and control systemd reload behavior.

### `GET /libpod/quadlets/{name}/exists`

- Operation ID: `QuadletExistsLibpod`
- Source: [pkg/api/server/register_quadlets.go:58](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_quadlets.go#L58)
- Responses: `204`, `404`, `500`

Check if quadlet exists

Check if a quadlet exists by name

### `GET /libpod/quadlets/{name}/file`

- Operation ID: `QuadletFileLibpod`
- Source: [pkg/api/server/register_quadlets.go:36](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_quadlets.go#L36)
- Responses: `200`, `404`, `500`

Get quadlet file

Get the contents of a Quadlet, displaying the file including all comments

### `POST /libpod/secrets/create`

- Operation ID: `SecretCreateLibpod`
- Source: [pkg/api/server/register_secrets.go:14](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_secrets.go#L14)

Create a secret

### `GET /libpod/secrets/json`

- Operation ID: `SecretListLibpod`
- Source: [pkg/api/server/register_secrets.go:61](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_secrets.go#L61)

List secrets

Returns a list of secrets

### `DELETE /libpod/secrets/{name}`

- Operation ID: `SecretDeleteLibpod`
- Source: [pkg/api/server/register_secrets.go:130](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_secrets.go#L130)

Remove secret

### `GET /libpod/secrets/{name}/exists`

- Operation ID: `SecretExistsLibpod`
- Source: [pkg/api/server/register_secrets.go:109](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_secrets.go#L109)
- Responses: `204`, `404`

Secret exists

### `GET /libpod/secrets/{name}/json`

- Operation ID: `SecretInspectLibpod`
- Source: [pkg/api/server/register_secrets.go:83](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_secrets.go#L83)

Inspect secret

### `POST /libpod/system/check`

- Operation ID: `SystemCheckLibpod`
- Source: [pkg/api/server/register_system.go:30](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_system.go#L30)
- Responses: `200`, `400`, `500`

Performs consistency checks on storage, optionally removing items which fail checks

### `GET /libpod/system/df`

- Operation ID: `SystemDataUsageLibpod`
- Source: [pkg/api/server/register_system.go:103](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_system.go#L103)
- Responses: `200`, `500`

Show disk usage

Return information about disk usage for containers, images, and volumes

### `POST /libpod/system/prune`

- Operation ID: `SystemPruneLibpod`
- Source: [pkg/api/server/register_system.go:63](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_system.go#L63)
- Responses: `200`, `400`, `500`

Prune unused data

### `GET /libpod/version`

- Operation ID: `SystemVersionLibpod`
- Source: [pkg/api/server/register_version.go:25](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_version.go#L25)
- Responses: `200`

Component Version information

### `POST /libpod/volumes/create`

- Operation ID: `VolumeCreateLibpod`
- Source: [pkg/api/server/register_volumes.go:14](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L14)

Create a volume

### `GET /libpod/volumes/json`

- Operation ID: `VolumeListLibpod`
- Source: [pkg/api/server/register_volumes.go:55](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L55)

List volumes

Returns a list of volumes

### `POST /libpod/volumes/prune`

- Operation ID: `VolumePruneLibpod`
- Source: [pkg/api/server/register_volumes.go:80](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L80)

Prune volumes

### `DELETE /libpod/volumes/{name}`

- Operation ID: `VolumeDeleteLibpod`
- Source: [pkg/api/server/register_volumes.go:131](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L131)
- Responses: `204`, `404`, `409`, `500`

Remove volume

### `GET /libpod/volumes/{name}/exists`

- Operation ID: `VolumeExistsLibpod`
- Source: [pkg/api/server/register_volumes.go:33](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L33)
- Responses: `204`, `404`, `500`

Volume exists

Check if a volume exists

### `GET /libpod/volumes/{name}/export`

- Operation ID: `VolumeExportLibpod`
- Source: [pkg/api/server/register_volumes.go:163](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L163)
- Responses: `200`, `404`, `500`

Export a volume

### `POST /libpod/volumes/{name}/import`

- Operation ID: `VolumeImportLibpod`
- Source: [pkg/api/server/register_volumes.go:188](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L188)
- Responses: `204`, `404`, `500`

Populate a volume by importing provided tar

### `GET /libpod/volumes/{name}/json`

- Operation ID: `VolumeInspectLibpod`
- Source: [pkg/api/server/register_volumes.go:110](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_volumes.go#L110)
- Responses: `200`, `404`, `500`

Inspect volume

## manifests

### `DELETE /libpod/manifests/{name}`

- Operation ID: `ManifestDeleteV3Libpod`
- Source: [pkg/api/server/register_manifest.go:280](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_manifest.go#L280)
- Responses: `200`, `400`, `404`, `500`

Remove image from a manifest list

Remove an image from a manifest list

Deprecated: As of 4.0.0 use ManifestModifyLibpod instead

### `DELETE /libpod/manifests/{name}`

- Operation ID: `ManifestDeleteLibpod`
- Source: [pkg/api/server/register_manifest.go:310](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_manifest.go#L310)
- Responses: `200`, `404`, `500`

Delete manifest list

Delete named manifest list

As of v4.0.0

### `POST /libpod/manifests/{name}`

- Operation ID: `ManifestCreateLibpod`
- Source: [pkg/api/server/register_manifest.go:108](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_manifest.go#L108)
- Responses: `201`, `400`, `404`, `500`

Create

Create a manifest list

### `PUT /libpod/manifests/{name}`

- Operation ID: `ManifestModifyLibpod`
- Source: [pkg/api/server/register_manifest.go:206](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_manifest.go#L206)
- Responses: `200`, `404`, `400`, `409`, `500`

Modify manifest list

Add/Remove an image(s) to a manifest list

Note: operations are not atomic when multiple Images are provided.

As of v4.0.0

### `POST /libpod/manifests/{name}/add`

- Operation ID: `ManifestAddLibpod`
- Source: [pkg/api/server/register_manifest.go:249](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_manifest.go#L249)
- Responses: `200`, `404`, `409`, `500`

Add image

Add an image to a manifest list

Deprecated: As of 4.0.0 use ManifestModifyLibpod instead

### `GET /libpod/manifests/{name}/exists`

- Operation ID: `ManifestExistsLibpod`
- Source: [pkg/api/server/register_manifest.go:156](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_manifest.go#L156)
- Responses: `204`, `404`, `500`

Exists

Check if manifest list exists

Note: There is no contract that the manifest list will exist for a follow-on operation

### `GET /libpod/manifests/{name}/json`

- Operation ID: `ManifestInspectLibpod`
- Source: [pkg/api/server/register_manifest.go:180](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_manifest.go#L180)
- Responses: `200`, `404`, `500`

Inspect

Display attributes of given manifest list

### `POST /libpod/manifests/{name}/push`

- Operation ID: `ManifestPushV3Libpod`
- Source: [pkg/api/server/register_manifest.go:15](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_manifest.go#L15)
- Responses: `200`, `400`, `404`, `500`

Push manifest to registry

Push a manifest list or image index to a registry

Deprecated: As of 4.0.0 use ManifestPushLibpod instead

### `POST /libpod/manifests/{name}/registry/{destination}`

- Operation ID: `ManifestPushLibpod`
- Source: [pkg/api/server/register_manifest.go:50](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_manifest.go#L50)
- Responses: `200`, `400`, `404`, `500`

Push manifest list to registry

Push a manifest list or image index to the named registry

As of v4.0.0

## pods

### `POST /libpod/pods/create`

- Operation ID: `PodCreateLibpod`
- Source: [pkg/api/server/register_pods.go:42](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L42)
- Responses: `201`, `400`, `409`, `500`

Create a pod

### `GET /libpod/pods/json`

- Operation ID: `PodListLibpod`
- Source: [pkg/api/server/register_pods.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L13)
- Responses: `200`, `400`, `500`

List pods

### `POST /libpod/pods/prune`

- Operation ID: `PodPruneLibpod`
- Source: [pkg/api/server/register_pods.go:67](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L67)
- Responses: `200`, `400`, `409`, `500`

Prune unused pods

### `GET /libpod/pods/stats`

- Operation ID: `PodStatsAllLibpod`
- Source: [pkg/api/server/register_pods.go:329](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L329)
- Responses: `200`, `404`, `500`

Statistics for one or more pods

Display a live stream of resource usage statistics for the containers in one or more pods

### `DELETE /libpod/pods/{name}`

- Operation ID: `PodDeleteLibpod`
- Source: [pkg/api/server/register_pods.go:82](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L82)
- Responses: `200`, `400`, `404`, `500`

Remove pod

### `GET /libpod/pods/{name}/exists`

- Operation ID: `PodExistsLibpod`
- Source: [pkg/api/server/register_pods.go:130](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L130)
- Responses: `204`, `404`, `500`

Pod exists

Check if a pod exists by name or ID

### `GET /libpod/pods/{name}/json`

- Operation ID: `PodInspectLibpod`
- Source: [pkg/api/server/register_pods.go:111](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L111)
- Responses: `200`, `404`, `500`

Inspect pod

### `POST /libpod/pods/{name}/kill`

- Operation ID: `PodKillLibpod`
- Source: [pkg/api/server/register_pods.go:150](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L150)
- Responses: `200`, `400`, `404`, `409`, `500`

Kill a pod

### `POST /libpod/pods/{name}/pause`

- Operation ID: `PodPauseLibpod`
- Source: [pkg/api/server/register_pods.go:178](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L178)
- Responses: `200`, `404`, `409`, `500`

Pause a pod

### `POST /libpod/pods/{name}/restart`

- Operation ID: `PodRestartLibpod`
- Source: [pkg/api/server/register_pods.go:200](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L200)
- Responses: `200`, `404`, `409`, `500`

Restart a pod

### `POST /libpod/pods/{name}/start`

- Operation ID: `PodStartLibpod`
- Source: [pkg/api/server/register_pods.go:221](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L221)
- Responses: `200`, `304`, `404`, `409`, `500`

Start a pod

### `POST /libpod/pods/{name}/stop`

- Operation ID: `PodStopLibpod`
- Source: [pkg/api/server/register_pods.go:244](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L244)
- Responses: `200`, `304`, `400`, `404`, `409`, `500`

Stop a pod

### `GET /libpod/pods/{name}/top`

- Operation ID: `PodTopLibpod`
- Source: [pkg/api/server/register_pods.go:294](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L294)
- Responses: `200`, `404`, `500`

List processes

List processes running inside a pod

### `POST /libpod/pods/{name}/unpause`

- Operation ID: `PodUnpauseLibpod`
- Source: [pkg/api/server/register_pods.go:273](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_pods.go#L273)
- Responses: `200`, `404`, `409`, `500`

Unpause a pod

## system

### `GET /events`

- Operation ID: `SystemEvents`
- Source: [pkg/api/server/register_events.go:13](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_events.go#L13)
- Responses: `200`, `500`

Get events

Returns events filtered on query parameters

### `GET /libpod/events`

- Operation ID: `SystemEventsLibpod`
- Source: [pkg/api/server/register_events.go:42](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/pkg/api/server/register_events.go#L42)
- Responses: `200`, `500`

Get events

Returns events filtered on query parameters
