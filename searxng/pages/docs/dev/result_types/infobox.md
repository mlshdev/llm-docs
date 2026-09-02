> Commit-pinned source for SearXNG master: [docs/dev/result_types/infobox.rst](https://github.com/searxng/searxng/blob/05cd77f71b466b7674658429d834a8db3b26811f/docs/dev/result_types/infobox.rst)

.. \_result\_types.infobox:

# Infobox Results

.. hint:

```text
There is still no typing for these result items. The templates can be used as
orientation until the final typing is complete.

```

The \[area info box]\(#area info box) is an area where addtional infos shown to the user.

Fields used in the :origin:`infobox.html <searx/templates/simple/elements/infobox.html>`:

img\_src: :py:class:`str`
URL of a image or thumbnail that is displayed in the infobox.

infobox: :py:class:`str`
Title of the info box.

content: :py:class:`str`
Text of the info box.

The infobox has additional subsections for *attributes*, *urls* and
*relatedTopics*:

attributes: :py:class:`List <list>`\ \[\ :py:class:`dict`\ ]
A list of attributes.  An *attribute* is a dictionary with keys:

- label :py:class:`str`: (mandatory)

- value :py:class:`str`: (mandatory)

- image :py:class:`List <list>`\ \[\ :py:class:`dict`\ ] (optional)

  A list of images.  An *image* is a dictionary with keys:

  - src :py:class:`str`: URL of an image/thumbnail (mandatory)
  - alt :py:class:`str`: alternative text for the image (mandatory)

urls: :py:class:`List <list>`\ \[\ :py:class:`dict`\ ]
A list of links.  An *link* is a dictionary with keys:

- url :py:class:`str`: URL of the link (mandatory)
- title :py:class:`str`: Title of the link (mandatory)

relatedTopics: :py:class:`List <list>`\ \[\ :py:class:`dict`\ ]
A list of topics.  An *topic* is a dictionary with keys:

- name: :py:class:`str`: (mandatory)

- suggestions: :py:class:`List <list>`\ \[\ :py:class:`dict`\ ] (optional)

  A list of suggestions.  A *suggestion* is simple dictionary with just one
  key/value pair:

  - suggestion: :py:class:`str`: suggested search term (mandatory)
