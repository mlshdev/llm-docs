> Pinned source for SearXNG master: [docs/dev/plugins/self_info.rst](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/dev/plugins/self_info.rst)

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
