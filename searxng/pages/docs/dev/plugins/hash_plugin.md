> Pinned source for SearXNG master: [docs/dev/plugins/hash_plugin.rst](https://github.com/searxng/searxng/blob/1c10abe2d3e4ab7ddcc4e9da1a7d07dc7ca7f8f4/docs/dev/plugins/hash_plugin.rst)

<a id="hash-plugin-plugin"></a>

# Hash Values

<a id="api-searx-plugins-hash-plugin-sxngplugin"></a>

#### `SXNGPlugin(Plugin)`

Plugin converts strings to different hash digests.  The results are
displayed in area for the "answers".

<a id="api-searx-plugins-hash-plugin-sxngplugin-post-search"></a>

##### `post_search(self, request: "SXNG_Request", search: "SearchWithPlugins") -> EngineResults`

Returns a result list only for the first page.
