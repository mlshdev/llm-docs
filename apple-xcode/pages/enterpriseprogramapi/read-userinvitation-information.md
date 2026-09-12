> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/read-userinvitation-information](https://developer.apple.com/documentation/enterpriseprogramapi/read-userinvitation-information)

# Read user invitation information

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Get information about a pending invitation to join your team.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/userInvitations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[userInvitations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `email`, `expirationDate`, `firstName`, `lastName`, `roles`

## Response Codes

- `200` OK — `UserInvitationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.

## See Also

### Getting Invited Users

- [List Invited Users](list-invited-users.md): Get a list of pending invitations to join your team.
