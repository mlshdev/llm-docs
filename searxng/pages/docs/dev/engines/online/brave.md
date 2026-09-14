> Pinned source for SearXNG master: [docs/dev/engines/online/brave.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/docs/dev/engines/online/brave.rst)

# Brave Engines

Brave offers two different engines for SearXNG:

1. The standard engine (`brave`) uses the web interface.
2. The API engine (`braveapi`) uses the official REST API.

<a id="brave-engine"></a>

## Brave Standard Engine

<a id="api-searx-engines-brave"></a>

#### `brave(query: str, _sxng_locale: str) -> list[str]`

<a id="braveapi-engine"></a>

## Brave API Engine

#### `searx.engines.braveapi`

Static Python API reference (`automodule`).

The API engine requires an API key from Brave. This can be obtained from the
[API Dashboard](https://api-dashboard.search.brave.com/).
