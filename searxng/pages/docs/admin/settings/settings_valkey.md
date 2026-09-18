> Pinned source for SearXNG master: [docs/admin/settings/settings_valkey.rst](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/admin/settings/settings_valkey.rst)

<a id="settings-valkey"></a>

# `valkey:`

<a id="valkey"></a>
<https://valkey.io> <a id="valkey-installation"></a>
<https://valkey.io/topics/installation/> <a id="there-are-several-ways-to-specify-a-database-number"></a>
<https://valkey-py.readthedocs.io/en/stable/connections.html#valkey.Valkey.from_url>

A Valkey\_ DB can be connected by an URL, in section [valkey db](https://docs.searxng.org/src/searx.valkeydb.html#valkey-db) you will
find a description to test your valkey connection in SearXNG.

**`url` : `$SEARXNG_VALKEY_URL`**

URL to connect valkey database. `There are several ways to specify a database
number`\_:

```python
valkey://[[username]:[password]]@localhost:6379/0
valkeys://[[username]:[password]]@localhost:6379/0
unix://[[username]:[password]]@/path/to/socket.sock?db=0
```

When using sockets, don't forget to check the access rights on the socket:

```python
ls -la /usr/local/searxng-valkey/run/valkey.sock
srwxrwx--- 1 searxng-valkey searxng-valkey ... /usr/local/searxng-valkey/run/valkey.sock
```

In this example read/write access is given to the *searxng-valkey* group.  To
get access rights to valkey instance (the socket), your SearXNG (or even your
developer) account needs to be added to the *searxng-valkey* group.

<a id="valkey-developer-notes"></a>

# Valkey Developer Notes

To set up a local Valkey\_ DB, set the URL connector in your YAML setting:

```yaml
valkey:
  url: valkey://localhost:6379/0
```

To install a local Valkey\_ DB from package manager read [Valkey-Installation](https://docs.searxng.org/admin/settings/settings_valkey.html#valkey-installation)
or use:

```sh
$ ./utils/searxng.sh install valkey
# restart your SearXNG instance
```
