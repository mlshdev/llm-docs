> Pinned source for SearXNG master: [docs/utils/index.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/utils/index.rst)

<a id="searx-utils"></a> <a id="toolboxing"></a>

# DevOps tooling box

In the folder [utils/](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/utils/) we maintain some tools useful for administrators
and developers.

- [searxng.sh](https://docs.searxng.org/searxng.sh.html)

# Common command environments

The scripts in our tooling box often dispose of common environments:

<a id="force-timeout"></a>

**`FORCE_TIMEOUT` : environment**

Sets timeout for interactive prompts. If you want to run a script in batch
job, with defaults choices, set `FORCE_TIMEOUT=0`.  By example; to install a
SearXNG server and nginx proxy use:

```python
$ FORCE_TIMEOUT=0 ./utils/searxng.sh install all
$ FORCE_TIMEOUT=0 ./utils/searxng.sh install nginx
```
