> Commit-pinned source for SearXNG master: [docs/admin/architecture.rst](https://github.com/searxng/searxng/blob/c7f3080aac5de13b619c4a5ab36590a2c5165e1c/docs/admin/architecture.rst)

.. \_architecture:

# Architecture

### Further reading

- Reverse Proxy: \[Apache]\(#apache searxng site) & :ref:`nginx <nginx
  searxng site>`
- uWSGI: \[searxng uwsgi]\(#searxng uwsgi)
- SearXNG: \[installation basic]\(#installation basic)

Herein you will find some hints and suggestions about typical architectures of
SearXNG infrastructures.

.. \_architecture uWSGI:

# uWSGI Setup

We start with a *reference* setup for public SearXNG instances which can be build
up and maintained by the scripts from our toolboxing.

.. \_arch public:

.. kernel-figure:: arch\_public.dot
:alt: arch\_public.dot

Reference architecture of a public SearXNG setup.

The reference installation activates `server.limiter` and
`server.image_proxy` (:origin:`/etc/searxng/settings.yml <utils/templates/etc/searxng/settings.yml>`)

.. literalinclude:: ../../utils/templates/etc/searxng/settings.yml
:language: yaml
:end-before: # preferences:
