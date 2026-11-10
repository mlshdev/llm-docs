> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/catalogs.sgml#catalog-pg-ts-parser](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/catalogs.sgml%23catalog-pg-ts-parser)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-ts-parser.html

# pg_ts_parser

The `pg_ts_parser` catalog contains entries defining text search parsers. A parser is responsible for splitting input text into lexemes and assigning a token type to each lexeme. Since a parser must be implemented by C-language-level functions, creation of new parsers is restricted to database superusers.

PostgreSQL's text search features are described at length in [Full Text Search](./textsearch.md).

**pg_ts_parser Columns**

`oid` `oid`

Row identifier

---

`prsname` `name`

Text search parser name

---

`prsnamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

The OID of the namespace that contains this parser

---

`prsstart` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of the parser's startup function

---

`prstoken` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of the parser's next-token function

---

`prsend` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of the parser's shutdown function

---

`prsheadline` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of the parser's headline function (zero if none)

---

`prslextype` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of the parser's lextype function
