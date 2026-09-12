> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/delete-a-user-account](https://developer.apple.com/documentation/enterpriseprogramapi/delete-a-user-account)

# Delete a User Account

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Remove a user from your team.

## URL

```http
DELETE https://api.enterprise.developer.apple.com/v1/users/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.

## See Also

### Modifying and Removing User Accounts

- [Modify a User Account](modify-a-user-account.md): Change a user’s role, app visibility information, or other account details.
