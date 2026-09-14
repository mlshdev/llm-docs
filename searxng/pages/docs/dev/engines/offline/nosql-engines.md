> Pinned source for SearXNG master: [docs/dev/engines/offline/nosql-engines.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/docs/dev/engines/offline/nosql-engines.rst)

<a id="nosql-engines"></a>

# NoSQL databases

### further read

- [NoSQL database](https://en.wikipedia.org/wiki/NoSQL)
- [valkey.io](https://valkey.io/)
- [MongoDB](https://www.mongodb.com)

### info

Initial sponsored by `Search and Discovery Fund <https://nlnet.nl/discovery>`\_ of [NLnet Foundation](https://nlnet.nl/).

The following NoSQL database are supported:

- [engine valkey\_server](https://docs.searxng.org/dev/engines/offline/nosql-engines.html#engine-valkey-server)
- [engine mongodb](https://docs.searxng.org/dev/engines/offline/nosql-engines.html#engine-mongodb)

All of the engines above are just commented out in the [settings.yml](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/searx/settings.yml), as you have to set various options and install
dependencies before using them.

By default, the engines use the `key-value` template for displaying results /
see [simple](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/searx/templates/simple/result_templates/key-value.html)
theme.  If you are not satisfied with the original result layout, you can use
your own template, set `result_template` attribute to `{template_name}` and
place the templates at:

```python
searx/templates/{theme_name}/result_templates/{template_name}
```

Furthermore, if you do not wish to expose these engines on a public instance, you
can still add them and limit the access by setting `tokens` as described in
section [private engines](https://docs.searxng.org/admin/settings/settings_engines.html#private-engines).

# Extra Dependencies

For using [engine valkey\_server](https://docs.searxng.org/dev/engines/offline/nosql-engines.html#engine-valkey-server) or [engine mongodb](https://docs.searxng.org/dev/engines/offline/nosql-engines.html#engine-mongodb) you need to
install additional packages in Python's Virtual Environment of your SearXNG
instance.  To switch into the environment ([searxng-src](https://docs.searxng.org/admin/installation-searxng.html#searxng-src)) you can use
[searxng.sh](https://docs.searxng.org/utils/searxng.sh.html#searxng-sh):

```python
$ sudo utils/searxng.sh instance cmd bash
(searxng-pyenv)$ pip install ...
```

# Configure the engines

NoSQL database are used for storing arbitrary data without first defining
their structure.

<a id="engine-valkey-server"></a>

## Valkey Server

<a id="valkey"></a>

### info

- `pip install` valkey\_
- valkey.io\_
- [valkey\_server.py](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/searx/engines/valkey_server.py)

#### `searx.engines.valkey_server`

Static Python API reference (`automodule`).

<a id="engine-mongodb"></a>

## MongoDB / PyMongo

<a id="pymongo"></a>

### info

- `pip install` pymongo\_
- MongoDB\_
- [mongodb.py](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/searx/engines/mongodb.py)

#### `searx.engines.mongodb`

Static Python API reference (`automodule`).
