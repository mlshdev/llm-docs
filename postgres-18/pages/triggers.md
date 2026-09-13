> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/trigger.sgml#triggers](https://www.postgresql.org/docs/18/triggers.html)

# Triggers

This chapter provides general information about writing trigger functions. Trigger functions can be written in most of the available procedural languages, including `PL/pgSQL` ([PL/pgSQL — SQL Procedural Language](./plpgsql.md)), `PL/Tcl` ([PL/Tcl — Tcl Procedural Language](./pltcl.md)), `PL/Perl` ([PL/Perl — Perl Procedural Language](./plperl.md)), and `PL/Python` ([PL/Python — Python Procedural Language](./plpython.md)). After reading this chapter, you should consult the chapter for your favorite procedural language to find out the language-specific details of writing a trigger in it.

It is also possible to write a trigger function in C, although most people find it easier to use one of the procedural languages. It is not currently possible to write a trigger function in the plain SQL function language.
