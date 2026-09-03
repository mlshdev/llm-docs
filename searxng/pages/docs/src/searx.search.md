> Commit-pinned source for SearXNG master: [docs/src/searx.search.rst](https://github.com/searxng/searxng/blob/a1144dda3e97668c9d445022b7019c224cd4bb1e/docs/src/searx.search.rst)

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
