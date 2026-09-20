> Pinned source for SearXNG master: [docs/dev/result_types/correction.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev/result_types/correction.rst)

<a id="result-types-corrections"></a>

# Correction Results

> **Hint**
> There is still no typing for these result items. The templates can be used as
> orientation until the final typing is complete.

The [area corrections results](https://docs.searxng.org/dev/result_types/index.html#area-corrections-results) shows the user alternative search terms.

A result of this type is a very simple dictionary with only one key/value pair

```python
{"correction" : "lorem ipsum .."}
```

From this simple dict another dict is build up:

```python
# use RawTextQuery to get the corrections URLs with the same bang
{"url" : "!bang lorem ipsum ..", "title": "lorem ipsum .." }
```

and used in the template [corrections.html](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/searx/templates/simple/elements/corrections.html):

**title : `str`**

Corrected search term.

**url : `str`**

Not really an URL, its the value to insert in a HTML form for a SearXNG query.
