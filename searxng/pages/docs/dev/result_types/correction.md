> Commit-pinned source for SearXNG master: [docs/dev/result_types/correction.rst](https://github.com/searxng/searxng/blob/745d5b6fc506da30b3f275a80497de5d509df540/docs/dev/result_types/correction.rst)

.. \_result\_types.corrections:

# Correction Results

.. hint:

```text
There is still no typing for these result items. The templates can be used as
orientation until the final typing is complete.

```

The \[area corrections results]\(#area corrections results) shows the user alternative search terms.

A result of this type is a very simple dictionary with only one key/value pair

.. code:: python

{"correction" : "lorem ipsum .."}

From this simple dict another dict is build up:

.. code:: python

# use RawTextQuery to get the corrections URLs with the same bang

{"url" : "!bang lorem ipsum ..", "title": "lorem ipsum .." }

and used in the template :origin:`corrections.html <searx/templates/simple/elements/corrections.html>`:

title : :py:class:`str`
Corrected search term.

url : :py:class:`str`
Not really an URL, its the value to insert in a HTML form for a SearXNG query.
