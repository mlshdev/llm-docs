> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/install-configuration/providers/kv/etcd.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/install-configuration/providers/kv/etcd.md)

# Traefik & etcd

## Configuration Example

You can enable the etcd provider as detailed below:

**File (YAML)**

```yaml
providers:
  etcd: {}
```

**File (TOML)**

```toml
[providers.etcd]
```

**CLI**

```bash
--providers.etcd=true
```

## Configuration Options

| Field                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                          | Default          | Required |
| :-------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :------- |
| <a id="opt-providers-providersThrottleDuration"></a>`providers.providersThrottleDuration`     | Minimum amount of time to wait for, after a configuration reload, before taking into account any new configuration refresh event.<br />If multiple events occur within this time, only the most recent one is taken into account, and all others are discarded.<br />**This option cannot be set per provider, but the throttling algorithm applies to each of them independently.** | 2s               | No       |
| <a id="opt-providers-etcd-endpoints"></a>`providers.etcd.endpoints`                           | Defines the endpoint to access etcd.                                                                                                                                                                                                                                                                                                                                                 | "127.0.0.1:2379" | Yes      |
| <a id="opt-providers-etcd-rootKey"></a>`providers.etcd.rootKey`                               | Defines the root key for the configuration.                                                                                                                                                                                                                                                                                                                                          | "traefik"        | Yes      |
| <a id="opt-providers-etcd-username"></a>`providers.etcd.username`                             | Defines a username with which to connect to etcd.                                                                                                                                                                                                                                                                                                                                    | ""               | No       |
| <a id="opt-providers-etcd-password"></a>`providers.etcd.password`                             | Defines a password for connecting to etcd.                                                                                                                                                                                                                                                                                                                                           | ""               | No       |
| <a id="opt-providers-etcd-tls"></a>`providers.etcd.tls`                                       | Defines the TLS configuration used for the secure connection to etcd.                                                                                                                                                                                                                                                                                                                | -                | No       |
| <a id="opt-providers-etcd-tls-ca"></a>`providers.etcd.tls.ca`                                 | Defines the path to the certificate authority used for the secure connection to etcd, it defaults to the system bundle.                                                                                                                                                                                                                                                              | ""               | No       |
| <a id="opt-providers-etcd-tls-cert"></a>`providers.etcd.tls.cert`                             | Defines the path to the public certificate used for the secure connection to etcd. When using this option, setting the `key` option is required.                                                                                                                                                                                                                                     | ""               | No       |
| <a id="opt-providers-etcd-tls-key"></a>`providers.etcd.tls.key`                               | Defines the path to the private key used for the secure connection to etcd. When using this option, setting the `cert` option is required.                                                                                                                                                                                                                                           | ""               | No       |
| <a id="opt-providers-etcd-tls-insecureSkipVerify"></a>`providers.etcd.tls.insecureSkipVerify` | Instructs the provider to accept any certificate presented by etcd when establishing a TLS connection, regardless of the hostnames the certificate covers.                                                                                                                                                                                                                           | false            | No       |

## Routing Configuration

See the dedicated section in [routing](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/other-providers/kv).
