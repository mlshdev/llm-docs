> Pinned source for SearXNG master: [docs/admin/update-searxng.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/admin/update-searxng.rst)

<a id="searxng-maintenance"></a>

# SearXNG maintenance

### further read

- [toolboxing](https://docs.searxng.org/utils/index.html#toolboxing)
- [uWSGI maintenance](https://docs.searxng.org/admin/installation-uwsgi.html#uwsgi-maintenance)

<a id="update-searxng"></a>

# How to update

How to update depends on the [installation](https://docs.searxng.org/admin/installation.html#installation) method.  If you have used the
[installation scripts](https://docs.searxng.org/admin/installation-scripts.html#installation-scripts), use the `update` command from the [searxng.sh](https://docs.searxng.org/utils/searxng.sh.html#searxng-sh)
script.

```sh
sudo -H ./utils/searxng.sh instance update
```

<a id="inspect-searxng"></a>

# How to inspect & debug

How to debug depends on the [installation](https://docs.searxng.org/admin/installation.html#installation) method.  If you have used the
[installation scripts](https://docs.searxng.org/admin/installation-scripts.html#installation-scripts), use the `inspect` command from the [searxng.sh](https://docs.searxng.org/utils/searxng.sh.html#searxng-sh)
script.

```sh
sudo -H ./utils/searxng.sh instance inspect
```

<a id="migrate-and-stay-tuned"></a>

# Migrate and stay tuned!

### info

- [1332](https://github.com/searxng/searxng/pull/1332)
- [456](https://github.com/searxng/searxng/pull/456)
- [A comment about rolling release](https://github.com/searxng/searxng/pull/446#issuecomment-954730358)

SearXNG is a *rolling release*; each commit to the master branch is a release.
SearXNG is growing rapidly, the services and opportunities are change every now
and then, to name just a few:

- Bot protection has been switched from filtron to SearXNG's [limiter](https://docs.searxng.org/admin/searx.limiter.html#limiter), this requires a [Valkey](https://docs.searxng.org/admin/settings/settings_valkey.html#settings-valkey) database.

To stay tuned and get in use of the new features, instance maintainers have to
update the SearXNG code regularly (see [update searxng](https://docs.searxng.org/admin/update-searxng.html#update-searxng)).  As the above
examples show, this is not always enough, sometimes services have to be set up
or reconfigured and sometimes services that are no longer needed should be
uninstalled.

Here you will find a list of changes that affect the infrastructure.  Please
check to what extent it is necessary to update your installations:

**[1595](https://github.com/searxng/searxng/pull/1595): `[fix] uWSGI: increase buffer-size`**

Re-install uWSGI ([searxng.sh](https://docs.searxng.org/utils/searxng.sh.html#searxng-sh)) or fix your uWSGI `searxng.ini`
file manually.

## Check after Installation

Once you have done your installation, you can run a SearXNG *check* procedure,
to see if there are some left overs.  In this example there exists a *old*
`/etc/searx/settings.yml`:

```python
$ sudo -H ./utils/searxng.sh instance check

SearXNG checks
--------------
ERROR: settings.yml in /etc/searx/ is deprecated, move file to folder /etc/searxng/
...
INFO    searx.valkeydb                 : connecting to Valkey db=0 path='/usr/local/searxng-valkey/run/valkey.sock'
INFO    searx.valkeydb                 : connected to Valkey
```
