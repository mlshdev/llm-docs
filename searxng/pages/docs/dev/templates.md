> Commit-pinned source for SearXNG master: [docs/dev/templates.rst](https://github.com/searxng/searxng/blob/a1144dda3e97668c9d445022b7019c224cd4bb1e/docs/dev/templates.rst)

.. \_simple theme templates:

# Simple Theme Templates

The simple template is complex, it consists of many different elements and also
uses macros and include statements.  The following is a rough overview that we
would like to give the developer at hand, details must still be taken from the
:origin:`sources <searx/templates/simple/>`.

A \[result item]\(#result types) can be of different media types.  The media
type of a result is defined by the :py:obj:`result_type.Result.template`.  To
set another media-type as \[template default]\(#template default), the field `template`
in the result item must be set to the desired type.

.. \_result template macros:

# Result template macros

.. \_macro result\_header:

## `result_header`

Execpt `image.html` and some others this macro is used in nearly all result
types in the \[main result list]\(#main result list).

Fields used in the template :origin:`macro result_header <searx/templates/simple/macros.html>`:

url :  :py:class:`str`
Link URL of the result item.

title :  :py:class:`str`
Link title of the result item.

img\_src, thumbnail : :py:class:`str`
URL of a image or thumbnail that is displayed in the result item.

.. \_macro result\_sub\_header:

## `result_sub_header`

Execpt `image.html` and some others this macro is used in nearly all result
types in the \[main result list]\(#main result list).

Fields used in the template :origin:`macro result_sub_header <searx/templates/simple/macros.html>`:

publishedDate : :py:obj:`datetime.datetime`
The date on which the object was published.

length: :py:obj:`datetime.timedelta`
Playing duration in seconds.

views: :py:class:`str`
View count in humanized number format.

author : :py:class:`str`
Author of the title.

metadata : :py:class:`str`
Miscellaneous metadata.

.. \_engine\_data:

## `engine_data_form`

The `engine_data_form` macro is used in :origin:`results,html <searx/templates/simple/results.html>` in a HTML `<form/>` element.  The
intention of this macro is to pass data of a engine from one :py:obj:`response <searx.engines.demo_online.response>` to the :py:obj:`searx.search.SearchQuery`
of the next :py:obj:`request <searx.engines.demo_online.request>`.

To pass data, engine's response handler can append result items of typ
`engine_data`.  This is by example used to pass a token from the response to
the next request:

.. code:: python

def response(resp):
...
results.append({
'engine\_data': token,
'key': 'next\_page\_token',
})
...
return results

def request(query, params):
page\_token = params\['engine\_data'].get('next\_page\_token')

.. \_main result list:

# Main Result List

The **media types** of the **main result type** are the template files in
the :origin:`result_templates <searx/templates/simple/result_templates>`.

.. \_template default:

## `default.html`

Displays result fields from:

- \[macro result\_header]\(#macro result\_header) and
- \[macro result\_sub\_header]\(#macro result\_sub\_header)

Additional fields used in the :origin:`default.html <searx/templates/simple/result_templates/default.html>`:

content :  :py:class:`str`
General text of the result item.

iframe\_src : :py:class:`str`
URL of an embedded `<iframe>` / the frame is collapsible.

audio\_src : uri,
URL of an embedded `<audio controls>`.

.. \_template videos:

## `videos.html`

Displays result fields from:

- \[macro result\_header]\(#macro result\_header) and
- \[macro result\_sub\_header]\(#macro result\_sub\_header)

Additional fields used in the :origin:`videos.html <searx/templates/simple/result_templates/videos.html>`:

iframe\_src : :py:class:`str`
URL of an embedded `<iframe>` / the frame is collapsible.

The videos are displayed as small thumbnails in the main results list, there
is an additional button to collaps/open the embeded video.

content :  :py:class:`str`
Description of the code fragment.

.. \_template torrent:

## `torrent.html`

Displays result fields from:

- \[macro result\_header]\(#macro result\_header) and
- \[macro result\_sub\_header]\(#macro result\_sub\_header)

Additional fields used in the :origin:`torrent.html <searx/templates/simple/result_templates/torrent.html>`:

magnetlink:
URL of the [magnet link](https://en.wikipedia.org/wiki/Magnet_URI_scheme).

torrentfile
URL of the [torrent file](https://en.wikipedia.org/wiki/Torrent_file).

seed : `int`
Number of seeders.

leech : `int`
Number of leecher

filesize : `int`
Size in Bytes (rendered to human readable unit of measurement).

files : `int`
Number of files.

.. \_template map:

## `map.html`

.. \_place\_id is not a persistent id:
<https://nominatim.org/release-docs/latest/api/Output/#place_id-is-not-a-persistent-id>

Displays result fields from:

- \[macro result\_header]\(#macro result\_header) and
- \[macro result\_sub\_header]\(#macro result\_sub\_header)

Additional fields used in the :origin:`map.html <searx/templates/simple/result_templates/map.html>`:

content :  :py:class:`str`
Description of the item.

address\_label : :py:class:`str`
Label of the address / default `_('address')`.

geojson : [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON)
Geometries mapped to HTMLElement.dataset (`data-map-geojson`) and used by
[Leaflet](https://github.com/Leaflet/Leaflet).

boundingbox : `[ min-lon, min-lat, max-lon, max-lat]`
A bbox area defined by min longitude , min latitude , max longitude and max
latitude.  The bounding box is mapped to HTMLElement.dataset
(`data-map-boundingbox`) and is used by Leaflet.

longitude, latitude : :py:class:`str`
Geographical coordinates, mapped to HTMLElement.dataset (`data-map-lon`,
`data-map-lat`) and is used by Leaflet.

address : `{...}`
A dicticonary with the address data:

.. code:: python

```
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

country\_code : :py:class:`str`
Country code of the object.

locality : :py:class:`str`
The name of the city, town, township, village, borough, etc. in which this
object is located.

links : `[link1, link2, ...]`
A list of links with labels:

.. code:: python

```
 links.append({
     'label'       : str,
     'url'         : str,
     'url_label'   : str,  # set by some engines but unused (oscar)
 })
```

data : `[data1, data2, ...]`
A list of additional data, shown in two columns and containing a label and
value.

.. code:: python

```
 data.append({
    'label'   : str,
    'value'   : str,
    'key'     : str,  # set by some engines but unused
 })
```

type : :py:class:`str`  # set by some engines but unused (oscar)
Tag label from OSM\_KEYS\_TAGS\['tags'].

type\_icon : :py:class:`str`  # set by some engines but unused (oscar)
Type's icon.

osm : `{...}`
OSM-type and OSM-ID, can be used to Lookup OSM data ([Nominatim](https://nominatim.org/release-docs/latest/)). There is
also a discussion about "place\_id is not a persistent id" and the
perma\_id\_.

.. code:: python

```
 osm = {
     'type': str,
     'id':   str,
 }
```

type : :py:class:`str`
Type of osm-object (if OSM-Result).

id :
ID of osm-object (if OSM-Result).

.. hint:

```text
 The ``osm`` property is set by engine ``openstreetmap.py``, but it is not
 used in the ``map.html`` template yet.

```

.. \_template paper:

## `paper.html`

Displays result fields from:

- \[macro result\_header]\(#macro result\_header)

Additional fields used in the :origin:`paper.html <searx/templates/simple/result_templates/paper.html>`:

content :  :py:class:`str`
An abstract or excerpt from the document.

comments : :py:class:`str`
Free text display in italic below the content.

tags : :py:class:`List <list>`\ \[\ :py:class:`str`\ ]
Free tag list.

type : :py:class:`str`
Short description of medium type, e.g. *book*, *pdf* or *html* ...

authors : :py:class:`List <list>`\ \[\ :py:class:`str`\ ]
List of authors of the work (authors with a "s" suffix, the "author" is in the
\[macro result\_sub\_header]\(#macro result\_sub\_header)).

editor : :py:class:`str`
Editor of the book/paper.

publisher : :py:class:`str`
Name of the publisher.

journal : :py:class:`str`
Name of the journal or magazine the article was published in.

volume : :py:class:`str`
Volume number.

pages : :py:class:`str`
Page range where the article is.

number : :py:class:`str`
Number of the report or the issue number for a journal article.

doi : :py:class:`str`
DOI number (like `10.1038/d41586-018-07848-2`).

issn : :py:class:`List <list>`\ \[\ :py:class:`str`\ ]
ISSN number like `1476-4687`

isbn : :py:class:`List <list>`\ \[\ :py:class:`str`\ ]
ISBN number like `9780201896831`

pdf\_url : :py:class:`str`
URL to the full article, the PDF version

html\_url : :py:class:`str`
URL to full article, HTML version

.. \_template packages:

## `packages`

Displays result fields from:

- \[macro result\_header]\(#macro result\_header)

Additional fields used in the :origin:`packages.html <searx/templates/simple/result_templates/packages.html>`:

package\_name : :py:class:`str`
The name of the package.

version : :py:class:`str`
The current version of the package.

maintainer : :py:class:`str`
The maintainer or author of the project.

publishedDate : :py:class:`datetime <datetime.datetime>`
Date of latest update or release.

tags : :py:class:`List <list>`\ \[\ :py:class:`str`\ ]
Free tag list.

popularity : :py:class:`str`
The popularity of the package, e.g. rating or download count.

license\_name : :py:class:`str`
The name of the license.

license\_url : :py:class:`str`
The web location of a license copy.

homepage : :py:class:`str`
The url of the project's homepage.

source\_code\_url: :py:class:`str`
The location of the project's source code.

links : :py:class:`dict`
Additional links in the form of `{'link_name': 'http://example.com'}`

.. \_template products:

## `products.html`

Displays result fields from:

- \[macro result\_header]\(#macro result\_header) and
- \[macro result\_sub\_header]\(#macro result\_sub\_header)

Additional fields used in the :origin:`products.html <searx/templates/simple/result_templates/products.html>`:

content :  :py:class:`str`
Description of the product.

price : :py:class:`str`
The price must include the currency.

shipping : :py:class:`str`
Shipping details.

source\_country : :py:class:`str`
Place from which the shipment is made.

.. \_template answer results:

# Answer results

See result\_types.answer

# Suggestion results

See result\_types.suggestion

# Correction results

See result\_types.corrections

# Infobox results

See result\_types.infobox
