> Pinned source for SearXNG master: [docs/dev/templates.rst](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/dev/templates.rst)

<a id="simple-theme-templates"></a>

# Simple Theme Templates

The simple template is complex, it consists of many different elements and also
uses macros and include statements.  The following is a rough overview that we
would like to give the developer at hand, details must still be taken from the
[sources](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/).

A [result item](https://docs.searxng.org/dev/result_types/index.html#result-types) can be of different media types.  The media
type of a result is defined by the `result_type.Result.template`.  To
set another media-type as [template default](https://docs.searxng.org/dev/templates.html#template-default), the field `template`
in the result item must be set to the desired type.

<a id="result-template-macros"></a>

# Result template macros

<a id="macro-result-header"></a>

## `result_header`

Execpt `image.html` and some others this macro is used in nearly all result
types in the [main result list](https://docs.searxng.org/dev/templates.html#main-result-list).

Fields used in the template [macro result\_header](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/macros.html):

**url :  `str`**

Link URL of the result item.

**title :  `str`**

Link title of the result item.

**img\_src, thumbnail : `str`**

URL of a image or thumbnail that is displayed in the result item.

<a id="macro-result-sub-header"></a>

## `result_sub_header`

Execpt `image.html` and some others this macro is used in nearly all result
types in the [main result list](https://docs.searxng.org/dev/templates.html#main-result-list).

Fields used in the template [macro result\_sub\_header](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/macros.html):

**publishedDate : `datetime.datetime`**

The date on which the object was published.

**length: `datetime.timedelta`**

Playing duration in seconds.

**views: `str`**

View count in humanized number format.

**author : `str`**

Author of the title.

**metadata : `str`**

Miscellaneous metadata.

<a id="engine-data"></a>

## `engine_data_form`

The `engine_data_form` macro is used in [results,html](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/results.html) in a HTML `<form/>` element.  The
intention of this macro is to pass data of a engine from one `response` to the `searx.search.SearchQuery`
of the next `request`.

To pass data, engine's response handler can append result items of typ
`engine_data`.  This is by example used to pass a token from the response to
the next request:

```python
def response(resp):
    ...
    results.append({
       'engine_data': token,
       'key': 'next_page_token',
    })
    ...
    return results

def request(query, params):
    page_token = params['engine_data'].get('next_page_token')
```

<a id="main-result-list"></a>

# Main Result List

The **media types** of the **main result type** are the template files in
the [result\_templates](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/result_templates).

<a id="template-default"></a>

## `default.html`

Displays result fields from:

- [macro result\_header](https://docs.searxng.org/dev/templates.html#macro-result-header) and
- [macro result\_sub\_header](https://docs.searxng.org/dev/templates.html#macro-result-sub-header)

Additional fields used in the [default.html](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/result_templates/default.html):

**content :  `str`**

General text of the result item.

**iframe\_src : `str`**

URL of an embedded `<iframe>` / the frame is collapsible.

**audio\_src : uri,**

URL of an embedded `<audio controls>`.

<a id="template-videos"></a>

## `videos.html`

Displays result fields from:

- [macro result\_header](https://docs.searxng.org/dev/templates.html#macro-result-header) and
- [macro result\_sub\_header](https://docs.searxng.org/dev/templates.html#macro-result-sub-header)

Additional fields used in the [videos.html](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/result_templates/videos.html):

**iframe\_src : `str`**

URL of an embedded `<iframe>` / the frame is collapsible.

The videos are displayed as small thumbnails in the main results list, there
is an additional button to collaps/open the embeded video.

**content :  `str`**

Description of the code fragment.

<a id="template-torrent"></a>

## `torrent.html`

<a id="magnet-link"></a> <a id="torrent-file"></a>

Displays result fields from:

- [macro result\_header](https://docs.searxng.org/dev/templates.html#macro-result-header) and
- [macro result\_sub\_header](https://docs.searxng.org/dev/templates.html#macro-result-sub-header)

Additional fields used in the [torrent.html](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/result_templates/torrent.html):

**magnetlink:**

URL of the [magnet link](https://docs.searxng.org/dev/templates.html#magnet-link).

**torrentfile**

URL of the [torrent file](https://docs.searxng.org/dev/templates.html#torrent-file).

**seed : `int`**

Number of seeders.

**leech : `int`**

Number of leecher

**filesize : `int`**

Size in Bytes (rendered to human readable unit of measurement).

**files : `int`**

Number of files.

<a id="template-map"></a>

## `map.html`

<a id="geojson"></a> <a id="leaflet"></a> <a id="bbox"></a> <a id="htmlelement-dataset"></a> <a id="nominatim"></a> <a id="lookup"></a> <a id="place-id-is-not-a-persistent-id"></a>
<https://nominatim.org/release-docs/latest/api/Output/#place_id-is-not-a-persistent-id> <a id="perma-id"></a> <a id="country-code"></a>

Displays result fields from:

- [macro result\_header](https://docs.searxng.org/dev/templates.html#macro-result-header) and
- [macro result\_sub\_header](https://docs.searxng.org/dev/templates.html#macro-result-sub-header)

Additional fields used in the [map.html](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/result_templates/map.html):

**content :  `str`**

Description of the item.

**address\_label : `str`**

Label of the address / default `_('address')`.

**geojson : GeoJSON\_**

Geometries mapped to HTMLElement.dataset\_ (`data-map-geojson`) and used by
Leaflet\_.

**boundingbox : `[ min-lon, min-lat, max-lon, max-lat]`**

A bbox\_ area defined by min longitude , min latitude , max longitude and max
latitude.  The bounding box is mapped to HTMLElement.dataset\_
(`data-map-boundingbox`) and is used by Leaflet\_.

**longitude, latitude : `str`**

Geographical coordinates, mapped to HTMLElement.dataset\_ (`data-map-lon`,
`data-map-lat`) and is used by Leaflet\_.

**address : `{...}`**

A dicticonary with the address data:

```python
address = {
    'name'          : str,  # name of object
    'road'          : str,  # street name of object
    'house_number'  : str,  # house number of object
    'postcode'      : str,  # postcode of object
    'country'       : str,  # country of object
    'country_code'  : str,
    'locality'      : str,
}
```

**country\_code : `str`**

Country code of the object.

**locality : `str`**

The name of the city, town, township, village, borough, etc. in which this
object is located.

**links : `[link1, link2, ...]`**

A list of links with labels:

```python
links.append({
    'label'       : str,
    'url'         : str,
    'url_label'   : str,  # set by some engines but unused (oscar)
})
```

**data : `[data1, data2, ...]`**

A list of additional data, shown in two columns and containing a label and
value.

```python
data.append({
   'label'   : str,
   'value'   : str,
   'key'     : str,  # set by some engines but unused
})
```

**type : `str`  # set by some engines but unused (oscar)**

Tag label from [OSM\_KEYS\_TAGS\['tags'\]](https://docs.searxng.org/dev/searxng_extra/update.html#update-osm-keys-tags-py).

**type\_icon : `str`  # set by some engines but unused (oscar)**

Type's icon.

**osm : `{...}`**

OSM-type and OSM-ID, can be used to Lookup\_ OSM data (Nominatim\_). There is
also a discussion about "[place\_id is not a persistent id](https://docs.searxng.org/dev/templates.html#place-id-is-not-a-persistent-id)" and the
perma\_id\_.

```python
osm = {
    'type': str,
    'id':   str,
}
```

**type : `str`**

Type of osm-object (if OSM-Result).

**id :**

ID of osm-object (if OSM-Result).

> **Hint**
> The `osm` property is set by engine `openstreetmap.py`, but it is not
> used in the `map.html` template yet.

<a id="template-paper"></a>

## `paper.html`

<a id="bibtex-format"></a> <a id="bibtex-field-types"></a>

Displays result fields from:

- [macro result\_header](https://docs.searxng.org/dev/templates.html#macro-result-header)

Additional fields used in the [paper.html](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/result_templates/paper.html):

**content :  `str`**

An abstract or excerpt from the document.

**comments : `str`**

Free text display in italic below the content.

**tags : `List`\ \[\ `str`\ ]**

Free tag list.

**type : `str`**

Short description of medium type, e.g. *book*, *pdf* or *html* ...

**authors : `List`\ \[\ `str`\ ]**

List of authors of the work (authors with a "s" suffix, the "author" is in the
[macro result\_sub\_header](https://docs.searxng.org/dev/templates.html#macro-result-sub-header)).

**editor : `str`**

Editor of the book/paper.

**publisher : `str`**

Name of the publisher.

**journal : `str`**

Name of the journal or magazine the article was published in.

**volume : `str`**

Volume number.

**pages : `str`**

Page range where the article is.

**number : `str`**

Number of the report or the issue number for a journal article.

**doi : `str`**

DOI number (like `10.1038/d41586-018-07848-2`).

**issn : `List`\ \[\ `str`\ ]**

ISSN number like `1476-4687`

**isbn : `List`\ \[\ `str`\ ]**

ISBN number like `9780201896831`

**pdf\_url : `str`**

URL to the full article, the PDF version

**html\_url : `str`**

URL to full article, HTML version

<a id="template-packages"></a>

## `packages`

Displays result fields from:

- [macro result\_header](https://docs.searxng.org/dev/templates.html#macro-result-header)

Additional fields used in the [packages.html](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/result_templates/packages.html):

**package\_name : `str`**

The name of the package.

**version : `str`**

The current version of the package.

**maintainer : `str`**

The maintainer or author of the project.

**publishedDate : `datetime`**

Date of latest update or release.

**tags : `List`\ \[\ `str`\ ]**

Free tag list.

**popularity : `str`**

The popularity of the package, e.g. rating or download count.

**license\_name : `str`**

The name of the license.

**license\_url : `str`**

The web location of a license copy.

**homepage : `str`**

The url of the project's homepage.

**source\_code\_url: `str`**

The location of the project's source code.

**links : `dict`**

Additional links in the form of `{'link_name': 'http://example.com'}`

<a id="template-products"></a>

## `products.html`

Displays result fields from:

- [macro result\_header](https://docs.searxng.org/dev/templates.html#macro-result-header) and
- [macro result\_sub\_header](https://docs.searxng.org/dev/templates.html#macro-result-sub-header)

Additional fields used in the [products.html](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/searx/templates/simple/result_templates/products.html):

**content :  `str`**

Description of the product.

**price : `str`**

The price must include the currency.

**shipping : `str`**

Shipping details.

**source\_country : `str`**

Place from which the shipment is made.

<a id="template-answer-results"></a>

# Answer results

See [result\_types.answer](https://docs.searxng.org/dev/result_types/answer.html#result-types-answer)

# Suggestion results

See [result\_types.suggestion](https://docs.searxng.org/dev/result_types/suggestion.html#result-types-suggestion)

# Correction results

See [result\_types.corrections](https://docs.searxng.org/dev/result_types/correction.html#result-types-corrections)

# Infobox results

See [result\_types.infobox](https://docs.searxng.org/dev/result_types/infobox.html#result-types-infobox)
