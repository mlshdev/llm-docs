> Pinned source for SearXNG master: [docs/admin/installation-nginx.rst](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/admin/installation-nginx.rst)

<a id="installation-nginx"></a>

# NGINX

<a id="nginx"></a>
<https://docs.nginx.com/nginx/admin-guide/> <a id="nginx-server-configuration"></a>
<https://docs.nginx.com/nginx/admin-guide/web-server/web-server/#setting-up-virtual-servers> <a id="nginx-beginners-guide"></a>
<https://nginx.org/en/docs/beginners_guide.html> <a id="getting-started-wiki"></a>
<https://www.nginx.com/resources/wiki/start/> <a id="uwsgi-support-from-nginx"></a>
<https://uwsgi-docs.readthedocs.io/en/latest/Nginx.html> <a id="uwsgi-params"></a>
<https://uwsgi-docs.readthedocs.io/en/latest/Nginx.html#configuring-nginx> <a id="script-name"></a>
<https://werkzeug.palletsprojects.com/en/1.0.x/wsgi/#werkzeug.wsgi.get_script_name>

This section explains how to set up a SearXNG instance using the HTTP server nginx\_.
If you have used the [installation scripts](https://docs.searxng.org/admin/installation-scripts.html#installation-scripts) and do not have any special preferences
you can install the [SearXNG site](https://docs.searxng.org/admin/installation-nginx.html#nginx-searxng-site) using
[searxng.sh](https://docs.searxng.org/utils/searxng.sh.html#searxng-sh-overview):

```bash
$ sudo -H ./utils/searxng.sh install nginx
```

If you have special interests or problems with setting up nginx, the following
section might give you some guidance.

### further reading

- nginx\_
- [nginx beginners guide](https://docs.searxng.org/admin/installation-nginx.html#nginx-beginners-guide)
- [nginx server configuration](https://docs.searxng.org/admin/installation-nginx.html#nginx-server-configuration)
- [Getting Started wiki](https://docs.searxng.org/admin/installation-nginx.html#getting-started-wiki)
- [uWSGI support from nginx](https://docs.searxng.org/admin/installation-nginx.html#uwsgi-support-from-nginx)

# The nginx HTTP server

If nginx\_ is not installed, install it now.

**Ubuntu / debian**

```bash
sudo -H apt-get install nginx
```

**Arch Linux**

```sh
sudo -H pacman -S nginx-mainline
sudo -H systemctl enable nginx
sudo -H systemctl start nginx
```

**Fedora / RHEL**

```sh
sudo -H dnf install nginx
sudo -H systemctl enable nginx
sudo -H systemctl start nginx
```

Now at <http://localhost> you should see a *Welcome to nginx!* page, on Fedora you
see a *Fedora Webserver - Test Page*.  The test page comes from the default
[nginx server configuration](https://docs.searxng.org/admin/installation-nginx.html#nginx-server-configuration).  How this default site is configured,
depends on the linux distribution:

**Ubuntu / debian**

```bash
less /etc/nginx/nginx.conf
```

There is one line that includes site configurations from:

```nginx
include /etc/nginx/sites-enabled/*;
```

**Arch Linux**

```sh
less /etc/nginx/nginx.conf
```

There is a configuration section named `server`:

```nginx
server {
    listen       80;
    server_name  localhost;
    # ...
}
```

**Fedora / RHEL**

```sh
less /etc/nginx/nginx.conf
```

There is one line that includes site configurations from:

```nginx
include /etc/nginx/conf.d/*.conf;
```

<a id="nginx-searxng-site"></a>

# NGINX's SearXNG site

Now you have to create a configuration file (`searxng.conf`) for the SearXNG
site.  If nginx\_ is new to you, the [nginx beginners guide](https://docs.searxng.org/admin/installation-nginx.html#nginx-beginners-guide) is a good starting
point and the [Getting Started wiki](https://docs.searxng.org/admin/installation-nginx.html#getting-started-wiki) is always a good resource *to keep in the
pocket*.

Depending on what your SearXNG installation is listening on, you need a http or socket
communication to upstream.

**socket**

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

**http**

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

The [installation scripts](https://docs.searxng.org/admin/installation-scripts.html#installation-scripts) installs the [reference setup](https://docs.searxng.org/admin/installation-searxng.html#use-default-settings-yml) and a [uwsgi setup](https://docs.searxng.org/admin/installation-uwsgi.html#uwsgi-setup) that listens on a socket by default.

**Ubuntu / debian**

Create configuration at `/etc/nginx/sites-available/` and place a
symlink to `sites-enabled`:

```bash
sudo -H ln -s /etc/nginx/sites-available/searxng.conf \
              /etc/nginx/sites-enabled/searxng.conf
```

**Arch Linux**

In the `/etc/nginx/nginx.conf` file, in the `server` section add a
[include](https://nginx.org/en/docs/ngx_core_module.html#include)
directive:

```nginx
server {
    # ...
    include /etc/nginx/default.d/*.conf;
    # ...
}
```

Create two folders, one for the *available sites* and one for the *enabled sites*:

```bash
mkdir -p /etc/nginx/default.d
mkdir -p /etc/nginx/default.apps-available
```

Create configuration at `/etc/nginx/default.apps-available` and place a
symlink to `default.d`:

```bash
sudo -H ln -s /etc/nginx/default.apps-available/searxng.conf \
              /etc/nginx/default.d/searxng.conf
```

**Fedora / RHEL**

Create a folder for the *available sites*:

```bash
mkdir -p /etc/nginx/default.apps-available
```

Create configuration at `/etc/nginx/default.apps-available` and place a
symlink to `conf.d`:

```bash
sudo -H ln -s /etc/nginx/default.apps-available/searxng.conf \
              /etc/nginx/conf.d/searxng.conf
```

Restart services:

**Ubuntu / debian**

```bash
sudo -H systemctl restart nginx
sudo -H service uwsgi restart searxng
```

**Arch Linux**

```bash
sudo -H systemctl restart nginx
sudo -H systemctl restart uwsgi@searxng
```

**Fedora / RHEL**

```bash
sudo -H systemctl restart nginx
sudo -H touch /etc/uwsgi.d/searxng.ini
```

# Disable logs

For better privacy you can disable nginx logs in `/etc/nginx/nginx.conf`.

```nginx
http {
    # ...
    access_log /dev/null;
    error_log  /dev/null;
    # ...
}
```
