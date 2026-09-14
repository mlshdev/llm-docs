> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-ts-dict](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-ts-dict)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-ts-dict.html

# pg_ts_dict

The `pg_ts_dict` catalog contains entries defining text search dictionaries. A dictionary depends on a text search template, which specifies all the implementation functions needed; the dictionary itself provides values for the user-settable parameters supported by the template. This division of labor allows dictionaries to be created by unprivileged users. The parameters are specified by a text string `dictinitoption`, whose format and meaning vary depending on the template.

PostgreSQL's text search features are described at length in [Full Text Search](./textsearch.md).

**pg_ts_dict Columns**

`oid` `oid`

Row identifier

---

`dictname` `name`

Text search dictionary name

---

`dictnamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

The OID of the namespace that contains this dictionary

---

`dictowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the dictionary

---

`dicttemplate` `oid` (references [`pg_ts_template`](./catalog-pg-ts-template.md).`oid`)

The OID of the text search template for this dictionary

---

`dictinitoption` `text`

Initialization option string for the template
