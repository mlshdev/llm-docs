> Pinned source for SearXNG master: [docs/admin/installation-granian.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/docs/admin/installation-granian.rst)

<a id="searxng-granian"></a>

# Granian

<a id="options"></a> <a id="workers-and-threads"></a> <a id="backpressure"></a> <a id="runtime-mode"></a>

### further reading

- [Options](https://docs.searxng.org/admin/installation-granian.html#options)
- [Workers and threads](https://docs.searxng.org/admin/installation-granian.html#workers-and-threads)
- [Backpressure](https://docs.searxng.org/admin/installation-granian.html#backpressure)
- [Runtime mode](https://docs.searxng.org/admin/installation-granian.html#runtime-mode)

> **Note**
> Granian will be the future replacement for [searxng uwsgi](https://docs.searxng.org/admin/installation-uwsgi.html#searxng-uwsgi) in SearXNG.
> At the moment, it's only officially supported in the [installation container](https://docs.searxng.org/admin/installation-docker.html#installation-container).

<a id="granian-installation"></a>

# Installation

We only recommend installing Granian with pip, as officially documented. Run
the following command in the Python environment of the SearXNG installation:

```sh
$ pip install granian
```

<a id="granian-configuration"></a>

# Configuration

> **Note**
> It's not advised to modify the amount of workers, expect increased resource
> usage and potential issues with [botdetection](https://docs.searxng.org/src/searx.botdetection.html#botdetection).

Granian can be configured via option parameters and environment variables
(`$GRANIAN_*`).

We provide sane defaults that should fit most use cases, however if you feel
you should change something, Granian documents all available parameters in the
[Options](https://docs.searxng.org/admin/installation-granian.html#options) section.
