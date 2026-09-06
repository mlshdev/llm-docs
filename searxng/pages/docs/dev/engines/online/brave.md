> Commit-pinned source for SearXNG master: [docs/dev/engines/online/brave.rst](https://github.com/searxng/searxng/blob/c7f3080aac5de13b619c4a5ab36590a2c5165e1c/docs/dev/engines/online/brave.rst)

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
