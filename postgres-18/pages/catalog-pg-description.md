> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-description](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-description)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-description.html

# pg_description

The catalog `pg_description` stores optional descriptions (comments) for each database object. Descriptions can be manipulated with the [`COMMENT`](./sql-comment.md) command and viewed with `psql`'s `\d` commands. Descriptions of many built-in system objects are provided in the initial contents of `pg_description`.

See also [`pg_shdescription`](./catalog-pg-shdescription.md), which performs a similar function for descriptions involving objects that are shared across a database cluster.

**pg_description Columns**

`objoid` `oid` (references any OID column)

The OID of the object this description pertains to

---

`classoid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The OID of the system catalog this object appears in

---

`objsubid` `int4`

For a comment on a table column, this is the column number (the `objoid` and `classoid` refer to the table itself). For all other object types, this column is zero.

---

`description` `text`

Arbitrary text that serves as the description of this object
