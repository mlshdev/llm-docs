> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/datetime.sgml#datetime-appendix](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/datetime.sgml%23datetime-appendix)
> Canonical documentation: https://www.postgresql.org/docs/18/datetime-appendix.html

# Date/Time Support

PostgreSQL uses an internal heuristic parser for all date/time input support. Dates and times are input as strings, and are broken up into distinct fields with a preliminary determination of what kind of information can be in the field. Each field is interpreted and either assigned a numeric value, ignored, or rejected. The parser contains internal lookup tables for all textual fields, including months, days of the week, and time zones.

This appendix includes information on the content of these lookup tables and describes the steps used by the parser to decode dates and times.
