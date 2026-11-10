> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/system-views.sgml#view-pg-config](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/system-views.sgml%23view-pg-config)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-config.html

# pg_config

The view `pg_config` describes the compile-time configuration parameters of the currently installed version of PostgreSQL. It is intended, for example, to be used by software packages that want to interface to PostgreSQL to facilitate finding the required header files and libraries. It provides the same basic information as the [pg_config](./app-pgconfig.md) PostgreSQL client application.

By default, the `pg_config` view can be read only by superusers.

**pg_config Columns**

`name` `text`

The parameter name

---

`setting` `text`

The parameter value
