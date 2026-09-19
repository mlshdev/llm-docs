> Pinned source for SearXNG master: [docs/admin/settings/settings.rst](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/admin/settings/settings.rst)

<a id="settings-yml"></a>

# `settings.yml`

This page describe the options possibilities of the [searx/settings.yml](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/settings.yml)
file.

### Further reading ..

- [use\_default\_settings.yml](https://docs.searxng.org/admin/installation-searxng.html#use-default-settings-yml)
- [search API](https://docs.searxng.org/dev/search_api.html#search-api)

<a id="settings-location"></a>

# settings.yml location

The initial `settings.yml` we be load from these locations:

1. the full path specified in the `SEARXNG_SETTINGS_PATH` environment variable.
2. `/etc/searxng/settings.yml`

If these files don't exist (or are empty or can't be read), SearXNG uses the
[searx/settings.yml](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/settings.yml) file.  Read [settings use\_default\_settings](https://docs.searxng.org/admin/settings/settings.html#settings-use-default-settings) to
see how you can simplify your *user defined* `settings.yml`.

<a id="settings-use-default-settings"></a>

# use\_default\_settings

### `use_default_settings: true`

- [settings location](https://docs.searxng.org/admin/settings/settings.html#settings-location)
- [use\_default\_settings.yml](https://docs.searxng.org/admin/installation-searxng.html#use-default-settings-yml)
- [/etc/searxng/settings.yml](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/utils/templates/etc/searxng/settings.yml)

The user defined `settings.yml` is loaded from the [settings location](https://docs.searxng.org/admin/settings/settings.html#settings-location)
**and can relied on the default configuration [searx/settings.yml](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/settings.yml) using:**

`use_default_settings: true`

**`server:`**

In the following example, the actual settings are the default settings defined
in [searx/settings.yml](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/settings.yml) with the exception of the `secret_key` and
the `bind_address`:

```yaml
use_default_settings: true
server:
    secret_key: "ultrasecretkey"   # change this!
    bind_address: "[::]"
```

**`engines:`**

With `use_default_settings: true`, each settings can be override in a
similar way, the `engines` section is merged according to the engine
`name`.  In this example, SearXNG will load all the default engines, will
enable the `bing` engine and define a [token](https://docs.searxng.org/admin/settings/settings_engines.html#private-engines) for
the arch linux engine:

```yaml
use_default_settings: true
server:
  secret_key: "ultrasecretkey"   # change this!
engines:
  - name: arch linux wiki
    tokens: ['$ecretValue']
  - name: bing
    disabled: false
```

**`engines:` / `remove:`**

It is possible to remove some engines from the default settings. The following
example is similar to the above one, but SearXNG doesn't load the the google
engine:

```yaml
use_default_settings:
  engines:
    remove:
      - google
server:
  secret_key: "ultrasecretkey"   # change this!
engines:
  - name: arch linux wiki
    tokens: ['$ecretValue']
```

**`engines:` / `keep_only:`**

As an alternative, it is possible to specify the engines to keep. In the
following example, SearXNG has only two engines:

```yaml
use_default_settings:
  engines:
    keep_only:
      - google
      - duckduckgo
server:
  secret_key: "ultrasecretkey"   # change this!
engines:
  - name: google
    tokens: ['$ecretValue']
  - name: duckduckgo
    tokens: ['$ecretValue']
```
