> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-seclabels](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-seclabels)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-seclabels.html

# pg_seclabels

The view `pg_seclabels` provides information about security labels. It as an easier-to-query version of the [`pg_seclabel`](./catalog-pg-seclabel.md) catalog.

**pg_seclabels Columns**

`objoid` `oid` (references any OID column)

The OID of the object this security label pertains to

---

`classoid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The OID of the system catalog this object appears in

---

`objsubid` `int4`

For a security label on a table column, this is the column number (the `objoid` and `classoid` refer to the table itself). For all other object types, this column is zero.

---

`objtype` `text`

The type of object to which this label applies, as text.

---

`objnamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

The OID of the namespace for this object, if applicable; otherwise NULL.

---

`objname` `text`

The name of the object to which this label applies, as text.

---

`provider` `text` (references [`pg_seclabel`](./catalog-pg-seclabel.md).`provider`)

The label provider associated with this label.

---

`label` `text` (references [`pg_seclabel`](./catalog-pg-seclabel.md).`label`)

The security label applied to this object.
