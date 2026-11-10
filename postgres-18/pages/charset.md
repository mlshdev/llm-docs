> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/charset.sgml#charset](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/charset.sgml%23charset)
> Canonical documentation: https://www.postgresql.org/docs/18/charset.html

# Localization

This chapter describes the available localization features from the point of view of the administrator. PostgreSQL supports two localization facilities:

- Using the locale features of the operating system to provide locale-specific collation order, number formatting, translated messages, and other aspects. This is covered in [Locale Support](./locale.md) and [Collation Support](./collation.md).
- Providing a number of different character sets to support storing text in all kinds of languages, and providing character set translation between client and server. This is covered in [Character Set Support](./multibyte.md).
