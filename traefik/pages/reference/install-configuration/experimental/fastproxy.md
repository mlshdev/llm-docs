> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/install-configuration/experimental/fastproxy.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/install-configuration/experimental/fastproxy.md)

# Traefik FastProxy Experimental Configuration

## Overview

This guide provides instructions on how to configure and use the new experimental `fastProxy` install configuration option in Traefik. The `fastProxy` option introduces a high-performance reverse proxy designed to enhance the performance of routing.

> **Limitations**
> Please note that the new fast proxy implementation does not work with HTTP/2.
> This means that when a H2C or HTTPS request with [HTTP2 enabled](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/serverstransport#opt-disableHTTP2) is sent to a backend, the fallback proxy is the regular one.
>
> Additionnaly, observability features like tracing and OTEL semconv metrics are not supported for the moment.
> **Experimental**
> The `fastProxy` option is currently experimental and subject to change in future releases.
> Use with caution in production environments.

## Enabling FastProxy

The fastProxy option is an install configuration parameter.
To enable it, you need to configure it in your Traefik install configuration

**File (YAML)**

```yaml
experimental:
  fastProxy: {}
```

**File (TOML)**

```toml
[experimental.fastProxy]
```

**CLI**

```bash
--experimental.fastProxy
```

## Configuration Options

| Option                                                                      | Type   | Default | Description                                         |
| --------------------------------------------------------------------------- | ------ | ------- | --------------------------------------------------- |
| <a id="opt-experimental-fastProxy-debug"></a>`experimental.fastProxy.debug` | `bool` | `false` | Enable debug mode for the FastProxy implementation. |
