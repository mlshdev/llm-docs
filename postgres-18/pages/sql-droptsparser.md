> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_tsparser.sgml#sql-droptsparser](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_tsparser.sgml%23sql-droptsparser)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-droptsparser.html

# DROP TEXT SEARCH PARSER

remove a text search parser

## Synopsis

```
DROP TEXT SEARCH PARSER [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## Description

`DROP TEXT SEARCH PARSER` drops an existing text search parser. You must be a superuser to use this command.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the text search parser does not exist. A notice is issued in this case.

**`name`**

  The name (optionally schema-qualified) of an existing text search parser.

**`CASCADE`**

  Automatically drop objects that depend on the text search parser, and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the text search parser if any objects depend on it. This is the default.

## Examples

Remove the text search parser `my_parser`:

```sql
DROP TEXT SEARCH PARSER my_parser;
```

This command will not succeed if there are any existing text search configurations that use the parser. Add `CASCADE` to drop such configurations along with the parser.

## Compatibility

There is no `DROP TEXT SEARCH PARSER` statement in the SQL standard.

## See Also

- [ALTER TEXT SEARCH PARSER](./sql-altertsparser.md)
- [CREATE TEXT SEARCH PARSER](./sql-createtsparser.md)
