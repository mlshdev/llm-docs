> Pinned source for SearXNG master: [docs/admin/settings/settings_plugins.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/admin/settings/settings_plugins.rst)

<a id="settings-plugins"></a>

# `plugins:`

> **Attention**
> The `enabled_plugins:` section in SearXNG's settings no longer exists.
> There is no longer a distinction between built-in and external plugin, all
> plugins are registered via the settings in the `plugins:` section.

### Further reading ..

- [plugins admin](https://docs.searxng.org/admin/plugins.html#plugins-admin)
- [dev plugin](https://docs.searxng.org/dev/plugins/development.html#dev-plugin)

In SearXNG, plugins can be registered in the `PluginStore` via a fully qualified class name.

A configuration (`PluginCfg`) can be
transferred to the plugin, e.g. to activate it by default / *opt-in* or
*opt-out* from user's point of view.

Please note that some plugins, such as the [hostnames plugin](https://docs.searxng.org/dev/plugins/hostnames.html#hostnames-plugin) plugin,
require further configuration before they can be made available for selection.

By default the [settings built in plugins](https://docs.searxng.org/admin/settings/settings_plugins.html#settings-built-in-plugins) are loaded.  To change the list
of plugins to be loaded, the value for `plugins:` in
`/etc/searxng/settings.yml` must be overwritten.

Following is an example that uses [settings use\_default\_settings](https://docs.searxng.org/admin/settings/settings.html#settings-use-default-settings) and only
two plugins are registered: the calculator can be activated by the user and the
unit converter is active by default.

```yaml
use_default_settings: true

plugins:

  searx.plugins.calculator.SXNGPlugin:
    active: false

  searx.plugins.unit_converter.SXNGPlugin:
    active: true
```

To prevent any plugins from loading, the following setting can be used:

```yaml
use_default_settings: true

plugins: {}
```

<a id="settings-built-in-plugins"></a>

# built-in plugins

The built-in plugins are all located in the namespace `searx.plugins`.

```yaml
plugins:

  searx.plugins.calculator.SXNGPlugin:
    active: true

  searx.plugins.infinite_scroll.SXNGPlugin:
    active: false

  searx.plugins.hash_plugin.SXNGPlugin:
    active: true

  searx.plugins.self_info.SXNGPlugin:
    active: true

  searx.plugins.tracker_url_remover.SXNGPlugin:
    active: true

  searx.plugins.unit_converter.SXNGPlugin:
    active: true

  searx.plugins.ahmia_filter.SXNGPlugin:
    active: true

  searx.plugins.hostnames.SXNGPlugin:
    active: true

  searx.plugins.oa_doi_rewrite.SXNGPlugin:
    active: false

  searx.plugins.tor_check.SXNGPlugin:
    active: false
```

<a id="settings-external-plugins"></a>

# external plugins

SearXNG supports [external plugins](https://docs.searxng.org/dev/plugins/development.html#dev-plugin) / there is no need to
install one, SearXNG runs out of the box.

**[Only show green hosted results](https://docs.searxng.org/admin/settings/settings_plugins.html#only-show-green-hosted-results):**

SearXNG plugin to check if a domain is part of the Green WEB.

**[SearXNG BM25 Reranker](https://docs.searxng.org/admin/settings/settings_plugins.html#searxng-bm25-reranker):**

SearXNG plugin that reranks search results using BM25 text relevance scoring
to improve search quality.

<a id="only-show-green-hosted-results"></a>
<https://github.com/return42/tgwf-searx-plugins/>

<a id="searxng-bm25-reranker"></a>
<https://github.com/Oaklight/searxng-bm25-reranker>
