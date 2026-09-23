> Pinned source for SearXNG master: [docs/dev/plugins/hash_plugin.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/dev/plugins/hash_plugin.rst)

<a id="hash-plugin-plugin"></a>

# Hash Values

<a id="api-searx-plugins-hash-plugin-sxngplugin"></a>

#### `SXNGPlugin(Plugin)`

Plugin converts strings to different hash digests.  The results are
displayed in area for the "answers".

<a id="api-searx-plugins-hash-plugin-sxngplugin-post-search"></a>

##### `post_search(self, request: "SXNG_Request", search: "SearchWithPlugins") -> EngineResults`

Returns a result list only for the first page.
