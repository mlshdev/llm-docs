> Commit-pinned source for SearXNG master: [docs/admin/installation-searxng.rst](https://github.com/searxng/searxng/blob/05cd77f71b466b7674658429d834a8db3b26811f/docs/admin/installation-searxng.rst)

.. \_installation basic:

# Step by step installation

In this section we show the setup of a SearXNG instance that will be installed
by the \[installation scripts]\(#installation scripts).

.. \_install packages:

# Install packages

.. kernel-include:: $DOCS\_BUILD/includes/searxng.rst
:start-after: START distro-packages
:end-before: END distro-packages

.. hint:

```text
This installs also the packages needed by :ref:`searxng uwsgi`

```

.. \_create searxng user:

# Create user

.. kernel-include:: $DOCS\_BUILD/includes/searxng.rst
:start-after: START create user
:end-before: END create user

.. \_searxng-src:

# Install SearXNG & dependencies

Start a interactive shell from new created user and clone SearXNG:

.. kernel-include:: $DOCS\_BUILD/includes/searxng.rst
:start-after: START clone searxng
:end-before: END clone searxng

In the same shell create *virtualenv*:

.. kernel-include:: $DOCS\_BUILD/includes/searxng.rst
:start-after: START create virtualenv
:end-before: END create virtualenv

To install SearXNG's dependencies, exit the SearXNG *bash* session you opened above
and start a new one.  Before installing, check if your *virtualenv* was sourced
from the login (*\~/.profile*):

.. kernel-include:: $DOCS\_BUILD/includes/searxng.rst
:start-after: START manage.sh update\_packages
:end-before: END manage.sh update\_packages

.. tip:

```text
Open a second terminal for the configuration tasks and leave the ``(searx)$``
terminal open for the tasks below.

```

.. \_use\_default\_settings.yml:

# Configuration

### `use_default_settings: True`

- settings.yml
- \[settings location]\(#settings location)
- \[settings use\_default\_settings]\(#settings use\_default\_settings)
- :origin:`/etc/searxng/settings.yml <utils/templates/etc/searxng/settings.yml>`

To create a initial `/etc/searxng/settings.yml` we recommend to start with a
copy of the file :origin:`utils/templates/etc/searxng/settings.yml`.  This setup
\[use default settings]\(#settings use\_default\_settings) from
:origin:`searx/settings.yml` and is shown in the tab *"Use default settings"*
below. This setup:

- enables limiter to protect against bots
- enables image proxy for better privacy

Modify the `/etc/searxng/settings.yml` to your needs:

.. tabs:

```text
.. group-tab:: Use default settings

 .. literalinclude:: ../../utils/templates/etc/searxng/settings.yml
    :language: yaml
    :end-before: # preferences:

 To see the entire file jump to :origin:`utils/templates/etc/searxng/settings.yml`

.. group-tab:: searx/settings.yml

 .. literalinclude:: ../../searx/settings.yml
    :language: yaml
    :end-before: # hostnames:

 To see the entire file jump to :origin:`searx/settings.yml`

```

For a *minimal setup* you need to set `server:secret_key`.

.. kernel-include:: $DOCS\_BUILD/includes/searxng.rst
:start-after: START searxng config
:end-before: END searxng config

# Check

To check your SearXNG setup, optional enable debugging and start the *webapp*.
SearXNG looks at the exported environment `$SEARXNG_SETTINGS_PATH` for a
configuration file.

.. kernel-include:: $DOCS\_BUILD/includes/searxng.rst
:start-after: START check searxng installation
:end-before: END check searxng installation

If everything works fine, hit `[CTRL-C]` to stop the *webapp* and disable the
debug option in `settings.yml`. You can now exit SearXNG user bash session (enter exit
command twice).  At this point SearXNG is not demonized; uwsgi allows this.
