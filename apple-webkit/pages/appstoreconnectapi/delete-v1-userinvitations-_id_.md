> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-userinvitations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-userinvitations-_id_)

# Cancel a user invitation

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Cancel a pending invitation for a user to join your team.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/userInvitations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Sending and Canceling Invitations

- [Invite a user](post-v1-userinvitations.md): Invite a user with assigned user roles to join your team.
