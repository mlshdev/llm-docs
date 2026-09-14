> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-shdescription](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-shdescription)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-shdescription.html

# pg_shdescription

The catalog `pg_shdescription` stores optional descriptions (comments) for shared database objects. Descriptions can be manipulated with the [`COMMENT`](./sql-comment.md) command and viewed with `psql`'s `\d` commands.

See also [`pg_description`](./catalog-pg-description.md), which performs a similar function for descriptions involving objects within a single database.

Unlike most system catalogs, `pg_shdescription` is shared across all databases of a cluster: there is only one copy of `pg_shdescription` per cluster, not one per database.

**pg_shdescription Columns**

`objoid` `oid` (references any OID column)

The OID of the object this description pertains to

---

`classoid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The OID of the system catalog this object appears in

---

`description` `text`

Arbitrary text that serves as the description of this object
