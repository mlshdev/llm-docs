> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/jit.sgml#jit-configuration](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/jit.sgml%23jit-configuration)
> Canonical documentation: https://www.postgresql.org/docs/18/jit-configuration.html

# Configuration

The configuration variable [Query Planning](./runtime-config-query.md#guc-jit) determines whether JIT compilation is enabled or disabled. If it is enabled, the configuration variables [Query Planning](./runtime-config-query.md#guc-jit-above-cost), [Query Planning](./runtime-config-query.md#guc-jit-inline-above-cost), and [Query Planning](./runtime-config-query.md#guc-jit-optimize-above-cost) determine whether JIT compilation is performed for a query, and how much effort is spent doing so.

[Client Connection Defaults](./runtime-config-client.md#guc-jit-provider) determines which JIT implementation is used. It is rarely required to be changed. See [Pluggable JIT Providers](./jit-extensibility.md#pluggable-jit-providers).

For development and debugging purposes a few additional configuration parameters exist, as described in [Developer Options](./runtime-config-developer.md).
