> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/oauth-validators.sgml#oauth-validators](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/oauth-validators.sgml%23oauth-validators)
> Canonical documentation: https://www.postgresql.org/docs/18/oauth-validators.html

# OAuth Validator Modules

PostgreSQL provides infrastructure for creating custom modules to perform server-side validation of OAuth bearer tokens. Because OAuth implementations vary so wildly, and bearer token validation is heavily dependent on the issuing party, the server cannot check the token itself; validator modules provide the integration layer between the server and the OAuth provider in use.

OAuth validator modules must at least consist of an initialization function (see [Initialization Functions](./oauth-validator-init.md)) and the required callback for performing validation (see [Validate Callback](./oauth-validator-callbacks.md#validate-callback)).

> **Warning**
>
> Since a misbehaving validator might let unauthorized users into the database, correct implementation is crucial for server safety. See [Safely Designing a Validator Module](./oauth-validator-design.md) for design considerations.
