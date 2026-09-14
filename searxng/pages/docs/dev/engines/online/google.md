> Pinned source for SearXNG master: [docs/dev/engines/online/google.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/docs/dev/engines/online/google.rst)

<a id="google-engines"></a>

# Google Engines

<a id="google-api"></a>

# Google API

<a id="query-parameter-definitions"></a>
<https://developers.google.com/custom-search/docs/xml_results#WebSearch_Query_Parameter_Definitions>

SearXNG's implementation of the Google API is mainly done in
`get_google_info`.

For detailed description of the *REST-full* API see: `Query Parameter
Definitions`\_.  The linked API documentation can sometimes be helpful during
reverse engineering.  However, we cannot use it in the freely accessible WEB
services; not all parameters can be applied and some engines are more *special*
than other (e.g. [google news engine](https://docs.searxng.org/dev/engines/online/google.html#google-news-engine)).

<a id="google-web-engine"></a>

# Google WEB

<a id="api-searx-engines-google"></a>

#### `google(domain: str, timeout: int) -> tuple[None | bytes, None | str]`

Favicon Resolver from google.com

<a id="google-autocomplete"></a>

# Google Autocomplete

<a id="api-searx-autocomplete-google-complete"></a>

#### `google_complete(query: str, sxng_locale: str) -> list[str]`

Autocomplete from Google.  Supports Google's languages
(`searx.engines.google.get_google_info`) by using the async REST
API:

```python
https://www.google.com/complete/search?{args}
```

<a id="google-images-engine"></a>

# Google Images

#### `searx.engines.google_images`

Static Python API reference (`automodule`).

<a id="google-videos-engine"></a>

# Google Videos

#### `searx.engines.google_videos`

Static Python API reference (`automodule`).

<a id="google-news-engine"></a>

# Google News

#### `searx.engines.google_news`

Static Python API reference (`automodule`).

<a id="google-scholar-engine"></a>

# Google Scholar

#### `searx.engines.google_scholar`

Static Python API reference (`automodule`).
