> Commit-pinned source for SearXNG master: [docs/dev/engines/index.rst](https://github.com/searxng/searxng/blob/c7f3080aac5de13b619c4a5ab36590a2c5165e1c/docs/dev/engines/index.rst)

.. \_engine implementations:

# Engine Implementations

# ResultList and engines

.. autoclass:: searx.result\_types.ResultList

.. autoclass:: searx.result\_types.EngineResults

# Engine Types

The :py:obj:`engine_type <searx.enginelib.Engine.engine_type>` of an engine
determines which search processor is used by
the engine.

In this section a list of the engines that are documented is given, a complete
list of the engines can be found in the source under: :origin:`searx/engines`.

.. \_online engines:

## Online Engines

### info

- :py:obj:`processors.online <searx.search.processors.online>`

.. \_offline engines:

## Offline Engines

### info

- :py:obj:`processors.offline <searx.search.processors.offline>`

.. \_online url search:

## Online URL Search

### info

- :py:obj:`processors.online_url_search <searx.search.processors.online_url_search>`

.. \_online currency:

## Online Currency

### info

- :py:obj:`processors.online_currency <searx.search.processors.online_currency>`

*no engine of this type is documented yet / coming soon*

.. \_online dictionary:

## Online Dictionary

### info

- :py:obj:`processors.online_dictionary <searx.search.processors.online_dictionary>`

*no engine of this type is documented yet / coming soon*
