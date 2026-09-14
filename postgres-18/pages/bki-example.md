> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/bki.sgml#bki-example](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/bki.sgml%23bki-example)
> Canonical documentation: https://www.postgresql.org/docs/18/bki-example.html

# BKI Example

The following sequence of commands will create the table `test_table` with OID 420, having three columns `oid`, `cola` and `colb` of type `oid`, `int4` and `text`, respectively, and insert two rows into the table:

```sql
create test_table 420 (oid = oid, cola = int4, colb = text)
open test_table
insert ( 421 1 'value 1' )
insert ( 422 2 _null_ )
close test_table
```
