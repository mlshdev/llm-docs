> Commit-pinned source for SearXNG master: [docs/admin/settings/settings_valkey.rst](https://github.com/searxng/searxng/blob/8f452ee89293d9a752a776f4c33f5a5f124fff97/docs/admin/settings/settings_valkey.rst)

.. \_settings valkey:

# `valkey:`

.. \_Valkey:
<https://valkey.io>
.. \_Valkey-Installation:
<https://valkey.io/topics/installation/>
.. \_There are several ways to specify a database number:
<https://valkey-py.readthedocs.io/en/stable/connections.html#valkey.Valkey.from_url>

A Valkey DB can be connected by an URL, in section \[valkey db]\(#valkey db) you will
find a description to test your valkey connection in SearXNG.

`url` : `$SEARXNG_VALKEY_URL`
URL to connect valkey database. `There are several ways to specify a database
  number`\_:

```text
valkey://[[username]:[password]]@localhost:6379/0
valkeys://[[username]:[password]]@localhost:6379/0
unix://[[username]:[password]]@/path/to/socket.sock?db=0

When using sockets, don't forget to check the access rights on the socket::

ls -la /usr/local/searxng-valkey/run/valkey.sock
srwxrwx--- 1 searxng-valkey searxng-valkey ... /usr/local/searxng-valkey/run/valkey.sock

In this example read/write access is given to the *searxng-valkey* group.  To
get access rights to valkey instance (the socket), your SearXNG (or even your
developer) account needs to be added to the *searxng-valkey* group.

```

.. \_Valkey Developer Notes:

# Valkey Developer Notes

To set up a local Valkey DB, set the URL connector in your YAML setting:

.. code:: yaml

valkey:
url: valkey://localhost:6379/0

To install a local Valkey DB from package manager read Valkey-Installation
or use:

.. code:: sh

$ ./utils/searxng.sh install valkey

# restart your SearXNG instance
