> Pinned source for SearXNG master: [docs/admin/installation-scripts.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/docs/admin/installation-scripts.rst)

<a id="installation-scripts"></a>

# Installation Script

### Update the OS first!

To avoid unwanted side effects, update your OS before installing SearXNG.

The following will install a setup as shown in [the reference architecture](https://docs.searxng.org/admin/architecture.html#arch-public).  First you need to get a clone of the repository.  The clone is only needed for
the installation procedure and some maintenance tasks.

### further read

- [toolboxing](https://docs.searxng.org/utils/index.html#toolboxing)

Jump to a folder that is readable by *others* and start to clone SearXNG,
alternatively you can create your own fork and clone from there.

```bash
$ cd ~/Downloads
$ git clone https://github.com/searxng/searxng.git searxng
$ cd searxng
```

### further read

- [inspect searxng](https://docs.searxng.org/admin/update-searxng.html#inspect-searxng)

To install a SearXNG [reference setup](https://docs.searxng.org/admin/installation-searxng.html#use-default-settings-yml)
including a [uWSGI setup](https://docs.searxng.org/admin/architecture.html#architecture-uwsgi) as described in the
[installation basic](https://docs.searxng.org/admin/installation-searxng.html#installation-basic) and in the [searxng uwsgi](https://docs.searxng.org/admin/installation-uwsgi.html#searxng-uwsgi) section type:

```bash
$ sudo -H ./utils/searxng.sh install all
```

> **Attention**
> For the installation procedure, use a *sudoer* login to run the scripts.  If
> you install from `root`, take into account that the scripts are creating a
> `searxng` user.  In the installation procedure this new created user does
> need to have read access to the cloned SearXNG repository, which is not the case if you clone
> it into a folder below `/root`!

### further read

- [update searxng](https://docs.searxng.org/admin/update-searxng.html#update-searxng)

<a id="caddy"></a>

When all services are installed and running fine, you can add SearXNG to your
HTTP server.  We do not have any preferences regarding the HTTP server, you can use
whatever you prefer.

We implemented installation procedures for:

- [installation nginx](https://docs.searxng.org/admin/installation-nginx.html#installation-nginx)
- [installation apache](https://docs.searxng.org/admin/installation-apache.html#installation-apache)
