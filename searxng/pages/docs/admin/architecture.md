> Pinned source for SearXNG master: [docs/admin/architecture.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/admin/architecture.rst)

<a id="architecture"></a>

# Architecture

### Further reading

- Reverse Proxy: [Apache](https://docs.searxng.org/admin/installation-apache.html#apache-searxng-site) & [nginx](https://docs.searxng.org/admin/installation-nginx.html#nginx-searxng-site)
- uWSGI: [searxng uwsgi](https://docs.searxng.org/admin/installation-uwsgi.html#searxng-uwsgi)
- SearXNG: [installation basic](https://docs.searxng.org/admin/installation-searxng.html#installation-basic)

Herein you will find some hints and suggestions about typical architectures of
SearXNG infrastructures.

<a id="architecture-uwsgi"></a>

# uWSGI Setup

We start with a *reference* setup for public SearXNG instances which can be build
up and maintained by the scripts from our [toolboxing](https://docs.searxng.org/utils/index.html#toolboxing).

<a id="arch-public"></a>

![arch\_public.dot](https://raw.githubusercontent.com/searxng/searxng/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/admin/arch_public.dot)

*Reference architecture of a public SearXNG setup.*

The reference installation activates `server.limiter` and
`server.image_proxy` ([/etc/searxng/settings.yml](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/utils/templates/etc/searxng/settings.yml))

Build-time include: `../../utils/templates/etc/searxng/settings.yml`
