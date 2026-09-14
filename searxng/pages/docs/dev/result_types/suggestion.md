> Pinned source for SearXNG master: [docs/dev/result_types/suggestion.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/docs/dev/result_types/suggestion.rst)

<a id="result-types-suggestion"></a>

# Suggestion Results

> **Hint**
> There is still no typing for these result items. The templates can be used as
> orientation until the final typing is complete.

The [area suggestions results](https://docs.searxng.org/dev/result_types/index.html#area-suggestions-results) shows the user alternative search terms.

A result of this type is a very simple dictionary with only one key/value pair

```python
{"suggestion" : "lorem ipsum .."}
```

From this simple dict another dict is build up:

```python
{"url" : "!bang lorem ipsum ..", "title": "lorem ipsum" }
```

and used in the template [suggestions.html](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/searx/templates/simple/elements/suggestions.html):

```python
# use RawTextQuery to get the suggestion URLs with the same bang
{"url" : "!bang lorem ipsum ..", "title": "lorem ipsum" }
```

**title : `str`**

Suggested search term

**url : `str`**

Not really an URL, its the value to insert in a HTML form for a SearXNG query.
