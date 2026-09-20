> Pinned source for SearXNG master: [docs/admin/installation-uwsgi.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/admin/installation-uwsgi.rst)

<a id="searxng-uwsgi"></a>

# uWSGI

### further reading

- [systemd.unit](https://docs.searxng.org/admin/installation-uwsgi.html#systemd-unit)
- [uWSGI Emperor](https://docs.searxng.org/admin/installation-uwsgi.html#uwsgi-emperor)

<a id="systemd-unit"></a> <a id="one-service-per-app-in-systemd"></a>
<https://uwsgi-docs.readthedocs.io/en/latest/Systemd.html#one-service-per-app-in-systemd> <a id="uwsgi-emperor"></a>
<https://uwsgi-docs.readthedocs.io/en/latest/Emperor.html> <a id="uwsgi-ini-file"></a>
<https://uwsgi-docs.readthedocs.io/en/latest/Configuration.html#ini-files> <a id="systemd-unit-template"></a>
<http://0pointer.de/blog/projects/instances.html>

# Origin uWSGI

<a id="tyrant-mode"></a>
<https://uwsgi-docs.readthedocs.io/en/latest/Emperor.html#tyrant-mode-secure-multi-user-hosting>

How uWSGI is implemented by distributors varies. The uWSGI project itself
recommends two methods:

1. [systemd.unit](https://docs.searxng.org/admin/installation-uwsgi.html#systemd-unit) template file as described here [One service per app in systemd](https://docs.searxng.org/admin/installation-uwsgi.html#one-service-per-app-in-systemd):

There is one [systemd unit template](https://docs.searxng.org/admin/installation-uwsgi.html#systemd-unit-template) on the system installed and one `uwsgi
  ini file`\_ per uWSGI-app placed at dedicated locations.  Take archlinux and a
`searxng.ini` as example:

```python
systemd template unit: /usr/lib/systemd/system/uwsgi@.service
        contains: [Service]
                  ExecStart=/usr/bin/uwsgi --ini /etc/uwsgi/%I.ini

SearXNG application:   /etc/uwsgi/searxng.ini
        links to: /etc/uwsgi/apps-available/searxng.ini
```

The SearXNG app (template `/etc/uwsgi/%I.ini`) can be maintained as known
from common systemd units:

```sh
$ systemctl enable  uwsgi@searxng
$ systemctl start   uwsgi@searxng
$ systemctl restart uwsgi@searxng
$ systemctl stop    uwsgi@searxng
```

2. The [uWSGI Emperor](https://docs.searxng.org/admin/installation-uwsgi.html#uwsgi-emperor) which fits for maintaining a large range of uwsgi
   apps and there is a [Tyrant mode](https://docs.searxng.org/admin/installation-uwsgi.html#tyrant-mode) to secure multi-user hosting.

The Emperor mode is a special uWSGI instance that will monitor specific
events.  The Emperor mode (the service) is started by a (common, not template)
systemd unit.

The Emperor service will scan specific directories for [uwsgi ini file](https://docs.searxng.org/admin/installation-uwsgi.html#uwsgi-ini-file)\s
(also know as *vassals*).  If a *vassal* is added, removed or the timestamp is
modified, a corresponding action takes place: a new uWSGI instance is started,
reload or stopped.  Take Fedora and a `searxng.ini` as example:

```python
to install & start SearXNG instance create --> /etc/uwsgi.d/searxng.ini
to reload the instance edit timestamp      --> touch /etc/uwsgi.d/searxng.ini
to stop instance remove ini                --> rm /etc/uwsgi.d/searxng.ini
```

# Distributors

The [uWSGI Emperor](https://docs.searxng.org/admin/installation-uwsgi.html#uwsgi-emperor) mode and [systemd unit template](https://docs.searxng.org/admin/installation-uwsgi.html#systemd-unit-template) is what the distributors
mostly offer their users, even if they differ in the way they implement both
modes and their defaults.  Another point they might differ in is the packaging of
plugins (if so, compare [install packages](https://docs.searxng.org/admin/installation-searxng.html#install-packages)) and what the default python
interpreter is (python2 vs. python3).

While archlinux does not start a uWSGI service by default, Fedora (RHEL) starts
a Emperor in [Tyrant mode](https://docs.searxng.org/admin/installation-uwsgi.html#tyrant-mode) by default (you should have read [uWSGI Tyrant mode pitfalls](https://docs.searxng.org/admin/installation-uwsgi.html#uwsgi-tyrant-mode-pitfalls)).  Worth to know; debian (ubuntu) follow a complete different
approach, read see [Debian's uWSGI layout](https://docs.searxng.org/admin/installation-uwsgi.html#debian-s-uwsgi-layout).

<a id="debian-s-uwsgi-layout"></a>

## Debian's uWSGI layout

<a id="uwsgi-readme-debian"></a>
<https://salsa.debian.org/uwsgi-team/uwsgi/-/raw/debian/latest/debian/uwsgi.README.Debian>

Be aware, Debian's uWSGI layout is quite different from the standard uWSGI
configuration.  Your are familiar with [Debian's Apache layout](https://docs.searxng.org/admin/installation-apache.html#debian-s-apache-layout)? .. they do a
similar thing for the uWSGI infrastructure. The folders are:

```python
/etc/uwsgi/apps-available/
/etc/uwsgi/apps-enabled/
```

The [uwsgi ini file](https://docs.searxng.org/admin/installation-uwsgi.html#uwsgi-ini-file) is enabled by a symbolic link:

```python
ln -s /etc/uwsgi/apps-available/searxng.ini /etc/uwsgi/apps-enabled/
```

More details can be found in the uwsgi.README.Debian\_
(`/usr/share/doc/uwsgi/README.Debian.gz`).  Some commands you should know on
Debian:

```none
Commands recognized by init.d script
====================================

You can issue to init.d script following commands:
  * start        | starts daemon
  * stop         | stops daemon
  * reload       | sends to daemon SIGHUP signal
  * force-reload | sends to daemon SIGTERM signal
  * restart      | issues 'stop', then 'start' commands
  * status       | shows status of daemon instance (running/not running)

'status' command must be issued with exactly one argument: '<confname>'.

Controlling specific instances of uWSGI
=======================================

You could control specific instance(s) by issuing:

    SYSTEMCTL_SKIP_REDIRECT=1 service uwsgi <command> <confname> <confname>...

where:
  * <command> is one of 'start', 'stop' etc.
  * <confname> is the name of configuration file (without extension)

For example, this is how instance for /etc/uwsgi/apps-enabled/hello.xml is
started:

    SYSTEMCTL_SKIP_REDIRECT=1 service uwsgi start hello
```

<a id="uwsgi-maintenance"></a>

# uWSGI maintenance

**Ubuntu / debian**

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

**Arch Linux**

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

**Fedora / RHEL**

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

<a id="uwsgi-setup"></a>

# uWSGI setup

Create the configuration ini-file according to your distribution and restart the
uwsgi application.  As shown below, the [installation scripts](https://docs.searxng.org/admin/installation-scripts.html#installation-scripts) installs by
default a uWSGI setup that listens on a socket.

**Ubuntu / debian**

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

**Arch Linux**

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

**Fedora / RHEL**

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

<a id="uwsgi-tyrant-mode-pitfalls"></a>

# Pitfalls of the Tyrant mode

The implementation of the process owners and groups in the [Tyrant mode](https://docs.searxng.org/admin/installation-uwsgi.html#tyrant-mode) is
somewhat unusual and requires special consideration.  In [Tyrant mode](https://docs.searxng.org/admin/installation-uwsgi.html#tyrant-mode) mode the
Emperor will run the vassal using the UID/GID of the vassal configuration file
(user and group of the app `.ini` file).

<a id="2099-uwsgi"></a> <a id="752-uwsgi"></a> <a id="2425uwsgi"></a>

Without option `emperor-tyrant-initgroups=true` in `/etc/uwsgi.ini` the
process won't get the additional groups, but this option is not available in
2.0.x branch (see [#2099@uWSGI](https://docs.searxng.org/admin/installation-uwsgi.html#2099-uwsgi)) the feature [#752@uWSGI](https://docs.searxng.org/admin/installation-uwsgi.html#752-uwsgi) has been merged (on
Oct. 2014) to the master branch of uWSGI but had never been released; the last
major release is from Dec. 2013, since the there had been only bugfix releases
**(see [#2425uWSGI](https://docs.searxng.org/admin/installation-uwsgi.html#2425uwsgi)). To shorten up:**

**In Tyrant mode, there is no way to get additional groups, and the uWSGI
process misses additional permissions that may be needed.**

For example on Fedora (RHEL): If you try to install a valkey DB with socket
communication and you want to connect to it from the SearXNG uWSGI, you will see a
*Permission denied* in the log of your instance:

```python
ERROR:searx.valkeydb: [searxng (993)] can't connect valkey DB ...
ERROR:searx.valkeydb:   Error 13 connecting to unix socket: /usr/local/searxng-valkey/run/valkey.sock. Permission denied.
ERROR:searx.plugins.limiter: init limiter DB failed!!!
```

Even if your *searxng* user of the uWSGI process is added to additional groups
to give access to the socket from the valkey DB:

```python
$ groups searxng
searxng : searxng searxng-valkey
```

To see the effective groups of the uwsgi process, you have to look at the status
of the process, by example:

```python
$ ps -aef | grep '/usr/sbin/uwsgi --ini searxng.ini'
searxng       93      92  0 12:43 ?        00:00:00 /usr/sbin/uwsgi --ini searxng.ini
searxng      186      93  0 12:44 ?        00:00:01 /usr/sbin/uwsgi --ini searxng.ini
```

Here you can see that the additional "Groups" of PID 186 are unset (missing gid
of `searxng-valkey`):

```python
$ cat /proc/186/task/186/status
...
Uid:      993     993     993     993
Gid:      993     993     993     993
FDSize:   128
Groups:
...
```
