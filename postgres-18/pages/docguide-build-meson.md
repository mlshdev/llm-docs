> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/docguide.sgml#docguide-build-meson](https://www.postgresql.org/docs/18/docguide-build-meson.html)

# Building the Documentation with Meson

To build the documentation using Meson, change to the `build` directory before running one of these commands, or add `-C build` to the command.

To build just the HTML version of the documentation:

```
build$ ninja html
```

For a list of other documentation targets see [Documentation Targets](./install-meson.md#documentation-targets). The output appears in the subdirectory `build/doc/src/sgml`.
