> Pinned source for SearXNG master: [docs/dev/plugins/hash_plugin.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev/plugins/hash_plugin.rst)

<a id="hash-plugin-plugin"></a>

# Hash Values

<a id="api-searx-plugins-hash-plugin-sxngplugin"></a>

#### `SXNGPlugin(Plugin)`

Plugin converts strings to different hash digests.  The results are
displayed in area for the "answers".

<a id="api-searx-plugins-hash-plugin-sxngplugin-post-search"></a>

##### `post_search(self, request: "SXNG_Request", search: "SearchWithPlugins") -> EngineResults`

Returns a result list only for the first page.
