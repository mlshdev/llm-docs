> Pinned source for Traefik Proxy v3.7.18: [docs/content/reference/install-configuration/tls/certificate-resolvers/overview.md](https://github.com/traefik/traefik/blob/89e11274ead687094b871f8a4a75e90603773ef5/docs/content/reference/install-configuration/tls/certificate-resolvers/overview.md)

In Traefik, TLS Certificates can be generated using Certificates Resolvers.

In Traefik, two certificate resolvers exist:

- [`acme`](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme): It allows generating ACME certificates stored in a file (not distributed).
- [`tailscale`](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/tailscale): It allows provisioning TLS certificates for internal Tailscale services.

The Certificates resolvers are defined in the static configuration.

> **Referencing a certificate resolver**
> Defining a certificate resolver does not imply that routers are going to use it automatically.
> Each router or entrypoint that is meant to use the resolver must explicitly reference it.
