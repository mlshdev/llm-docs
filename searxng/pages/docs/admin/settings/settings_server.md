> Commit-pinned source for SearXNG master: [docs/admin/settings/settings_server.rst](https://github.com/searxng/searxng/blob/05cd77f71b466b7674658429d834a8db3b26811f/docs/admin/settings/settings_server.rst)

.. \_settings server:

# `server:`

.. code:: yaml

server:
base\_url: <http://example.org/location>  # change this!
port: 8888
bind\_address: "127.0.0.1"
secret\_key: "ultrasecretkey"           # change this!
limiter: false
public\_instance: false
image\_proxy: false
method: "GET"
default\_http\_headers:
X-Content-Type-Options : nosniff
X-Download-Options : noopen
X-Robots-Tag : noindex, nofollow
Referrer-Policy : no-referrer

`base_url` : `$SEARXNG_BASE_URL`
The base URL where SearXNG is deployed.  Used to create correct inbound links.

`port` & `bind_address`: `$SEARXNG_PORT` & `$SEARXNG_BIND_ADDRESS`
Port number and *bind address* of the SearXNG web application if you run it
directly using `python searx/webapp.py`.  Doesn't apply to a SearXNG
services running behind a proxy and using socket communications.

.. \_server.secret\_key:

`secret_key` : `$SEARXNG_SECRET`
Used for cryptography purpose.

`limiter` :  `$SEARXNG_LIMITER`
Rate limit the number of request on the instance, block some bots.  The
limiter requires a \[settings valkey]\(#settings valkey) database.

.. \_public\_instance:

`public_instance` :  `$SEARXNG_PUBLIC_INSTANCE`

Setting that allows to enable features specifically for public instances (not
needed for local usage).  By set to `true` the following features are
activated:

- :py:obj:`searx.botdetection.link_token` in the limiter
- image\_proxy

.. \_image\_proxy:

`image_proxy` : `$SEARXNG_IMAGE_PROXY`
Allow your instance of SearXNG of being able to proxy images.  Uses memory space.

.. \_method:

`method` : `GET` | `POST`

HTTP method.  By default, `GET` is used / The `POST` method has the
advantage with some browsers that the history is not saved, but
there are also various disadvantages that sometimes **severely restrict the
ease of use for the end user** (e.g. back button to jump back to the previous
search page and drag & drop of search term to new tabs do not work as
expected .. and several more).  We had some discussions about the *pros
versus cons*:

- `[doc] adds the missing documentation of the server.method settings <https://github.com/searxng/searxng/pull/3619>`\_\_
- look out for `label:"http methods GET & POST" <https://github.com/search?q=repo%3Asearxng%2Fsearxng+label%3A%22http+methods+GET+%26+POST%22>`\_\_

`default_http_headers` :
Set additional [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers), see [#755](https://github.com/searx/searx/issues/715)\_
