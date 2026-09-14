> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_policy.sgml#sql-droppolicy](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_policy.sgml%23sql-droppolicy)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-droppolicy.html

# DROP POLICY

remove a row-level security policy from a table

## Synopsis

```
DROP POLICY [ IF EXISTS ] name ON table_name [ CASCADE | RESTRICT ]
```

## Description

`DROP POLICY` removes the specified policy from the table. Note that if the last policy is removed for a table and the table still has row-level security enabled via `ALTER TABLE`, then the default-deny policy will be used. `ALTER TABLE ... DISABLE ROW LEVEL SECURITY` can be used to disable row-level security for a table, whether policies for the table exist or not.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the policy does not exist. A notice is issued in this case.

**`name`**

  The name of the policy to drop.

**`table_name`**

  The name (optionally schema-qualified) of the table that the policy is on.

**`CASCADE`, `RESTRICT`**

  These key words do not have any effect, since there are no dependencies on policies.

## Examples

To drop the policy called `p1` on the table named `my_table`:

```sql
DROP POLICY p1 ON my_table;
```

## Compatibility

`DROP POLICY` is a PostgreSQL extension.

## See Also

- [CREATE POLICY](./sql-createpolicy.md)
- [ALTER POLICY](./sql-alterpolicy.md)
