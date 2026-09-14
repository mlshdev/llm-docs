> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-available-extension-versions](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-available-extension-versions)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-available-extension-versions.html

# pg_available_extension_versions

The `pg_available_extension_versions` view lists the specific extension versions that are available for installation. See also the [`pg_extension`](./catalog-pg-extension.md) catalog, which shows the extensions currently installed.

**pg_available_extension_versions Columns**

`name` `name`

Extension name

---

`version` `text`

Version name

---

`installed` `bool`

True if this version of this extension is currently installed

---

`superuser` `bool`

True if only superusers are allowed to install this extension (but see `trusted`)

---

`trusted` `bool`

True if the extension can be installed by non-superusers with appropriate privileges

---

`relocatable` `bool`

True if extension can be relocated to another schema

---

`schema` `name`

Name of the schema that the extension must be installed into, or `NULL` if partially or fully relocatable

---

`requires` `name[]`

Names of prerequisite extensions, or `NULL` if none

---

`comment` `text`

Comment string from the extension's control file

The `pg_available_extension_versions` view is read-only.
