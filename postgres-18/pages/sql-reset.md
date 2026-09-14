> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/reset.sgml#sql-reset](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/reset.sgml%23sql-reset)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-reset.html

# RESET

restore the value of a run-time parameter to the default value

## Synopsis

```
RESET configuration_parameter
RESET ALL
```

## Description

`RESET` restores run-time parameters to their default values. `RESET` is an alternative spelling for

```
SET configuration_parameter TO DEFAULT
```

Refer to [SET](./sql-set.md) for details.

The default value is defined as the value that the parameter would have had, if no `SET` had ever been issued for it in the current session. The actual source of this value might be a compiled-in default, the configuration file, command-line options, or per-database or per-user default settings. This is subtly different from defining it as “the value that the parameter had at session start”, because if the value came from the configuration file, it will be reset to whatever is specified by the configuration file now. See [Server Configuration](./runtime-config.md) for details.

The transactional behavior of `RESET` is the same as `SET`: its effects will be undone by transaction rollback.

## Parameters

**`configuration_parameter`**

  Name of a settable run-time parameter. Available parameters are documented in [Server Configuration](./runtime-config.md) and on the [SET](./sql-set.md) reference page.

**`ALL`**

  Resets all settable run-time parameters to default values.

## Examples

Set the `timezone` configuration variable to its default value:

```
RESET timezone;
```

## Compatibility

`RESET` is a PostgreSQL extension.

## See Also

- [SET](./sql-set.md)
- [SHOW](./sql-show.md)
