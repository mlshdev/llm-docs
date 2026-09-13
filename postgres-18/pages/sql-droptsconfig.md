> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_tsconfig.sgml#sql-droptsconfig](https://www.postgresql.org/docs/18/sql-droptsconfig.html)

# DROP TEXT SEARCH CONFIGURATION

remove a text search configuration

## Synopsis

```
DROP TEXT SEARCH CONFIGURATION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## Description

`DROP TEXT SEARCH CONFIGURATION` drops an existing text search configuration. To execute this command you must be the owner of the configuration.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the text search configuration does not exist. A notice is issued in this case.

**`name`**

  The name (optionally schema-qualified) of an existing text search configuration.

**`CASCADE`**

  Automatically drop objects that depend on the text search configuration, and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the text search configuration if any objects depend on it. This is the default.

## Examples

Remove the text search configuration `my_english`:

```sql
DROP TEXT SEARCH CONFIGURATION my_english;
```

This command will not succeed if there are any existing indexes that reference the configuration in `to_tsvector` calls. Add `CASCADE` to drop such indexes along with the text search configuration.

## Compatibility

There is no `DROP TEXT SEARCH CONFIGURATION` statement in the SQL standard.

## See Also

- [ALTER TEXT SEARCH CONFIGURATION](./sql-altertsconfig.md)
- [CREATE TEXT SEARCH CONFIGURATION](./sql-createtsconfig.md)
