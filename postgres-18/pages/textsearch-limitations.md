> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/textsearch.sgml#textsearch-limitations](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/textsearch.sgml%23textsearch-limitations)
> Canonical documentation: https://www.postgresql.org/docs/18/textsearch-limitations.html

# Limitations

The current limitations of PostgreSQL's text search features are:

- The length of each lexeme must be less than 2 kilobytes
- No more than 256 positions per lexeme
- Position values in `tsvector` must be greater than 0 and no more than 16,383
- The length of a `tsvector`'s data (lexemes + positions) must be less than 1 megabyte
- The length of a `tsquery`'s data (lexemes only) must be less than 1 megabyte
- The match distance in a `<N>` (FOLLOWED BY) `tsquery` operator cannot be more than 16,384

For comparison, the PostgreSQL 8.1 documentation contained 10,441 unique words, a total of 335,420 words, and the most frequent word “postgresql” was mentioned 6,127 times in 655 documents.

Another example — the PostgreSQL mailing list archives contained 910,989 unique words with 57,491,343 lexemes in 461,020 messages.
