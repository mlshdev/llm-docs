> Commit-pinned source for SearXNG master: [docs/src/searx.search.rst](https://github.com/searxng/searxng/blob/745d5b6fc506da30b3f275a80497de5d509df540/docs/src/searx.search.rst)

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
