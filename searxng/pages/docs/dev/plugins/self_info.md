> Pinned source for SearXNG master: [docs/dev/plugins/self_info.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/dev/plugins/self_info.rst)

<a id="self-info-plugin"></a>

# Self-Info

<a id="api-searx-plugins-self-info-sxngplugin"></a>

#### `SXNGPlugin(Plugin)`

Simple plugin that displays information about user's request, including
the IP or HTTP User-Agent.  The information is displayed in area for the
"answers".

<a id="api-searx-plugins-self-info-sxngplugin-post-search"></a>

##### `post_search(self, request: "SXNG_Request", search: "SearchWithPlugins") -> EngineResults`

Returns a result list only for the first page.
