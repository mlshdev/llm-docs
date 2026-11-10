> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/system-views.sgml#view-pg-available-extensions](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/system-views.sgml%23view-pg-available-extensions)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-available-extensions.html

# pg_available_extensions

The `pg_available_extensions` view lists the extensions that are available for installation. See also the [`pg_extension`](./catalog-pg-extension.md) catalog, which shows the extensions currently installed.

**pg_available_extensions Columns**

`name` `name`

Extension name

---

`default_version` `text`

Name of default version, or `NULL` if none is specified

---

`installed_version` `text`

Currently installed version of the extension, or `NULL` if not installed

---

`comment` `text`

Comment string from the extension's control file

The `pg_available_extensions` view is read-only.
