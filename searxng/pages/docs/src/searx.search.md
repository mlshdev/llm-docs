> Commit-pinned source for SearXNG master: [docs/src/searx.search.rst](https://github.com/searxng/searxng/blob/931fd9787b1517d88af2876175d8c31b03e11671/docs/src/searx.search.rst)

.. \_searx.search:

# Search

.. autoclass:: searx.search.models.EngineRef
:members:

.. autoclass:: searx.search.models.SearchQuery
:members:

.. autoclass:: searx.search.Search

.. attribute:: search\_query
:type: searx.search.SearchQuery

.. attribute:: result\_container
:type: searx.results.ResultContainer

.. automethod:: search() -> searx.results.ResultContainer

.. autoclass:: searx.search.SearchWithPlugins
:members:

.. attribute:: search\_query
:type: searx.search.SearchQuery

.. attribute:: result\_container
:type: searx.results.ResultContainer

.. attribute:: ordered\_plugin\_list
:type: typing.List

.. attribute:: request
:type: flask.request

.. automethod:: search() -> searx.results.ResultContainer
