> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/alter_policy.sgml#sql-alterpolicy](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/alter_policy.sgml%23sql-alterpolicy)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-alterpolicy.html

# ALTER POLICY

change the definition of a row-level security policy

## Synopsis

```
ALTER POLICY name ON table_name RENAME TO new_name

ALTER POLICY name ON table_name
    [ TO { role_name | PUBLIC | CURRENT_ROLE | CURRENT_USER | SESSION_USER } [, ...] ]
    [ USING ( using_expression ) ]
    [ WITH CHECK ( check_expression ) ]
```

## Description

`ALTER POLICY` changes the definition of an existing row-level security policy. Note that `ALTER POLICY` only allows the set of roles to which the policy applies and the `USING` and `WITH CHECK` expressions to be modified. To change other properties of a policy, such as the command to which it applies or whether it is permissive or restrictive, the policy must be dropped and recreated.

To use `ALTER POLICY`, you must own the table that the policy applies to.

In the second form of `ALTER POLICY`, the role list, `using_expression`, and `check_expression` are replaced independently if specified. When one of those clauses is omitted, the corresponding part of the policy is unchanged.

## Parameters

**`name`**

  The name of an existing policy to alter.

**`table_name`**

  The name (optionally schema-qualified) of the table that the policy is on.

**`new_name`**

  The new name for the policy.

**`role_name`**

  The role(s) to which the policy applies. Multiple roles can be specified at one time. To apply the policy to all roles, use `PUBLIC`.

**`using_expression`**

  The `USING` expression for the policy. See [CREATE POLICY](./sql-createpolicy.md) for details.

**`check_expression`**

  The `WITH CHECK` expression for the policy. See [CREATE POLICY](./sql-createpolicy.md) for details.

## Compatibility

`ALTER POLICY` is a PostgreSQL extension.

## See Also

- [CREATE POLICY](./sql-createpolicy.md)
- [DROP POLICY](./sql-droppolicy.md)
