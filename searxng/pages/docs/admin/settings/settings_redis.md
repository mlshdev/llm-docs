> Pinned source for SearXNG master: [docs/admin/settings/settings_redis.rst](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/admin/settings/settings_redis.rst)

<a id="settings-redis"></a>

# `redis:`

<a id="valkey"></a>

> **Attention**
> SearXNG is switching from the Redis DB to Valkey\_. The configuration
> description of Valkey\_ in SearXNG can be found here: [settings](https://docs.searxng.org/admin/settings/settings_valkey.html#settings-valkey).

If you have built and installed a local Redis DB for SearXNG, it is recommended
to uninstall it now and replace it with the installation of a Valkey\_ DB.

<a id="redis-developer-notes"></a>

# Redis Developer Notes

To uninstall SearXNG's local Redis DB you can use:

```sh
# stop your SearXNG instance
$ ./utils/searxng.sh remove.redis
```

Remove the Redis DB in your YAML setting:

```yaml
redis:
  url: unix:///usr/local/searxng-redis/run/redis.sock?db=0
```

To install Valkey\_ read: [Valkey Developer Notes](https://docs.searxng.org/admin/settings/settings_valkey.html#valkey-developer-notes)
