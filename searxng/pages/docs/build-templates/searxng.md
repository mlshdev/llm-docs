> Pinned source for SearXNG master: [docs/build-templates/searxng.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/build-templates/searxng.rst)

**Ubuntu / debian**

```sh
$ sudo -H apt-get install -y \\
```

**${debian}**

**Arch Linux**

```sh
$ sudo -H pacman -S --noconfirm \\
```

**${arch}**

**Fedora / RHEL**

```sh
$ sudo -H dnf install -y \\
```

${fedora}

**Ubuntu / debian**

```sh
$ sudo -H apt-get install -y \\
```

**${debian\_build}**

**Arch Linux**

```sh
$ sudo -H pacman -S --noconfirm \\
```

**${arch\_build}**

**Fedora / RHEL**

```sh
$ sudo -H dnf install -y \\
```

${fedora\_build}

**bash**

```sh
$ sudo -H useradd --shell /bin/bash --system \\
    --home-dir \"$SERVICE_HOME\" \\
    --comment 'Privacy-respecting metasearch engine' \\
    $SERVICE_USER

$ sudo -H mkdir \"$SERVICE_HOME\"
$ sudo -H chown -R \"$SERVICE_GROUP:$SERVICE_GROUP\" \"$SERVICE_HOME\"
```

**bash**

```sh
$ sudo -H -u ${SERVICE_USER} -i
(${SERVICE_USER})$ git clone \"$GIT_URL\" \\
                   \"$SEARXNG_SRC\"
```

**bash**

```sh
(${SERVICE_USER})$ python3 -m venv \"${SEARXNG_PYENV}\"
(${SERVICE_USER})$ echo \". ${SEARXNG_PYENV}/bin/activate\" \\
                   >>  \"$SERVICE_HOME/.profile\"
```

**bash**

```sh
$ sudo -H -u ${SERVICE_USER} -i

(${SERVICE_USER})$ command -v python && python --version
$SEARXNG_PYENV/bin/python
Python 3.11.10

# update pip's boilerplate ..
pip install -U pip
pip install -U setuptools
pip install -U wheel

# additional packages required for installation
pip install -U pyyaml
pip install -U msgspec
pip install -U typing-extensions
pip install -U pybind11

# jump to SearXNG's working tree and install SearXNG into virtualenv
(${SERVICE_USER})$ cd \"$SEARXNG_SRC\"
(${SERVICE_USER})$ pip install --use-pep517 --no-build-isolation -e .
```

**Use default settings**

```sh
$ sudo -H mkdir -p \"$(dirname ${SEARXNG_SETTINGS_PATH})\"
$ sudo -H cp \"$SEARXNG_SRC/utils/templates/etc/searxng/settings.yml\" \\
             \"${SEARXNG_SETTINGS_PATH}\"
```

**minimal setup**

```sh
$ sudo -H sed -i -e \"s/ultrasecretkey/\$(openssl rand -hex 16)/g\" \\
              \"$SEARXNG_SETTINGS_PATH\"
```

**bash**

```sh
# enable debug ..
$ sudo -H sed -i -e \"s/debug : False/debug : True/g\" \"$SEARXNG_SETTINGS_PATH\"

# start webapp
$ sudo -H -u ${SERVICE_USER} -i
(${SERVICE_USER})$ cd ${SEARXNG_SRC}
(${SERVICE_USER})$ export SEARXNG_SETTINGS_PATH=\"${SEARXNG_SETTINGS_PATH}\"
(${SERVICE_USER})$ python -m searx.webapp

# disable debug
$ sudo -H sed -i -e \"s/debug : True/debug : False/g\" \"$SEARXNG_SETTINGS_PATH\"
```

Open WEB browser and visit http\://$SEARXNG\_INTERNAL\_HTTP .  If you are inside a
container or in a script, test with curl:

**WEB browser**

```sh
$ xdg-open http://$SEARXNG_INTERNAL_HTTP
```

**curl**

```none
$ curl --location --verbose --head --insecure $SEARXNG_INTERNAL_HTTP

*   Trying 127.0.0.1:8888...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 8888 (#0)
> HEAD / HTTP/1.1
> Host: 127.0.0.1:8888
> User-Agent: curl/7.68.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
* HTTP 1.0, assume close after body
< HTTP/1.0 200 OK
HTTP/1.0 200 OK
...
```
