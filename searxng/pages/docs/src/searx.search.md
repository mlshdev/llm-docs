> Pinned source for SearXNG master: [docs/src/searx.search.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/src/searx.search.rst)

<a id="searx-search"></a>

# Search

<a id="api-searx-search-models-engineref"></a>

#### `EngineRef`

Reference by names to an engine and category

<a id="api-searx-search-models-searchquery"></a>

#### `SearchQuery`

container for all the search parameters (query, language, etc...)

<a id="api-searx-search-search"></a>

#### `Search`

Search information container

<a id="attribute-search-query"></a>

##### `search_query`

<a id="attribute-result-container"></a>

##### `result_container`

<a id="api-search-searx-results-resultcontainer"></a>

#### `ResultContainer`

In the result container, the results are collected, sorted and duplicates
will be merged.

<a id="api-searx-search-searchwithplugins"></a>

#### `SearchWithPlugins(Search)`

Inherit from the Search class, add calls to the plugins.

<a id="attribute-search-query"></a>

##### `search_query`

<a id="attribute-result-container"></a>

##### `result_container`

<a id="attribute-ordered-plugin-list"></a>

##### `ordered_plugin_list`

<a id="attribute-request"></a>

##### `request`

<a id="api-search-searx-results-resultcontainer"></a>

#### `ResultContainer`

In the result container, the results are collected, sorted and duplicates
will be merged.
