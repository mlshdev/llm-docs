> Commit-pinned source for SearXNG master: [docs/dev/engines/online/brave.rst](https://github.com/searxng/searxng/blob/8f452ee89293d9a752a776f4c33f5a5f124fff97/docs/dev/engines/online/brave.rst)

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
