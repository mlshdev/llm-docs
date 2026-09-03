> Commit-pinned source for SearXNG master: [docs/dev/engines/online/brave.rst](https://github.com/searxng/searxng/blob/745d5b6fc506da30b3f275a80497de5d509df540/docs/dev/engines/online/brave.rst)

# Brave Engines

Brave offers two different engines for SearXNG:

1. The standard engine (`brave`) uses the web interface.
2. The API engine (`braveapi`) uses the official REST API.

.. \_brave engine:

## Brave Standard Engine

.. automodule:: searx.engines.brave
:members:

.. \_braveapi engine:

## Brave API Engine

.. automodule:: searx.engines.braveapi
:members:

The API engine requires an API key from Brave. This can be obtained from the
[API Dashboard](https://api-dashboard.search.brave.com/).
