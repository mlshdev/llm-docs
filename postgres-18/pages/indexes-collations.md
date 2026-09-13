> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/indices.sgml#indexes-collations](https://www.postgresql.org/docs/18/indexes-collations.html)

# Indexes and Collations

An index can support only one collation per index column. If multiple collations are of interest, multiple indexes may be needed.

Consider these statements:

```sql
CREATE TABLE test1c (
    id integer,
    content varchar COLLATE "x"
);

CREATE INDEX test1c_content_index ON test1c (content);
```

The index automatically uses the collation of the underlying column. So a query of the form

```sql
SELECT * FROM test1c WHERE content > constant;
```

could use the index, because the comparison will by default use the collation of the column. However, this index cannot accelerate queries that involve some other collation. So if queries of the form, say,

```sql
SELECT * FROM test1c WHERE content > constant COLLATE "y";
```

are also of interest, an additional index could be created that supports the `"y"` collation, like this:

```sql
CREATE INDEX test1c_content_y_index ON test1c (content COLLATE "y");
```
