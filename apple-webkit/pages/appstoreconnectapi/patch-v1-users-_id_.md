> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-users-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-users-_id_)

# Modify a user account

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Change a user’s role, app visibility information, or other account details.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/users/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `UserUpdateRequest`

## Response Codes

- `200` OK — `UserResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Modifying and Removing User Accounts

- [Remove a user account](delete-v1-users-_id_.md): Remove a user from your team.
