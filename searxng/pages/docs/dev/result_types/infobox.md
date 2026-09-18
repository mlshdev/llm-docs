> Pinned source for SearXNG master: [docs/dev/result_types/infobox.rst](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/dev/result_types/infobox.rst)

<a id="result-types-infobox"></a>

# Infobox Results

> **Hint**
> There is still no typing for these result items. The templates can be used as
> orientation until the final typing is complete.

The [area info box](https://docs.searxng.org/dev/result_types/index.html#area-info-box) is an area where addtional infos shown to the user.

Fields used in the [infobox.html](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/elements/infobox.html):

**img\_src: `str`**

URL of a image or thumbnail that is displayed in the infobox.

**infobox: `str`**

Title of the info box.

**content: `str`**

Text of the info box.

The infobox has additional subsections for *attributes*, *urls* and
*relatedTopics*:

**attributes: `List`\ \[\ `dict`\ ]**

A list of attributes.  An *attribute* is a dictionary with keys:

- label `str`: (mandatory)

- value `str`: (mandatory)

- image `List`\ \[\ `dict`\ ] (optional)

  A list of images.  An *image* is a dictionary with keys:

  - src `str`: URL of an image/thumbnail (mandatory)
  - alt `str`: alternative text for the image (mandatory)

**urls: `List`\ \[\ `dict`\ ]**

A list of links.  An *link* is a dictionary with keys:

- url `str`: URL of the link (mandatory)
- title `str`: Title of the link (mandatory)

**relatedTopics: `List`\ \[\ `dict`\ ]**

A list of topics.  An *topic* is a dictionary with keys:

- name: `str`: (mandatory)

- suggestions: `List`\ \[\ `dict`\ ] (optional)

  A list of suggestions.  A *suggestion* is simple dictionary with just one
  key/value pair:

  - suggestion: `str`: suggested search term (mandatory)
