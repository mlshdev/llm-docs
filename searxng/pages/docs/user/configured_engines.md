> Pinned source for SearXNG master: [docs/user/configured_engines.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/docs/user/configured_engines.rst)

<a id="configured-engines"></a>

# Configured Engines

### Further reading ..

- [settings categories\_as\_tabs](https://docs.searxng.org/admin/settings/settings_categories_as_tabs.html#settings-categories-as-tabs)
- [engines-dev](https://docs.searxng.org/dev/engines/engine_overview.html#engines-dev)
- [settings engines](https://docs.searxng.org/admin/settings/settings_engines.html#settings-engines)
- [general engine configuration](https://docs.searxng.org/dev/engines/engine_overview.html#general-engine-configuration)

SearXNG supports available search engines of which
available are enabled by default.

Engines can be assigned to multiple [categories](https://docs.searxng.org/admin/settings/settings_engines.html#engine-categories).
The UI displays the tabs that are configured in [categories\_as\_tabs](https://docs.searxng.org/admin/settings/settings_categories_as_tabs.html#settings-categories-as-tabs).  In addition to these UI categories (also
called *tabs*), engines can be queried by their name or the categories they
belong to, by using a [!bing syntax](https://docs.searxng.org/user/search-syntax.html#search-syntax).

## tab `!available`

```

* - `5` Engines configured by default (in [settings.yml](https://docs.searxng.org/dev/engines/engine_overview.html#engine-settings))
  - `3` [Supported features](https://docs.searxng.org/dev/engines/engine_overview.html#engine-file)

* - Name
  - !bang
  - Module
  - Disabled
  - Timeout
  - Weight
  - Paging
  - Locale
  - Safe search
  - Time range


* - [available](available)
    (available)
  - `!available`
    `searx.engines.available`
    [available](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/searx/engines/available.py)
  - available
  - available
  - available
  - available
  - available
  - available
  - available
  - `3` not applicable (available)
```
