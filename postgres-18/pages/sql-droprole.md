> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_role.sgml#sql-droprole](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_role.sgml%23sql-droprole)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-droprole.html

# DROP ROLE

remove a database role

## Synopsis

```
DROP ROLE [ IF EXISTS ] name [, ...]
```

## Description

`DROP ROLE` removes the specified role(s). To drop a superuser role, you must be a superuser yourself; to drop non-superuser roles, you must have `CREATEROLE` privilege and have been granted `ADMIN OPTION` on the role.

A role cannot be removed if it is still referenced in any database of the cluster; an error will be raised if so. Before dropping the role, you must drop all the objects it owns (or reassign their ownership) and revoke any privileges the role has been granted on other objects. The [`REASSIGN OWNED`](./sql-reassign-owned.md) and [`DROP OWNED`](./sql-drop-owned.md) commands can be useful for this purpose; see [Dropping Roles](./role-removal.md) for more discussion.

However, it is not necessary to remove role memberships involving the role; `DROP ROLE` automatically revokes any memberships of the target role in other roles, and of other roles in the target role. The other roles are not dropped nor otherwise affected.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the role does not exist. A notice is issued in this case.

**`name`**

  The name of the role to remove.

## Notes

PostgreSQL includes a program [dropuser](./app-dropuser.md) that has the same functionality as this command (in fact, it calls this command) but can be run from the command shell.

## Examples

To drop a role:

```sql
DROP ROLE jonathan;
```

## Compatibility

The SQL standard defines `DROP ROLE`, but it allows only one role to be dropped at a time, and it specifies different privilege requirements than PostgreSQL uses.

## See Also

- [CREATE ROLE](./sql-createrole.md)
- [ALTER ROLE](./sql-alterrole.md)
- [SET ROLE](./sql-set-role.md)
