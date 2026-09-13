> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-available-extensions](https://www.postgresql.org/docs/18/view-pg-available-extensions.html)

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
