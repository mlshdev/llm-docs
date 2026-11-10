> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/auth-delay.sgml#auth-delay](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/auth-delay.sgml%23auth-delay)
> Canonical documentation: https://www.postgresql.org/docs/18/auth-delay.html

# auth_delay — pause on authentication failure

`auth_delay` causes the server to pause briefly before reporting authentication failure, to make brute-force attacks on database passwords more difficult. Note that it does nothing to prevent denial-of-service attacks, and may even exacerbate them, since processes that are waiting before reporting authentication failure will still consume connection slots.

In order to function, this module must be loaded via [Client Connection Defaults](./runtime-config-client.md#guc-shared-preload-libraries) in `postgresql.conf`.

## Configuration Parameters

**`auth_delay.milliseconds` (`integer`)**

  The number of milliseconds to wait before reporting an authentication failure. The default is 0.

These parameters must be set in `postgresql.conf`. Typical usage might be:

```sql
# postgresql.conf
shared_preload_libraries = 'auth_delay'

auth_delay.milliseconds = '500'
```

## Author

KaiGai Kohei [kaigai@ak.jp.nec.com](mailto:kaigai@ak.jp.nec.com)
