> Commit-pinned source for SearXNG master: [docs/src/searx.search.rst](https://github.com/searxng/searxng/blob/d4f00d15d4c2b8260124a9039b80bc9c1c26499b/docs/src/searx.search.rst)

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
