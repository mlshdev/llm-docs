> Pinned source for SearXNG master: [docs/dev/result_types/main_result.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/docs/dev/result_types/main_result.rst)

<a id="main-search-results"></a>

# Main Search Results

In the [area main results](https://docs.searxng.org/dev/result_types/index.html#area-main-results) the results that a search engine has found for
the search term are displayed.

There is still no typing for all items in the [main result list](https://docs.searxng.org/dev/templates.html#main-result-list).  The
following types have been implemented so far ..

- [main/mainresult](https://docs.searxng.org/main/mainresult.html)
- [main/keyvalue](https://docs.searxng.org/main/keyvalue.html)
- [main/code](https://docs.searxng.org/main/code.html)
- [main/paper](https://docs.searxng.org/main/paper.html)
- [main/file](https://docs.searxng.org/main/file.html)
- [main/image](https://docs.searxng.org/main/image.html)

The LegacyResult is used internally for the results that
have not yet been typed.  The templates can be used as orientation until the
final typing is complete.

- [template default](https://docs.searxng.org/dev/templates.html#template-default) / `Result`
- [template videos](https://docs.searxng.org/dev/templates.html#template-videos)
- [template torrent](https://docs.searxng.org/dev/templates.html#template-torrent)
- [template map](https://docs.searxng.org/dev/templates.html#template-map)
- [template packages](https://docs.searxng.org/dev/templates.html#template-packages)
- [template products](https://docs.searxng.org/dev/templates.html#template-products)
