> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/catalogs.sgml#catalog-pg-seclabel](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/catalogs.sgml%23catalog-pg-seclabel)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-seclabel.html

# pg_seclabel

The catalog `pg_seclabel` stores security labels on database objects. Security labels can be manipulated with the [`SECURITY LABEL`](./sql-security-label.md) command. For an easier way to view security labels, see [pg_seclabels](./view-pg-seclabels.md).

See also [`pg_shseclabel`](./catalog-pg-shseclabel.md), which performs a similar function for security labels of database objects that are shared across a database cluster.

**pg_seclabel Columns**

`objoid` `oid` (references any OID column)

The OID of the object this security label pertains to

---

`classoid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The OID of the system catalog this object appears in

---

`objsubid` `int4`

For a security label on a table column, this is the column number (the `objoid` and `classoid` refer to the table itself). For all other object types, this column is zero.

---

`provider` `text`

The label provider associated with this label.

---

`label` `text`

The security label applied to this object.
