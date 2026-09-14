> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-extension](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-extension)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-extension.html

# pg_extension

The catalog `pg_extension` stores information about the installed extensions. See [Packaging Related Objects into an Extension](./extend-extensions.md) for details about extensions.

**pg_extension Columns**

`oid` `oid`

Row identifier

---

`extname` `name`

Name of the extension

---

`extowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the extension

---

`extnamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

Schema containing the extension's exported objects

---

`extrelocatable` `bool`

True if extension can be relocated to another schema

---

`extversion` `text`

Version name for the extension

---

`extconfig` `oid[]` (references [`pg_class`](./catalog-pg-class.md).`oid`)

Array of `regclass` OIDs for the extension's configuration table(s), or `NULL` if none

---

`extcondition` `text[]`

Array of `WHERE`-clause filter conditions for the extension's configuration table(s), or `NULL` if none

Note that unlike most catalogs with a “namespace” column, `extnamespace` is not meant to imply that the extension belongs to that schema. Extension names are never schema-qualified. Rather, `extnamespace` indicates the schema that contains most or all of the extension's objects. If `extrelocatable` is true, then this schema must in fact contain all schema-qualifiable objects belonging to the extension.
