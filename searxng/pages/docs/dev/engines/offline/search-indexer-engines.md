> Pinned source for SearXNG master: [docs/dev/engines/offline/search-indexer-engines.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev/engines/offline/search-indexer-engines.rst)

# Local Search APIs

### further read

- `Comparison to alternatives <https://docs.meilisearch.com/learn/what_is_meilisearch/comparison_to_alternatives.html>`\_

### info

Initial sponsored by `Search and Discovery Fund <https://nlnet.nl/discovery>`\_ of [NLnet Foundation](https://nlnet.nl/).

Administrators might find themselves wanting to integrate locally running search
engines.  The following ones are supported for now:

- Elasticsearch
- Meilisearch
- Solr

Each search engine is powerful, capable of full-text search.  All of the engines
above are added to `settings.yml` just commented out, as you have to
`base_url` for all them.

Please note that if you are not using HTTPS to access these engines, you have to
enable HTTP requests by setting `enable_http` to `True`.

Furthermore, if you do not want to expose these engines on a public instance,
you can still add them and limit the access by setting `tokens` as described
in section [private engines](https://docs.searxng.org/admin/settings/settings_engines.html#private-engines).

<a id="engine-meilisearch"></a>

# MeiliSearch Engine

#### `searx.engines.meilisearch`

Static Python API reference (`automodule`).

<a id="engine-elasticsearch"></a>

# Elasticsearch Engine

#### `searx.engines.elasticsearch`

Static Python API reference (`automodule`).

<a id="engine-solr"></a>

# Solr Engine

#### `searx.engines.solr`

Static Python API reference (`automodule`).
