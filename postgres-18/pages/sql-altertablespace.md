> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/alter_tablespace.sgml#sql-altertablespace](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/alter_tablespace.sgml%23sql-altertablespace)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-altertablespace.html

# ALTER TABLESPACE

change the definition of a tablespace

## Synopsis

```
ALTER TABLESPACE name RENAME TO new_name
ALTER TABLESPACE name OWNER TO { new_owner | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER TABLESPACE name SET ( tablespace_option = value [, ... ] )
ALTER TABLESPACE name RESET ( tablespace_option [, ... ] )
```

## Description

`ALTER TABLESPACE` can be used to change the definition of a tablespace.

You must own the tablespace to change the definition of a tablespace. To alter the owner, you must also be able to `SET ROLE` to the new owning role. (Note that superusers have these privileges automatically.)

## Parameters

**`name`**

  The name of an existing tablespace.

**`new_name`**

  The new name of the tablespace. The new name cannot begin with `pg_`, as such names are reserved for system tablespaces.

**`new_owner`**

  The new owner of the tablespace.

**`tablespace_option`**

  A tablespace parameter to be set or reset. Currently, the only available parameters are `seq_page_cost`, `random_page_cost`, `effective_io_concurrency` and `maintenance_io_concurrency`. Setting these values for a particular tablespace will override the planner's usual estimate of the cost of reading pages from tables in that tablespace, and how many concurrent I/Os are issued, as established by the configuration parameters of the same name (see [Query Planning](./runtime-config-query.md#guc-seq-page-cost), [Query Planning](./runtime-config-query.md#guc-random-page-cost), [Resource Consumption](./runtime-config-resource.md#guc-effective-io-concurrency), [Resource Consumption](./runtime-config-resource.md#guc-maintenance-io-concurrency)). This may be useful if one tablespace is located on a disk which is faster or slower than the remainder of the I/O subsystem.

## Examples

Rename tablespace `index_space` to `fast_raid`:

```sql
ALTER TABLESPACE index_space RENAME TO fast_raid;
```

Change the owner of tablespace `index_space`:

```sql
ALTER TABLESPACE index_space OWNER TO mary;
```

## Compatibility

There is no `ALTER TABLESPACE` statement in the SQL standard.

## See Also

- [CREATE TABLESPACE](./sql-createtablespace.md)
- [DROP TABLESPACE](./sql-droptablespace.md)
