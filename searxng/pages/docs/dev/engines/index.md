> Pinned source for SearXNG master: [docs/dev/engines/index.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/dev/engines/index.rst)

<a id="engine-implementations"></a>

# Engine Implementations

- [enginelib](https://docs.searxng.org/enginelib.html)
- [engines](https://docs.searxng.org/engines.html)
- [engine\_overview](https://docs.searxng.org/engine_overview.html)

# ResultList and engines

<a id="api-searx-result-types-resultlist"></a>

#### `ResultList(list[Result | LegacyResult], abc.ABC)`

Base class of all result lists (abstract).

<a id="api-searx-result-types-engineresults"></a>

#### `EngineResults(ResultList)`

Result list that should be used by engine developers.  For convenience,
engine developers don't need to import types / see `ResultList.types`.

```python
from searx.result_types import EngineResults
...
def response(resp) -> EngineResults:
    res = EngineResults()
    ...
    res.add( res.types.Answer(answer="lorem ipsum ..", url="https://example.org") )
    ...
    return res
```

# Engine Types

The `engine_type` of an engine
determines which [search processor](https://docs.searxng.org/src/searx.search.processors.html#searx-search-processors) is used by
the engine.

In this section a list of the engines that are documented is given, a complete
list of the engines can be found in the source under: [searx/engines](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/searx/engines).

<a id="online-engines"></a>

## Online Engines

### info

- `processors.online`

- [demo/demo\_online](https://docs.searxng.org/demo/demo_online.html)

- [xpath](https://docs.searxng.org/xpath.html)

- [mediawiki](https://docs.searxng.org/mediawiki.html)

- [json\_engine](https://docs.searxng.org/json_engine.html)

- [online/\*](https://docs.searxng.org/online/*.html)

<a id="offline-engines"></a>

## Offline Engines

### info

- `processors.offline`

- [offline\_concept](https://docs.searxng.org/offline_concept.html)

- [demo/demo\_offline](https://docs.searxng.org/demo/demo_offline.html)

- [offline/\*](https://docs.searxng.org/offline/*.html)

<a id="online-url-search"></a>

## Online URL Search

### info

- `processors.online_url_search`

- [online\_url\_search/\*](https://docs.searxng.org/online_url_search/*.html)

<a id="online-currency"></a>

## Online Currency

### info

- `processors.online_currency`

*no engine of this type is documented yet / coming soon*

<a id="online-dictionary"></a>

## Online Dictionary

### info

- `processors.online_dictionary`

*no engine of this type is documented yet / coming soon*
