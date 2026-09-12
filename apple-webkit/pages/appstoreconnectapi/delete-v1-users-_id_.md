> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-users-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-users-_id_)

# Remove a user account

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Remove a user from your team.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/users/{id}
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

### Modifying and Removing User Accounts

- [Modify a user account](patch-v1-users-_id_.md): Change a user’s role, app visibility information, or other account details.
