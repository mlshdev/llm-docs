> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-ts-template](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-ts-template)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-ts-template.html

# pg_ts_template

The `pg_ts_template` catalog contains entries defining text search templates. A template is the implementation skeleton for a class of text search dictionaries. Since a template must be implemented by C-language-level functions, creation of new templates is restricted to database superusers.

PostgreSQL's text search features are described at length in [Full Text Search](./textsearch.md).

**pg_ts_template Columns**

`oid` `oid`

Row identifier

---

`tmplname` `name`

Text search template name

---

`tmplnamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

The OID of the namespace that contains this template

---

`tmplinit` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of the template's initialization function (zero if none)

---

`tmpllexize` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of the template's lexize function
