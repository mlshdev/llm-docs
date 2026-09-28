> Pinned source for ZITADEL v4.19.2: [apps/docs/content/apis/statuscodes.mdx](https://github.com/zitadel/zitadel/blob/2c37c4176ad51c3db0354122e06af53a88d30d4e/apps/docs/content/apis/statuscodes.mdx)
> Canonical documentation: https://zitadel.com/docs/apis/statuscodes

| GRPC Number | GRPC Code            | HTTP Status Code | HTTP Status Text    | Description                                                                                                                                                                                                                 |
| :---------- | :------------------- | ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0           | OK                   | 200              | OK                  | Not an error; returned on success.                                                                                                                                                                                          |
| 2           | UNKNOWN              | 500              | Internal            | Unknown error, this is sent if the error could not be identified as one of the errors described below                                                                                                                       |
| 3           | INVALID\_ARGUMENT    | 400              | Bad Request         | The client specified an invalid argument. Note that this differs from FAILED\_PRECONDITION. INVALID\_ARGUMENT indicates arguments that are problematic regardless of the state of the system (e.g., a malformed file name). |
| 4           | DEADLINE\_EXCEEDED   | 504              | Gateway Timeout     | The deadline expired before the operation could complete.                                                                                                                                                                   |
| 5           | NOT\_FOUND           | 404              | Not found           | Some requested entity (e.g. user or project) was not found.                                                                                                                                                                 |
| 6           | ALREADY\_EXISTS      | 409              | Conflict            | The entity that a client attempted to create (e.g. user or project) already exists.                                                                                                                                         |
| 7           | PERMISSION\_DENIED   | 403              | Forbidden           | The caller does not have permission to execute the specified operation.                                                                                                                                                     |
| 9           | FAILED\_PRECONDITION | 400              | Bad Request         | The operation was rejected because the system is not in a state required for the operation's execution. e.g a project that is already deactivated, should be deactivated                                                    |
| 12          | UNIMPLEMENTED        | 501              | Not Implemented     | The operation is not implemented or is not supported/enabled in this service.                                                                                                                                               |
| 13          | INTERNAL             | 500              | Internal            | Internal errors. This means that some invariants expected by the underlying system have been broken. This error code is reserved for serious errors.                                                                        |
| 14          | UNAVAILABLE          | 503              | Service Unavailable | The service is currently unavailable.                                                                                                                                                                                       |
| 16          | UNAUTHENTICATED      | 401              | Unauthorized        | The request does not have valid authentication credentials for the operation.                                                                                                                                               |

## Error details and slugs

For stable `v2` APIs, services import `zitadel/error/v2/error.proto` so reflection-aware clients can resolve `zitadel.error.v2.ErrorDetail`.

When present, inspect `ErrorDetail.slug` first for programmatic handling. Slugs are stable machine-readable identifiers such as `user.already_exists`.

Use `ErrorDetail.message` for developer diagnostics, not end-user text. Prefer mapping slugs to your own localized messages in clients.

This slug-based handling is currently relevant for backend/domain paths that run with relational-storage-backed logic.
Do not assume it for `v1`, `v2beta`, or `v3alpha` APIs or when using a v2 endpoint without having the relational storage feature enabled.

For a searchable catalog of every `details[].id` ZITADEL can return — grouped by subsystem and cause, with why each one happens and an example response — see the [Error Reference](https://zitadel.com/docs/apis/errors).
