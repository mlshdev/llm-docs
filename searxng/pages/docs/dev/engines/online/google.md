> Commit-pinned source for SearXNG master: [docs/dev/engines/online/google.rst](https://github.com/searxng/searxng/blob/22056605a6e0ed41a0aa91a2bf300a361fd16b92/docs/dev/engines/online/google.rst)

.. \_google engines:

# Google Engines

.. \_google API:

# Google API

.. \_Query Parameter Definitions:
<https://developers.google.com/custom-search/docs/xml_results#WebSearch_Query_Parameter_Definitions>

SearXNG's implementation of the Google API is mainly done in
:py:obj:`get_google_info <searx.engines.google.get_google_info>`.

For detailed description of the *REST-full* API see: `Query Parameter
Definitions`\_.  The linked API documentation can sometimes be helpful during
reverse engineering.  However, we cannot use it in the freely accessible WEB
services; not all parameters can be applied and some engines are more *special*
than other (e.g. \[google news engine]\(#google news engine)).

.. \_google web engine:

# Google WEB

.. automodule:: searx.engines.google
:members:

.. \_google autocomplete:

# Google Autocomplete

.. autofunction:: searx.autocomplete.google\_complete

.. \_google images engine:

# Google Images

.. automodule:: searx.engines.google\_images
:members:

.. \_google videos engine:

# Google Videos

.. automodule:: searx.engines.google\_videos
:members:

.. \_google news engine:

# Google News

.. automodule:: searx.engines.google\_news
:members:

.. \_google scholar engine:

# Google Scholar

.. automodule:: searx.engines.google\_scholar
:members:
