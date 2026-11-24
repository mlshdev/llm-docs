> Pinned source for Traefik Proxy v3.8.0: [docs/content/reference/install-configuration/experimental/plugins.md](https://github.com/traefik/traefik/blob/644b1f19cf031ec079cca10fad0c86e5ab7181b7/docs/content/reference/install-configuration/experimental/plugins.md)

# Traefik Plugins Experimental Configuration

## Overview

This guide provides instructions on how to configure and use the new experimental `plugins` install configuration option in Traefik. The `plugins` option introduces a system to extend Traefik capabilities with custom middlewares and providers.

> **Experimental**
> The `plugins` option is currently experimental and subject to change in future releases.
> Use with caution in production environments.

## Enabling Plugins

The plugins option is an install configuration parameter.
To enable a plugin, you need to define it in your Traefik install configuration

**File (YAML)**

```yaml
experimental:
  plugins:
    plugin-name: # The name of the plugin in the routing configuration
      moduleName: "github.com/github-organization/github-repository" # The plugin module name
      version: "vX.XX.X" # The version to use
```

**File (TOML)**

```toml
[experimental.plugins.plugin-name]
  moduleName = "github.com/github-organization/github-repository" # The plugin module name
  version = "vX.XX.X" # The version to use
```

**CLI**

```bash
# The plugin module name
# With plugin-name the name of the plugin in the routing configuration
--experimental.plugins.plugin-name.modulename=github.com/github-organization/github-repository
--experimental.plugins.plugin-name.version=vX.XX.X # The version to use
```

To learn more about how to add a new plugin to a Traefik instance, please refer to the [developer documentation](https://plugins.traefik.io/install).

### Plugin Options

| Field                                                       | Description                                                                                                                                                              | Type      | Required |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------- |
| <a id="opt-moduleName"></a>`moduleName`                     | Plugin's module name.                                                                                                                                                    | string    | Yes      |
| <a id="opt-version"></a>`version`                           | Plugin's version.                                                                                                                                                        | string    | Yes      |
| <a id="opt-hash"></a>`hash`                                 | Plugin's hash to validate.                                                                                                                                               | string    | No       |
| <a id="opt-settings"></a>`settings`                         | Plugin's settings (wasm plugins; `useUnsafe` also applies to Yaegi plugins, `mounts` and `fileMapping` to Yaegi v2 plugins).                                             | object    | No       |
| <a id="opt-settings-envs"></a>`settings.envs`               | Environment variables to forward to the wasm guest.                                                                                                                      | \[]string | No       |
| <a id="opt-settings-mounts"></a>`settings.mounts`           | Directory to mount to the wasm guest. For Yaegi v2 plugins, the only directories the plugin can reach by path (`dir` or `dir:ro`). No mount gives the whole file system. | \[]string | No       |
| <a id="opt-settings-useUnsafe"></a>`settings.useUnsafe`     | Allow the plugin to use unsafe and syscall packages.                                                                                                                     | bool      | No       |
| <a id="opt-settings-fileMapping"></a>`settings.fileMapping` | Allow a Yaegi v2 plugin to lock and map its own files (flock, mmap). Requires `useUnsafe`.                                                                               | bool      | No       |

## Local Plugins

Local plugins allow you to use plugins from a local directory, without publishing them to the Traefik plugin catalog.

**File (YAML)**

```yaml
experimental:
  localPlugins:
    plugin-name: # The name of the plugin in the routing configuration
      moduleName: "github.com/github-organization/github-repository" # The plugin module name
```

**File (TOML)**

```toml
[experimental.localPlugins.plugin-name]
  moduleName = "github.com/github-organization/github-repository" # The plugin module name
```

**CLI**

```bash
# The plugin module name
# With plugin-name the name of the plugin in the routing configuration
--experimental.localplugins.plugin-name.modulename=github.com/github-organization/github-repository
```

### Local Plugin Options

| Field                                                         | Description                                                                                                                                                              | Type      | Required |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------- |
| <a id="opt-moduleName-2"></a>`moduleName`                     | Plugin's module name.                                                                                                                                                    | string    | Yes      |
| <a id="opt-settings-2"></a>`settings`                         | Plugin's settings (wasm plugins; `useUnsafe` also applies to Yaegi plugins, `mounts` and `fileMapping` to Yaegi v2 plugins).                                             | object    | No       |
| <a id="opt-settings-envs-2"></a>`settings.envs`               | Environment variables to forward to the wasm guest.                                                                                                                      | \[]string | No       |
| <a id="opt-settings-mounts-2"></a>`settings.mounts`           | Directory to mount to the wasm guest. For Yaegi v2 plugins, the only directories the plugin can reach by path (`dir` or `dir:ro`). No mount gives the whole file system. | \[]string | No       |
| <a id="opt-settings-useUnsafe-2"></a>`settings.useUnsafe`     | Allow the plugin to use unsafe and syscall packages.                                                                                                                     | bool      | No       |
| <a id="opt-settings-fileMapping-2"></a>`settings.fileMapping` | Allow a Yaegi v2 plugin to lock and map its own files (flock, mmap). Requires `useUnsafe`.                                                                               | bool      | No       |

## Runtime Version

> **Yaegi plugins only**
> The `defaultRuntimeVersion` option and the `runtimeVersion` manifest field only apply to Yaegi plugins.
> They have no effect on Wasm plugins.
> Yaegi plugins run with Yaegi v1 by default.
> The `defaultRuntimeVersion` option selects the version of the Yaegi interpreter, `v1` (default) or `v2`, for all the Yaegi plugins.

**File (YAML)**

```yaml
experimental:
  defaultRuntimeVersion: v2
```

**File (TOML)**

```toml
[experimental]
  defaultRuntimeVersion = "v2"
```

**CLI**

```bash
--experimental.defaultruntimeversion=v2
```

A Yaegi plugin can also ask for Yaegi v2 in its manifest (`.traefik.yml`), with `runtimeVersion: v2`.
Such a plugin always runs with Yaegi v2, whatever the value of the `defaultRuntimeVersion` option.
A manifest cannot ask for Yaegi v1.

Yaegi v2 only loads plugins that the Go compiler accepts, and limits the CPU time, the memory and the number of goroutines of a plugin.
A plugin that Yaegi v2 cannot load is reported as a plugin load failure.
