> Commit-pinned source for SearXNG master: [docs/admin/installation-granian.rst](https://github.com/searxng/searxng/blob/05cd77f71b466b7674658429d834a8db3b26811f/docs/admin/installation-granian.rst)

.. \_searxng granian:

# Granian

### further reading

- [Options](https://github.com/emmett-framework/granian/blob/master/README.md#options)
- [Workers and threads](https://github.com/emmett-framework/granian/blob/master/README.md#workers-and-threads)
- [Backpressure](https://github.com/emmett-framework/granian/blob/master/README.md#backpressure)
- [Runtime mode](https://github.com/emmett-framework/granian/blob/master/README.md#runtime-mode)

.. note:

```text
Granian will be the future replacement for :ref:`searxng uwsgi` in SearXNG.
At the moment, it's only officially supported in the :ref:`installation
container`.

```

.. \_Granian installation:

# Installation

We only recommend installing Granian with pip, as officially documented. Run
the following command in the Python environment of the SearXNG installation:

.. code:: sh

$ pip install granian

.. \_Granian configuration:

# Configuration

.. note:

```text
It's not advised to modify the amount of workers, expect increased resource
usage and potential issues with :ref:`botdetection`.

```

Granian can be configured via option parameters and environment variables
(`$GRANIAN*`).

We provide sane defaults that should fit most use cases, however if you feel
you should change something, Granian documents all available parameters in the
[Options](https://github.com/emmett-framework/granian/blob/master/README.md#options) section.
