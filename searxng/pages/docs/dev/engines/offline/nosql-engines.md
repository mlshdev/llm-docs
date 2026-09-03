> Commit-pinned source for SearXNG master: [docs/dev/engines/offline/nosql-engines.rst](https://github.com/searxng/searxng/blob/8f452ee89293d9a752a776f4c33f5a5f124fff97/docs/dev/engines/offline/nosql-engines.rst)

.. \_nosql engines:

# NoSQL databases

### further read

- [NoSQL database](https://en.wikipedia.org/wiki/NoSQL)
- [valkey.io](https://valkey.io/)
- [MongoDB](https://www.mongodb.com)

### info

Initial sponsored by `Search and Discovery Fund    <https://nlnet.nl/discovery>`\_ of [NLnet Foundation](https://nlnet.nl/).

The following NoSQL database are supported:

- \[engine valkey\_server]\(#engine valkey\_server)
- \[engine mongodb]\(#engine mongodb)

All of the engines above are just commented out in the :origin:`settings.yml <searx/settings.yml>`, as you have to set various options and install
dependencies before using them.

By default, the engines use the `key-value` template for displaying results /
see :origin:`simple <searx/templates/simple/result_templates/key-value.html>`
theme.  If you are not satisfied with the original result layout, you can use
your own template, set `result_template` attribute to `{template_name}` and
place the templates at:

```text
searx/templates/{theme_name}/result_templates/{template_name}

```

Furthermore, if you do not wish to expose these engines on a public instance, you
can still add them and limit the access by setting `tokens` as described in
section \[private engines]\(#private engines).

# Extra Dependencies

For using \[engine valkey\_server]\(#engine valkey\_server) or \[engine mongodb]\(#engine mongodb) you need to
install additional packages in Python's Virtual Environment of your SearXNG
instance.  To switch into the environment (searxng-src) you can use
searxng.sh:

```text
$ sudo utils/searxng.sh instance cmd bash
(searxng-pyenv)$ pip install ...

```

# Configure the engines

NoSQL database are used for storing arbitrary data without first defining
their structure.

.. \_engine valkey\_server:

## Valkey Server

### info

- `pip install` [valkey](https://github.com/andymccurdy/valkey-py#installation)
- valkey.io
- :origin:`valkey_server.py <searx/engines/valkey_server.py>`

.. automodule:: searx.engines.valkey\_server
:members:

.. \_engine mongodb:

## MongoDB / PyMongo

### info

- `pip install` [pymongo](https://github.com/mongodb/mongo-python-driver#installation)
- MongoDB
- :origin:`mongodb.py <searx/engines/mongodb.py>`

.. automodule:: searx.engines.mongodb
:members:
