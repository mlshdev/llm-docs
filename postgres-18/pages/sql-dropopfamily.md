> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_opfamily.sgml#sql-dropopfamily](https://www.postgresql.org/docs/18/sql-dropopfamily.html)

# DROP OPERATOR FAMILY

remove an operator family

## Synopsis

```
DROP OPERATOR FAMILY [ IF EXISTS ] name USING index_method [ CASCADE | RESTRICT ]
```

## Description

`DROP OPERATOR FAMILY` drops an existing operator family. To execute this command you must be the owner of the operator family.

`DROP OPERATOR FAMILY` includes dropping any operator classes contained in the family, but it does not drop any of the operators or functions referenced by the family. If there are any indexes depending on operator classes within the family, you will need to specify `CASCADE` for the drop to complete.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the operator family does not exist. A notice is issued in this case.

**`name`**

  The name (optionally schema-qualified) of an existing operator family.

**`index_method`**

  The name of the index access method the operator family is for.

**`CASCADE`**

  Automatically drop objects that depend on the operator family, and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the operator family if any objects depend on it. This is the default.

## Examples

Remove the B-tree operator family `float_ops`:

```sql
DROP OPERATOR FAMILY float_ops USING btree;
```

This command will not succeed if there are any existing indexes that use operator classes within the family. Add `CASCADE` to drop such indexes along with the operator family.

## Compatibility

There is no `DROP OPERATOR FAMILY` statement in the SQL standard.

## See Also

- [ALTER OPERATOR FAMILY](./sql-alteropfamily.md)
- [CREATE OPERATOR FAMILY](./sql-createopfamily.md)
- [ALTER OPERATOR CLASS](./sql-alteropclass.md)
- [CREATE OPERATOR CLASS](./sql-createopclass.md)
- [DROP OPERATOR CLASS](./sql-dropopclass.md)
