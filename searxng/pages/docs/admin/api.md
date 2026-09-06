> Commit-pinned source for SearXNG master: [docs/admin/api.rst](https://github.com/searxng/searxng/blob/22056605a6e0ed41a0aa91a2bf300a361fd16b92/docs/admin/api.rst)

.. \_adminapi:

# Administration API

# Get configuration data

.. code:: http

```
GET /config  HTTP/1.1
```

## Sample response

.. code:: json

{
"autocomplete": "",
"categories": \[
"map",
"it",
"images",
],
"default\_locale": "",
"default\_theme": "simple",
"engines": \[
{
"categories": \[
"map"
],
"enabled": true,
"name": "openstreetmap",
"shortcut": "osm"
},
{
"categories": \[
"it"
],
"enabled": true,
"name": "arch linux wiki",
"shortcut": "al"
},
{
"categories": \[
"images"
],
"enabled": true,
"name": "google images",
"shortcut": "goi"
},
{
"categories": \[
"it"
],
"enabled": false,
"name": "bitbucket",
"shortcut": "bb"
},
],
"instance\_name": "SearXNG",
"locales": {
"de": "Deutsch (German)",
"en": "English",
"eo": "Esperanto (Esperanto)",
},
"plugins": \[
{
"enabled": true,
"name": "HTTPS rewrite"
}
],
"safe\_search": 0
}

# Embed search bar

The search bar can be embedded into websites.  Just paste the example into the
HTML of the site.  URL of the SearXNG instance and values are customizable.

.. code:: html

   <form method="post" action="https://example.org/">
     <!-- search      --> <input type="text" name="q">
     <!-- categories  --> <input type="hidden" name="categories" value="general,social media">
     <!-- language    --> <input type="hidden" name="lang" value="all">
     <!-- locale      --> <input type="hidden" name="locale" value="en">
     <!-- date filter --> <input type="hidden" name="time_range" value="month">
   </form>
