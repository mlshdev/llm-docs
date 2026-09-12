> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-userinvitations-_id_-relationships-visibleapps](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-userinvitations-_id_-relationships-visibleapps)

# List visible app IDs for a user invitation

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/userInvitations/{id}/relationships/visibleApps
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `UserInvitationVisibleAppsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Visible Apps

- [List all apps visible to an invited user](get-v1-userinvitations-_id_-visibleapps.md): Get a list of apps that will be visible to a user with a pending invitation.
