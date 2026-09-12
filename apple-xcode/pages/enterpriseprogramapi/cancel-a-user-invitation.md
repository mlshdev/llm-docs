> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/cancel-a-user-invitation](https://developer.apple.com/documentation/enterpriseprogramapi/cancel-a-user-invitation)

# Cancel a User Invitation

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Cancel a pending invitation for a user to join your team.

## URL

```http
DELETE https://api.enterprise.developer.apple.com/v1/userInvitations/{id}
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

### Sending and Canceling Invitations

- [Invite a User](invite-a-user.md): Invite a user with assigned user roles to join your team.
