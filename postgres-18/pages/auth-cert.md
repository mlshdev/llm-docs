> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/client-auth.sgml#auth-cert](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/client-auth.sgml%23auth-cert)
> Canonical documentation: https://www.postgresql.org/docs/18/auth-cert.html

# Certificate Authentication

This authentication method uses SSL client certificates to perform authentication. It is therefore only available for SSL connections; see [OpenSSL Configuration](./ssl-tcp.md#openssl-configuration) for SSL configuration instructions. When using this authentication method, the server will require that the client provide a valid, trusted certificate. No password prompt will be sent to the client. The `cn` (Common Name) attribute of the certificate will be compared to the requested database user name, and if they match the login will be allowed. User name mapping can be used to allow `cn` to be different from the database user name.

The following configuration options are supported for SSL certificate authentication:

**`map`**

  Allows for mapping between system and database user names. See [User Name Maps](./auth-username-maps.md) for details.

It is redundant to use the `clientcert` option with `cert` authentication because `cert` authentication is effectively `trust` authentication with `clientcert=verify-full`.
