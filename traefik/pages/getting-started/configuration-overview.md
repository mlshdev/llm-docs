> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/getting-started/configuration-overview.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/getting-started/configuration-overview.md)

# Configuration Introduction

How the Magic Happens

Configuration in Traefik can refer to two different things:

- The install (startup) configuration (formerly known as the *static configuration*)
- The routing configuration (formerly known as the *dynamic configuration*)

Elements in the *install configuration* set up connections to [providers](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/overview) and define the [entrypoints](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) Traefik will listen to (these elements don't change often).

The *routing configuration* contains everything that defines how the requests are handled by your system.
This configuration can change and is seamlessly hot-reloaded, without any request interruption or connection loss.

> **Incompatible Configuration**
> Please be aware that the old configurations for Traefik v1.x are NOT compatible with the v2.x config as of now.
> If you are running v2, please ensure you are using a v2 configuration.

## The Routing Configuration

Traefik gets its *routing configuration* from [providers](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/overview): whether an orchestrator, a service registry, or a plain old configuration file.

Since this configuration is specific to your infrastructure choices, we invite you to refer to the [dedicated section of this documentation](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/dynamic-configuration-methods).

> **Info**
> In the [Quick Start example](https://doc.traefik.io/traefik/v3.7/getting-started/docker), the whoami application routing configuration comes from docker in the form of a label attached to the whoami container.
> **HTTPS Certificates also belong to the routing configuration.**
> You can add / update / remove them without restarting your Traefik instance.

## The Install Configuration

There are three different, **mutually exclusive** (i.e. you can use only one at the same time), ways to define install configuration options in Traefik:

1. In a configuration file
2. In the command-line arguments
3. As environment variables

These ways are evaluated in the order listed above.

If no value was provided for a given option, a default value applies.
Moreover, if an option has sub-options, and any of these sub-options is not specified, a default value will apply as well.

For example, the `--providers.docker` option is enough by itself to enable the docker provider, even though sub-options like `--providers.docker.endpoint` exist.
Once positioned, this option sets (and resets) all the default values of the sub-options of `--providers.docker`.

### Configuration File

At startup, Traefik searches for install configuration in a file named `traefik.yml` (or `traefik.yaml` or `traefik.toml`) in:

- `/etc/traefik/`
- `$XDG_CONFIG_HOME/`
- `$HOME/.config/`
- `.` (*the working directory*).

You can override this using the `configFile` argument.

```bash
traefik --configFile=foo/bar/myconfigfile.yml
```

### Arguments

To get the list of all available arguments:

```bash
traefik --help

# or

docker run traefik[:version] --help
# ex: docker run traefik:v3.7 --help
```

Check the [CLI reference](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/configuration-options "Link to CLI reference overview") for an overview about all available arguments.

### Environment Variables

All available environment variables can be found in the [install configuration environment overview](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/configuration-options).

## Available Configuration Options

All the configuration options are documented in their related section.

You can browse the available features in the menu, the [providers](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/overview), or the [routing section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/dynamic-configuration-methods) to see them in action.
