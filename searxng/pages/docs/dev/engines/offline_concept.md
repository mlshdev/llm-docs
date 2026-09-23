> Pinned source for SearXNG master: [docs/dev/engines/offline_concept.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/dev/engines/offline_concept.rst)

# Offline Concept

### offline engines

- [demo offline engine](https://docs.searxng.org/dev/engines/demo/demo_offline.html#demo-offline-engine)
- [engine command](https://docs.searxng.org/dev/engines/offline/command-line-engines.html#engine-command)
- [sql engines](https://docs.searxng.org/dev/engines/offline/sql-engines.html#sql-engines)
- [nosql engines](https://docs.searxng.org/dev/engines/offline/nosql-engines.html#nosql-engines)
- `searx.search.processors.offline`

To extend the functionality of SearXNG, offline engines are going to be
introduced.  An offline engine is an engine which does not need Internet
connection to perform a search and does not use HTTP to communicate.

Offline engines can be configured, by adding those to the `engines` list of
[settings.yml](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/searx/settings.yml).  An example skeleton for offline
engines can be found in [demo offline engine](https://docs.searxng.org/dev/engines/demo/demo_offline.html#demo-offline-engine) ([demo\_offline.py](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/searx/engines/demo_offline.py)).

# Programming Interface

**`init(engine_settings=None)`**

All offline engines can have their own init function to setup the engine before
accepting requests. The function gets the settings from settings.yml as a
parameter. This function can be omitted, if there is no need to setup anything
in advance.

**`search(query, params)`**

Each offline engine has a function named `search`.  This function is
responsible to perform a search and return the results in a presentable
format. (Where *presentable* means presentable by the selected result
template.)

The return value is a list of results retrieved by the engine.

**Engine representation in `/config`**

If an engine is offline, the attribute `offline` is set to `True`.

<a id="offline-requirements"></a>

# Extra Dependencies

If an offline engine depends on an external tool, SearXNG does not install it by
default.  When an administrator configures such engine and starts the instance,
the process returns an error with the list of missing dependencies.  Also,
required dependencies will be added to the comment/description of the engine, so
admins can install packages in advance.

If there is a need to install additional packages in *Python's Virtual
Environment* of your SearXNG instance you need to switch into the environment
([searxng-src](https://docs.searxng.org/admin/installation-searxng.html#searxng-src)) first, for this you can use [searxng.sh](https://docs.searxng.org/utils/searxng.sh.html#searxng-sh):

```python
$ sudo utils/searxng.sh instance cmd bash
(searxng-pyenv)$ pip install ...
```

# Private engines (Security)

To limit the access to offline engines, if an instance is available publicly,
administrators can set token(s) for each of the [private engines](https://docs.searxng.org/admin/settings/settings_engines.html#private-engines).  If a
query contains a valid token, then SearXNG performs the requested private
search.  If not, requests from an offline engines return errors.
