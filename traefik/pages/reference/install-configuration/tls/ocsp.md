> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/install-configuration/tls/ocsp.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/install-configuration/tls/ocsp.md)

# OCSP

Check certificate status and perform OCSP stapling.

## Overview

### OCSP Stapling

When OCSP is enabled, Traefik checks the status of every certificate in the store that provides an OCSP responder URL,
including the default certificate, and staples the OCSP response to the TLS handshake.
The OCSP check is performed when the certificate is loaded,
and once every hour until it is successful at the halfway point before the update date.

### Caching

Traefik caches the OCSP response as long as the associated certificate is provided by the configuration.
When a certificate is no longer provided,
the OCSP response has a 24 hour TTL waiting to be provided again or eventually removed.
The OCSP response is cached in memory and is not persisted between Traefik restarts.

## Configuration

### General

Enabling OCSP is part of the [install configuration](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/boot-environment).
It can be defined by using a file (YAML or TOML) or CLI arguments:

**File (YAML)**

```yaml
## Static configuration
ocsp: {}
```

**File (TOML)**

```toml
## Static configuration
[ocsp]
```

**CLI**

```bash
## Static configuration
--ocsp=true
```

### Responder Overrides

The `responderOverrides` option defines the OCSP responder URLs to use instead of the one provided by the certificate.
This is useful when you want to use a different OCSP responder.

**File (YAML)**

```yaml
## Static configuration
ocsp:
  responderOverrides:
    foo: bar
```

**File (TOML)**

```toml
## Static configuration
[ocsp]
  [ocsp.responderOverrides]
    foo = "bar"
```

**CLI**

```bash
## Static configuration
--ocsp.responderoverrides.foo=bar
```
