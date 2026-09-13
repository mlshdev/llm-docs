> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/libpq.sgml#libpq-envars](https://www.postgresql.org/docs/18/libpq-envars.html)

# Environment Variables

The following environment variables can be used to select default connection parameter values, which will be used by [Database Connection Control Functions](./libpq-connect.md#libpq-PQconnectdb), [Database Connection Control Functions](./libpq-connect.md#libpq-PQsetdbLogin) and [Database Connection Control Functions](./libpq-connect.md#libpq-PQsetdb) if no value is directly specified by the calling code. These are useful to avoid hard-coding database connection information into simple client applications, for example.

- `PGHOST` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-host) connection parameter.
- `PGSSLNEGOTIATION` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-sslnegotiation) connection parameter.
- `PGHOSTADDR` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-hostaddr) connection parameter. This can be set instead of or in addition to `PGHOST` to avoid DNS lookup overhead.
- `PGPORT` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-port) connection parameter.
- `PGDATABASE` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-dbname) connection parameter.
- `PGUSER` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-user) connection parameter.
- `PGPASSWORD` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-password) connection parameter. Use of this environment variable is not recommended for security reasons, as some operating systems allow non-root users to see process environment variables via `ps`; instead consider using a password file (see [The Password File](./libpq-pgpass.md)).
- `PGPASSFILE` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-passfile) connection parameter.
- `PGREQUIREAUTH` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-require-auth) connection parameter.
- `PGCHANNELBINDING` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-channel-binding) connection parameter.
- `PGSERVICE` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-service) connection parameter.
- `PGSERVICEFILE` specifies the name of the per-user connection service file (see [The Connection Service File](./libpq-pgservice.md)). Defaults to `~/.pg_service.conf`, or `%APPDATA%\postgresql\.pg_service.conf` on Microsoft Windows.
- `PGOPTIONS` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-options) connection parameter.
- `PGAPPNAME` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-application-name) connection parameter.
- `PGSSLMODE` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-sslmode) connection parameter.
- `PGREQUIRESSL` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-requiressl) connection parameter. This environment variable is deprecated in favor of the `PGSSLMODE` variable; setting both variables suppresses the effect of this one.
- `PGSSLCOMPRESSION` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-sslcompression) connection parameter.
- `PGSSLCERT` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-sslcert) connection parameter.
- `PGSSLKEY` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-sslkey) connection parameter.
- `PGSSLCERTMODE` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-sslcertmode) connection parameter.
- `PGSSLROOTCERT` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-sslrootcert) connection parameter.
- `PGSSLCRL` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-sslcrl) connection parameter.
- `PGSSLCRLDIR` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-sslcrldir) connection parameter.
- `PGSSLSNI` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-sslsni) connection parameter.
- `PGREQUIREPEER` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-requirepeer) connection parameter.
- `PGSSLMINPROTOCOLVERSION` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-ssl-min-protocol-version) connection parameter.
- `PGSSLMAXPROTOCOLVERSION` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-ssl-max-protocol-version) connection parameter.
- `PGGSSENCMODE` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-gssencmode) connection parameter.
- `PGKRBSRVNAME` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-krbsrvname) connection parameter.
- `PGGSSLIB` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-gsslib) connection parameter.
- `PGGSSDELEGATION` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-gssdelegation) connection parameter.
- `PGCONNECT_TIMEOUT` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-connect-timeout) connection parameter.
- `PGCLIENTENCODING` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-client-encoding) connection parameter.
- `PGTARGETSESSIONATTRS` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-target-session-attrs) connection parameter.
- `PGLOADBALANCEHOSTS` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-load-balance-hosts) connection parameter.
- `PGMINPROTOCOLVERSION` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-min-protocol-version) connection parameter.
- `PGMAXPROTOCOLVERSION` behaves the same as the [Database Connection Control Functions](./libpq-connect.md#libpq-connect-max-protocol-version) connection parameter.

The following environment variables can be used to specify default behavior for each PostgreSQL session. (See also the [ALTER ROLE](./sql-alterrole.md) and [ALTER DATABASE](./sql-alterdatabase.md) commands for ways to set default behavior on a per-user or per-database basis.)

- `PGDATESTYLE` sets the default style of date/time representation. (Equivalent to `SET datestyle TO ...`.)
- `PGTZ` sets the default time zone. (Equivalent to `SET timezone TO ...`.)
- `PGGEQO` sets the default mode for the genetic query optimizer. (Equivalent to `SET geqo TO ...`.)

Refer to the SQL command [SET](./sql-set.md) for information on correct values for these environment variables.

The following environment variables determine internal behavior of `libpq`; they override compiled-in defaults.

- `PGSYSCONFDIR` sets the directory containing the `pg_service.conf` file and in a future version possibly other system-wide configuration files.
- `PGLOCALEDIR` sets the directory containing the `locale` files for message localization.
