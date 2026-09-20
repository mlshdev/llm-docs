> Pinned source for SearXNG master: [docs/dev/engines/engine_overview.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev/engines/engine_overview.rst)

<a id="engines-dev"></a>

# Engine Overview

<a id="metasearch-engine"></a>

### Further reading ..

- [configured engines](https://docs.searxng.org/user/configured_engines.html#configured-engines)
- [settings engines](https://docs.searxng.org/admin/settings/settings_engines.html#settings-engines)

SearXNG is a metasearch-engine\_, so it uses different search engines to provide
better results.

Because there is no general search API which could be used for every search
engine, an adapter has to be built between SearXNG and the external search
engines.  Adapters are stored under the folder [searx/engines](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/searx/engines).

<a id="general-engine-configuration"></a>

# General Engine Configuration

It is required to tell SearXNG the type of results the engine provides. The
arguments can be set in the engine file or in the settings file (normally
`settings.yml`). The arguments in the settings file override the ones in the
engine file.

It does not matter if an option is stored in the engine file or in the settings.
However, the standard way is the following:

<a id="engine-file"></a>

## Engine File

**Common options in the engine module**

| argument             | type    | information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| categories           | list    | categories, in which the engine is working                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| paging               | boolean | support multiple pages                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| time\_range\_support | boolean | support search time range                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| engine\_type         | str     | - `online` [\[ref\]](https://docs.searxng.org/dev/engines/index.html#online-engines) by default, other possibles values are: - `offline` [\[ref\]](https://docs.searxng.org/dev/engines/index.html#offline-engines) - `online_dictionary` [\[ref\]](https://docs.searxng.org/dev/engines/index.html#online-dictionary) - `online_currency` [\[ref\]](https://docs.searxng.org/dev/engines/index.html#online-currency) - `online_url_search` [\[ref\]](https://docs.searxng.org/dev/engines/index.html#online-url-search) |

<a id="engine-settings"></a>

## Engine `settings.yml`

For a more  detailed description, see [settings engines](https://docs.searxng.org/admin/settings/settings_engines.html#settings-engines) in the [settings.yml](https://docs.searxng.org/admin/settings/settings.html#settings-yml).

**Common options in the engine setup (`settings.yml`)**

| argument                 | type    | information                                                                                                  |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------ |
| name                     | string  | name of search-engine                                                                                        |
| engine                   | string  | name of searxng-engine (file name without `.py`)                                                             |
| enable\_http             | bool    | enable HTTP (by default only HTTPS is enabled).                                                              |
| shortcut                 | string  | shortcut of search-engine                                                                                    |
| timeout                  | string  | specific timeout for search-engine                                                                           |
| display\_error\_messages | boolean | display error messages on the web UI                                                                         |
| proxies                  | dict    | set proxies for a specific engine (e.g. `proxies : {http: socks5://proxy:port, https: socks5://proxy:port}`) |

<a id="engine-overrides"></a>

## Overrides

A few of the options have default values in the namespace of the engine's python
module, but are often overwritten by the settings.  If `None` is assigned to an
option in the engine file, it has to be redefined in the settings, otherwise
SearXNG will not start with that engine (global names with a leading underline can
be `None`).

Here is an very simple example of the global names in the namespace of engine's
module:

```python
# engine dependent config
categories = ['general']
paging = True
_non_overwritten_global = 'foo'
```

**The naming of overrides is arbitrary / recommended overrides are:**

| argument   | type   | information                                                  |
| ---------- | ------ | ------------------------------------------------------------ |
| base\_url  | string | base-url, can be overwritten to use same engine on other URL |
| page\_size | int    | maximum number of results per request                        |
| language   | string | ISO code of language and country like en\_US                 |
| api\_key   | string | api-key if required by engine                                |

<a id="engine-request"></a>

# Making a Request

To perform a search an URL have to be specified.  In addition to specifying an
URL, arguments can be passed to the query.

<a id="engine-request-arguments"></a>

## Passed Arguments (request)

These arguments can be used to construct the search query.  Furthermore,
parameters with default value can be redefined for special purposes.

<a id="engine-request-online"></a>

**If the `engine_type` is `online`**

| argument           | type           | default-value, information                                                                                    |
| ------------------ | -------------- | ------------------------------------------------------------------------------------------------------------- |
| url                | str            | `''`                                                                                                          |
| method             | str            | `'GET'`                                                                                                       |
| headers            | dict           | `{}`                                                                                                          |
| data               | dict           | `{}`                                                                                                          |
| cookies            | dict           | `{}`                                                                                                          |
| verify             | bool           | `True`                                                                                                        |
| headers.User-Agent | str            | `''`                                                                                                          |
| category           | str            | current category, like `'general'`                                                                            |
| safesearch         | int            | `0`, between `0` and `2` (normal, moderate, strict)                                                           |
| time\_range        | Optional\[str] | `None`, can be `day`, `week`, `month`, `year`                                                                 |
| pageno             | int            | current pagenumber                                                                                            |
| searxng\_locale    | str            | SearXNG's locale selected by user.  Specific language code like `'en'`, `'en-US'`, or `'all'` if unspecified. |

<a id="engine-request-online-dictionary"></a>

**If the `engine_type` is `online_dictionary`,**

in addition to the [online](https://docs.searxng.org/dev/engines/engine_overview.html#engine-request-online) arguments:

- **Width:** 100%

| argument   | type | default-value, information            |
| ---------- | ---- | ------------------------------------- |
| from\_lang | str  | specific language code like `'en_US'` |
| to\_lang   | str  | specific language code like `'en_US'` |
| query      | str  | the text query without the languages  |

<a id="engine-request-online-currency"></a>

**If the `engine_type` is `online_currency`,**

in addition to the [online](https://docs.searxng.org/dev/engines/engine_overview.html#engine-request-online) arguments:

- **Width:** 100%

| argument   | type  | default-value, information |
| ---------- | ----- | -------------------------- |
| amount     | float | the amount to convert      |
| from       | str   | ISO 4217 code              |
| to         | str   | ISO 4217 code              |
| from\_name | str   | currency name              |
| to\_name   | str   | currency name              |

<a id="engine-request-online-url-search"></a>

**If the `engine_type` is `online_url_search`,**

in addition to the [online](https://docs.searxng.org/dev/engines/engine_overview.html#engine-request-online) arguments:

- **Width:** 100%

| argument    | type | default-value, information  |
| ----------- | ---- | --------------------------- |
| search\_url | dict | URLs from the search query: |

```python
{
  'http': str,
  'ftp': str,
  'data:image': str
}
```

\====================== ============== ========================================================================

## Specify Request

The function `def request(query, params):` always returns the `params` variable, the
following parameters can be used to specify a search request:

| argument              | type | information                                                                |
| --------------------- | ---- | -------------------------------------------------------------------------- |
| url                   | str  | requested url                                                              |
| method                | str  | HTTP request method                                                        |
| headers               | dict | HTTP header information                                                    |
| data                  | dict | HTTP data information                                                      |
| cookies               | dict | HTTP cookies                                                               |
| verify                | bool | Performing SSL-Validity check                                              |
| allow\_redirects      | bool | Follow redirects                                                           |
| max\_redirects        | int  | maximum redirects, hard limit                                              |
| soft\_max\_redirects  | int  | maximum redirects, soft limit. Record an error but don't stop the engine   |
| raise\_for\_httperror | bool | True by default: raise an exception if the HTTP code of response is >= 300 |
| impersonate           | str  | curl\_cffi impersonate target (default: chrome, none to disable)           |
| curl\_options         | dict | Any extra libcurl options for the request                                  |

# Making a Response

In the `response` function of the engine, the HTTP response (`resp`) is
parsed and a list of results is returned.

A engine can append result-items of different media-types and different
result-types to the result list.  The list of the result items is render to HTML
by templates.  For more details read section:

- [simple theme templates](https://docs.searxng.org/dev/templates.html#simple-theme-templates)
- [result types](https://docs.searxng.org/dev/result_types/index.html#result-types)
