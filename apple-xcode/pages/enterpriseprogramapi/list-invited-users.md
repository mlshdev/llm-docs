> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/list-invited-users](https://developer.apple.com/documentation/enterpriseprogramapi/list-invited-users)

# List Invited Users

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Get a list of pending invitations to join your team.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/userInvitations
```

## Query Parameters

- `fields[userInvitations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `email`, `expirationDate`, `firstName`, `lastName`, `roles`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `email`, `-email`, `lastName`, `-lastName`
- `filter[roles]` — `[string]`: Attributes, relationships, and IDs by which to filter.
  **Allowed values:** `ADMIN`, `ACCOUNT_HOLDER`, `DEVELOPER`
- `filter[email]` — `[string]`: Attributes, relationships, and IDs by which to filter.

## Response Codes

- `200` OK — `UserInvitationsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.

## See Also

### Getting Invited Users

- [Read user invitation information](read-userinvitation-information.md): Get information about a pending invitation to join your team.
