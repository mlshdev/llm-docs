> Pinned source for SearXNG master: [docs/admin/installation-docker.rst](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/admin/installation-docker.rst)

<a id="installation-container"></a>

# Installation container

<a id="docker-101"></a> <a id="docker-cheat-sheet-pdf-doc"></a> <a id="podman-rootless-containers"></a> <a id="dockerhub-mirror"></a> <a id="ghcr-mirror"></a>

### info

- [Docker 101](https://docs.searxng.org/admin/installation-docker.html#docker-101)
- [Docker cheat sheet (PDF doc)](https://docs.searxng.org/admin/installation-docker.html#docker-cheat-sheet-pdf-doc)
- [Podman rootless containers](https://docs.searxng.org/admin/installation-docker.html#podman-rootless-containers)

> **Important**
> Understanding container architecture basics is essential for properly
> maintaining your SearXNG instance.  This guide assumes familiarity with
> container concepts and provides deployment steps at a high level.
>
> If you're new to containers, we recommend learning the fundamentals at
> [Docker 101](https://docs.searxng.org/admin/installation-docker.html#docker-101) before proceeding.

Container images are the basis for deployments in containerized environments,
Compose, Kubernetes and more.

<a id="container-installation"></a>

# Installation

<a id="container-prerequisites"></a>

## Prerequisites

You need a working Docker or Podman installation on your system.  Choose the
option that works best for your environment:

- [Docker](https://docs.docker.com/get-docker/) (recommended for most users)
- [Podman](https://podman.io/docs/installation)

In the case of Docker, you need to add the user running the container to the
`docker` group and restart the session:

```sh
$ sudo usermod -aG docker $USER
```

In the case of Podman, no additional steps are generally required, but there
are some considerations when running [Podman rootless containers](https://docs.searxng.org/admin/installation-docker.html#podman-rootless-containers).

<a id="container-registries"></a>

## Registries

> **Note**
> DockerHub now applies rate limits to unauthenticated image pulls.  If you
> are affected by this, you can use the [GHCR mirror](https://docs.searxng.org/admin/installation-docker.html#ghcr-mirror) instead.

The official images are mirrored at:

- [DockerHub mirror](https://docs.searxng.org/admin/installation-docker.html#dockerhub-mirror)
- [GHCR mirror](https://docs.searxng.org/admin/installation-docker.html#ghcr-mirror) (GitHub Container Registry)

<a id="container-compose-instancing"></a>

# Compose instancing

This is the recommended way to deploy SearXNG in a containerized environment.
Compose templates allow you to define container configurations in a
declarative manner.

<a id="container-compose-instancing-setup"></a>

## Setup

1. Create the environment:

```sh
# Create the environment and configuration directories
$ mkdir -p ./searxng/core-config/
$ cd ./searxng/

# Fetch the latest compose template
$ curl -fsSL \
    -O https://raw.githubusercontent.com/searxng/searxng/master/container/docker-compose.yml \
    -O https://raw.githubusercontent.com/searxng/searxng/master/container/.env.example
```

2. Copy the `.env.example` file and edit the values as needed:

```sh
$ cp -i .env.example .env

# nano or your preferred text editor...
$ nano .env
```

3. Start & stop the services:

```sh
$ docker compose up -d
$ docker compose down
```

4. Setup your settings in `core-config/settings.yml` according to your preferences.

<a id="container-compose-instancing-maintenance"></a>

## Management

> **Important**
> Remember to review the new templates for any changes that may affect your
> deployment, and update the `.env` file accordingly.

To update the templates to their latest versions:

```sh
$ docker compose down
$ curl -fsSLO \
    https://raw.githubusercontent.com/searxng/searxng/master/container/docker-compose.yml \
    https://raw.githubusercontent.com/searxng/searxng/master/container/.env.example
$ docker compose up -d
```

To update the services to their latest versions:

```sh
$ docker compose down
$ docker compose pull
$ docker compose up -d
```

List running services:

```sh
$ docker compose ps
NAME            IMAGE  ...  CREATED        STATUS        PORTS
searxng-core    ...    ...  3 minutes ago  Up 3 minutes  0.0.0.0:8080->8080/tcp
searxng-valkey  ...    ...  3 minutes ago  Up 3 minutes  6379/tcp
```

Print a service container logs:

```sh
$ docker compose logs -f core
```

Access a service container shell (troubleshooting):

```sh
$ docker compose exec -it --user root core /bin/sh -l
/usr/local/searxng #
```

Stop and remove the services:

```sh
$ docker compose down
```

<a id="container-manual-instancing"></a>

# Manual instancing

This section is intended for advanced users who need custom deployments.  We
recommend using [Container compose instancing](https://docs.searxng.org/admin/installation-docker.html#container-compose-instancing), which provides a preconfigured
environment with sensible defaults.

Basic container instancing example:

```sh
# Create directories for configuration and persistent data
$ mkdir -p ./searxng/config/ ./searxng/data/
$ cd ./searxng/

# Run the container
$ docker run --name searxng -d \
    -p 8888:8080 \
    -v "./config/:/etc/searxng/" \
    -v "./data/:/var/cache/searxng/" \
    docker.io/searxng/searxng:latest
```

This will start SearXNG in the background, accessible at <http://localhost:8888>

<a id="container-management"></a>

## Management

List running containers:

```sh
$ docker container list
CONTAINER ID  IMAGE  ...  CREATED        PORTS                   NAMES
1af574997e63  ...    ...  3 minutes ago  0.0.0.0:8888->8080/tcp  searxng
```

Print the container logs:

```sh
$ docker container logs -f searxng
```

Access the container shell (troubleshooting):

```sh
$ docker container exec -it --user root searxng /bin/sh -l
/usr/local/searxng #
```

Stop and remove the container:

```sh
$ docker container stop searxng
$ docker container rm searxng
```

<a id="container-volumes"></a>

# Volumes

Two volumes are exposed that should be mounted to preserve its contents:

- `/etc/searxng`: Configuration files (settings.yml, etc.)
- `/var/cache/searxng`: Persistent data (faviconcache.db, etc.)

<a id="container-environment-variables"></a>

# Environment variables

The following environment variables can be configured:

- `$SEARXNG_*`: Controls the SearXNG configuration options, look out for
  environment `$SEARXNG_*` in [settings server](https://docs.searxng.org/admin/settings/settings_server.html#settings-server), [settings general](https://docs.searxng.org/admin/settings/settings_general.html#settings-general) and the [container/.env.example](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/container/.env.example) template.
- `$GRANIAN_*`: Controls the [Granian server options](https://docs.searxng.org/admin/installation-granian.html#granian-configuration).
- `$FORCE_OWNERSHIP`: Ensures mounted volumes/files are owned by the
  `searxng:searxng` user (default: `true`)

<a id="container-custom-certificates"></a>

# Custom certificates

You can mount `/usr/local/share/ca-certificates/` folder to add/remove
additional certificates as needed.

They will be available on container (re)start or when running
`update-ca-certificates` in the container shell.

This requires the container to be running with `root` privileges.

<a id="container-custom-images"></a>

# Custom images

To build your own SearXNG container image from source (please note, custom
container images are not officially supported):

```sh
$ git clone https://github.com/searxng/searxng.git
$ cd ./searxng/

# Run the container build script
$ make container

$ docker images
REPOSITORY                 TAG                  IMAGE ID  SIZE
localhost/searxng/searxng  2026.6.19-93f66bfb4  ...       265 MB
localhost/searxng/searxng  latest               ...       265 MB
localhost/searxng/searxng  builder              ...       687 MB
docker.io/searxng/base     searxng-builder      ...       565 MB
docker.io/searxng/base     searxng              ...       143 MB
```

# Migrate from `searxng-docker`

We expect the following source directory structure:

```sh
.
└── searxng-docker
    ├── searxng
    │   ├── favicons.toml
    │   ├── limiter.toml
    │   ├── settings.yml
    │   └── ...
    ├── .env
    ├── Caddyfile
    ├── docker-compose.yml
    └── ...
```

Create a brand new environment outside `searxng-docker` directory, following
[Container compose instancing setup](https://docs.searxng.org/admin/installation-docker.html#container-compose-instancing-setup).

Once up and running, stop the services and move the configuration files from
the old mount to the new one:

```sh
$ mv ./searxng-docker/searxng/* ./searxng/core-config/
```

If using Valkey features like bot protection (limiter), you will need to update
the URL hostname in [searx/settings.yml](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/settings.yml) file to `valkey` or
`searxng-valkey`.

If you have any environment variables in the old `.env` file, make
sure to add them to the new one.

Consider setting up a reverse proxy if exposing the instance to the public.

You should end with the following directory structure:

```sh
.
├── searxng
│   ├── core-config
│   │   ├── favicons.toml
│   │   ├── limiter.toml
│   │   ├── settings.yml
│   │   └── ...
│   ├── .env.example
│   ├── .env
│   └── docker-compose.yml
└── searxng-docker
    └── ...
```

If everything is working on the new environment, you can remove the old
`searxng-docker` directory and its contents.
