> Release-pinned source for Traefik Proxy v3.7.13: [docs/content/reference/install-configuration/tls/certificate-resolvers/overview.md](https://github.com/traefik/traefik/blob/fc92cc118a0557a029c7019d5ee06665127b0f13/docs/content/reference/install-configuration/tls/certificate-resolvers/overview.md)

In Traefik, TLS Certificates can be generated using Certificates Resolvers.

In Traefik, two certificate resolvers exist:

- [`acme`](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme): It allows generating ACME certificates stored in a file (not distributed).
- [`tailscale`](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/tailscale): It allows provisioning TLS certificates for internal Tailscale services.

The Certificates resolvers are defined in the static configuration.

> **Referencing a certificate resolver**
> Defining a certificate resolver does not imply that routers are going to use it automatically.
> Each router or entrypoint that is meant to use the resolver must explicitly reference it.
