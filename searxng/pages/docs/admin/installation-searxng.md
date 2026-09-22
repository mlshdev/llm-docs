> Pinned source for SearXNG master: [docs/admin/installation-searxng.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/admin/installation-searxng.rst)

<a id="installation-basic"></a>

# Step by step installation

In this section we show the setup of a SearXNG instance that will be installed
by the [installation scripts](https://docs.searxng.org/admin/installation-scripts.html#installation-scripts).

<a id="install-packages"></a>

# Install packages

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

> **Hint**
> This installs also the packages needed by [searxng uwsgi](https://docs.searxng.org/admin/installation-uwsgi.html#searxng-uwsgi)

<a id="create-searxng-user"></a>

# Create user

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

<a id="searxng-src"></a>

# Install SearXNG & dependencies

Start a interactive shell from new created user and clone SearXNG:

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

In the same shell create *virtualenv*:

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

To install SearXNG's dependencies, exit the SearXNG *bash* session you opened above
and start a new one.  Before installing, check if your *virtualenv* was sourced
from the login (*\~/.profile*):

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

> **Tip**
> Open a second terminal for the configuration tasks and leave the `(searx)$`
> terminal open for the tasks below.

<a id="use-default-settings-yml"></a>

# Configuration

### `use_default_settings: True`

- [settings.yml](https://docs.searxng.org/admin/settings/settings.html#settings-yml)
- [settings location](https://docs.searxng.org/admin/settings/settings.html#settings-location)
- [settings use\_default\_settings](https://docs.searxng.org/admin/settings/settings.html#settings-use-default-settings)
- [/etc/searxng/settings.yml](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/utils/templates/etc/searxng/settings.yml)

To create a initial `/etc/searxng/settings.yml` we recommend to start with a
copy of the file [utils/templates/etc/searxng/settings.yml](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/utils/templates/etc/searxng/settings.yml).  This setup
[use default settings](https://docs.searxng.org/admin/settings/settings.html#settings-use-default-settings) from
[searx/settings.yml](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/searx/settings.yml) and is shown in the tab *"Use default settings"*
below. This setup:

- enables [limiter](https://docs.searxng.org/admin/searx.limiter.html#limiter) to protect against bots
- enables [image proxy](https://docs.searxng.org/admin/settings/settings_server.html#image-proxy) for better privacy

Modify the `/etc/searxng/settings.yml` to your needs:

**Use default settings**

Build-time include: `../../utils/templates/etc/searxng/settings.yml`

To see the entire file jump to [utils/templates/etc/searxng/settings.yml](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/utils/templates/etc/searxng/settings.yml)

**searx/settings.yml**

Build-time include: `../../searx/settings.yml`

To see the entire file jump to [searx/settings.yml](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/searx/settings.yml)

For a *minimal setup* you need to set `server:secret_key`.

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

# Check

To check your SearXNG setup, optional enable debugging and start the *webapp*.
SearXNG looks at the exported environment `$SEARXNG_SETTINGS_PATH` for a
configuration file.

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

If everything works fine, hit `[CTRL-C]` to stop the *webapp* and disable the
debug option in `settings.yml`. You can now exit SearXNG user bash session (enter exit
command twice).  At this point SearXNG is not demonized; uwsgi allows this.
