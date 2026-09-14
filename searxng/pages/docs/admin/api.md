> Pinned source for SearXNG master: [docs/admin/api.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/docs/admin/api.rst)

<a id="adminapi"></a>

# Administration API

# Get configuration data

```http
GET /config  HTTP/1.1
```

## Sample response

```json
{
  "autocomplete": "",
  "categories": [
    "map",
    "it",
    "images",
  ],
  "default_locale": "",
  "default_theme": "simple",
  "engines": [
    {
      "categories": [
        "map"
      ],
      "enabled": true,
      "name": "openstreetmap",
      "shortcut": "osm"
    },
    {
      "categories": [
        "it"
      ],
      "enabled": true,
      "name": "arch linux wiki",
      "shortcut": "al"
    },
    {
      "categories": [
        "images"
      ],
      "enabled": true,
      "name": "google images",
      "shortcut": "goi"
    },
    {
      "categories": [
        "it"
      ],
      "enabled": false,
      "name": "bitbucket",
      "shortcut": "bb"
    },
  ],
  "instance_name": "SearXNG",
  "locales": {
    "de": "Deutsch (German)",
    "en": "English",
    "eo": "Esperanto (Esperanto)",
  },
  "plugins": [
    {
      "enabled": true,
      "name": "HTTPS rewrite"
    }
  ],
  "safe_search": 0
}
```

# Embed search bar

The search bar can be embedded into websites.  Just paste the example into the
HTML of the site.  URL of the SearXNG instance and values are customizable.

```html
<form method="post" action="https://example.org/">
  <!-- search      --> <input type="text" name="q">
  <!-- categories  --> <input type="hidden" name="categories" value="general,social media">
  <!-- language    --> <input type="hidden" name="lang" value="all">
  <!-- locale      --> <input type="hidden" name="locale" value="en">
  <!-- date filter --> <input type="hidden" name="time_range" value="month">
</form>
```
