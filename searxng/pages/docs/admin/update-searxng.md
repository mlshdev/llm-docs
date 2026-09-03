> Commit-pinned source for SearXNG master: [docs/admin/update-searxng.rst](https://github.com/searxng/searxng/blob/8f452ee89293d9a752a776f4c33f5a5f124fff97/docs/admin/update-searxng.rst)

.. \_searxng maintenance:

# SearXNG maintenance

### further read

- toolboxing
- \[uWSGI maintenance]\(#uWSGI maintenance)

.. \_update searxng:

# How to update

How to update depends on the installation method.  If you have used the
\[installation scripts]\(#installation scripts), use the `update` command from the searxng.sh
script.

.. code:: sh

```
sudo -H ./utils/searxng.sh instance update
```

.. \_inspect searxng:

# How to inspect & debug

How to debug depends on the installation method.  If you have used the
\[installation scripts]\(#installation scripts), use the `inspect` command from the searxng.sh
script.

.. code:: sh

```
sudo -H ./utils/searxng.sh instance inspect
```

.. \_migrate and stay tuned:

# Migrate and stay tuned!

### info

- :pull:`1332`
- :pull:`456`
- :pull:`A comment about rolling release <446#issuecomment-954730358>`

SearXNG is a *rolling release*; each commit to the master branch is a release.
SearXNG is growing rapidly, the services and opportunities are change every now
and then, to name just a few:

- Bot protection has been switched from filtron to SearXNG's :ref:`limiter <limiter>`, this requires a \[Valkey]\(#settings valkey) database.

To stay tuned and get in use of the new features, instance maintainers have to
update the SearXNG code regularly (see \[update searxng]\(#update searxng)).  As the above
examples show, this is not always enough, sometimes services have to be set up
or reconfigured and sometimes services that are no longer needed should be
uninstalled.

Here you will find a list of changes that affect the infrastructure.  Please
check to what extent it is necessary to update your installations:

:pull:`1595`: `[fix] uWSGI: increase buffer-size`
Re-install uWSGI (searxng.sh) or fix your uWSGI `searxng.ini`
file manually.

## Check after Installation

Once you have done your installation, you can run a SearXNG *check* procedure,
to see if there are some left overs.  In this example there exists a *old*
`/etc/searx/settings.yml`:

```text
$ sudo -H ./utils/searxng.sh instance check

SearXNG checks
--------------
ERROR: settings.yml in /etc/searx/ is deprecated, move file to folder /etc/searxng/
...
INFO    searx.valkeydb                 : connecting to Valkey db=0 path='/usr/local/searxng-valkey/run/valkey.sock'
INFO    searx.valkeydb                 : connected to Valkey

```
