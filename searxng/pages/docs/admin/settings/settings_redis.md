> Commit-pinned source for SearXNG master: [docs/admin/settings/settings_redis.rst](https://github.com/searxng/searxng/blob/8f452ee89293d9a752a776f4c33f5a5f124fff97/docs/admin/settings/settings_redis.rst)

.. \_settings redis:

# `redis:`

.. attention:

```text
SearXNG is switching from the Redis DB to Valkey_. The configuration
description of Valkey_ in SearXNG can be found here: :ref:`settings
<settings valkey>`.

```

If you have built and installed a local Redis DB for SearXNG, it is recommended
to uninstall it now and replace it with the installation of a Valkey DB.

.. \_Redis Developer Notes:

# Redis Developer Notes

To uninstall SearXNG's local Redis DB you can use:

.. code:: sh

# stop your SearXNG instance

$ ./utils/searxng.sh remove.redis

Remove the Redis DB in your YAML setting:

.. code:: yaml

redis:
url: unix:///usr/local/searxng-redis/run/redis.sock?db=0

To install Valkey read: \[Valkey Developer Notes]\(#Valkey Developer Notes)
