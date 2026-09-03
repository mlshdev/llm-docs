> Commit-pinned source for SearXNG master: [docs/dev/result_types/main_result.rst](https://github.com/searxng/searxng/blob/8f452ee89293d9a752a776f4c33f5a5f124fff97/docs/dev/result_types/main_result.rst)

.. \_main search results:

# Main Search Results

In the \[area main results]\(#area main results) the results that a search engine has found for
the search term are displayed.

There is still no typing for all items in the \[main result list]\(#main result list).  The
following types have been implemented so far ..

The LegacyResult is used internally for the results that
have not yet been typed.  The templates can be used as orientation until the
final typing is complete.

- \[template default]\(#template default) / :py:obj:`Result`
- \[template videos]\(#template videos)
- \[template torrent]\(#template torrent)
- \[template map]\(#template map)
- \[template packages]\(#template packages)
- \[template products]\(#template products)
