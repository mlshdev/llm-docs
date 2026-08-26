> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/install-configuration/providers/kv/zk.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/install-configuration/providers/kv/zk.md)

# Traefik & ZooKeeper

## Configuration Example

You can enable the ZooKeeper provider as detailed below:

**File (YAML)**

```yaml
providers:
  zooKeeper: {}
```

**File (TOML)**

```toml
[providers.zooKeeper]
```

**CLI**

```bash
--providers.zookeeper=true
```

## Configuration Options

| Field                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                          | Default          | Required |
| :---------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :------- |
| <a id="opt-providers-providersThrottleDuration"></a>`providers.providersThrottleDuration` | Minimum amount of time to wait for, after a configuration reload, before taking into account any new configuration refresh event.<br />If multiple events occur within this time, only the most recent one is taken into account, and all others are discarded.<br />**This option cannot be set per provider, but the throttling algorithm applies to each of them independently.** | 2s               | No       |
| <a id="opt-providers-zooKeeper-endpoints"></a>`providers.zooKeeper.endpoints`             | Defines the endpoint to access ZooKeeper.                                                                                                                                                                                                                                                                                                                                            | "127.0.0.1:2181" | Yes      |
| <a id="opt-providers-zooKeeper-rootKey"></a>`providers.zooKeeper.rootKey`                 | Defines the root key for the configuration.                                                                                                                                                                                                                                                                                                                                          | "traefik"        | Yes      |
| <a id="opt-providers-zooKeeper-username"></a>`providers.zooKeeper.username`               | Defines a username with which to connect to zooKeeper.                                                                                                                                                                                                                                                                                                                               | ""               | No       |
| <a id="opt-providers-zooKeeper-password"></a>`providers.zooKeeper.password`               | Defines a password for connecting to zooKeeper.                                                                                                                                                                                                                                                                                                                                      | ""               | No       |

## Routing Configuration

See the dedicated section in [routing](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/other-providers/kv).
