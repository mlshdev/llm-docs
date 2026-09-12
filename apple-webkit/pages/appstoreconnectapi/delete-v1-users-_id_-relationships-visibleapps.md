> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-users-_id_-relationships-visibleapps](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-users-_id_-relationships-visibleapps)

# Remove visible apps from a user

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Remove a user on your team’s access to one or more apps.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/users/{id}/relationships/visibleApps
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `UserVisibleAppsLinkagesRequest`

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Listing, Adding, and Removing App Access

- [List all apps visible to a user](get-v1-users-_id_-visibleapps.md): Get a list of apps that a user on your team can view.
- [Get all visible app resource ids for a user](get-v1-users-_id_-relationships-visibleapps.md): Get a list of app resource IDs to which a user on your team has access.
- [Add visible apps to a user](post-v1-users-_id_-relationships-visibleapps.md): Give a user on your team access to one or more apps.
- [Replace the list of visible apps for a user](patch-v1-users-_id_-relationships-visibleapps.md): Replace the list of apps a user on your team can see.
