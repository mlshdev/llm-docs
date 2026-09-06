> Commit-pinned source for SearXNG master: [docs/user/search-syntax.rst](https://github.com/searxng/searxng/blob/22056605a6e0ed41a0aa91a2bf300a361fd16b92/docs/user/search-syntax.rst)

.. \_search-syntax:

# Search syntax

SearXNG comes with a search syntax by which you can modify the categories,
engines, languages, and more.  See the available for
the list of engines, categories, and languages.

## `!` Select engine and category

To set category and/or engine names, use a `!` prefix.  To give a few examples:

- Search Wikipedia for **paris**:

  - available
  - available

- Search in category **map** for **paris**:

  - available

- Image search

  - available

Abbreviations of the engines and languages are also accepted.  Engine/category
modifiers are chainable and inclusive.  For example, {{search('!map !ddg !wp
paris')}} searches in the map category and searches DuckDuckGo and Wikipedia for **paris**.

## `:` Select language

To select a language filter use a `:` prefix.  To give an example:

- Search Wikipedia with a custom language:

  - available

## `!!<bang>` External bangs

SearXNG supports the external bangs from [DuckDuckGo].  To directly jump to a
external search page use the `!!` prefix.  To give an example:

- Search Wikipedia with a custom language:

  - available

Please note that your search will be performed directly in the external search
engine.  SearXNG cannot protect your privacy with this.

[DuckDuckGo]: https://duckduckgo.com/bang

## `!!` automatic redirect

When including `!!` within your search query (separated by spaces), you will
automatically be redirected to the first result.  This behavior is comparable to
the "Feeling Lucky" feature from DuckDuckGo.  To give an example:

- Search for a query and get redirected to the first result

  - available

Please keep in mind that the result you are being redirected to can't be
verified for trustworthiness and SearXNG cannot protect your personal privacy
when using this feature.  Use it at your own risk.

## Special Queries

In the available page you find keywords for
\_special queries.  To give a few examples:

- Generate a random UUID

  - available

- Find the average

  - available

- Show the \_user agent of your browser (needs to be activated)

  - available

- Convert strings to different hash digests (needs to be activated)

  - available
  - available
