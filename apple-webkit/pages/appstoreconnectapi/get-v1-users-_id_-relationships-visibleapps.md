> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-users-_id_-relationships-visibleapps](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-users-_id_-relationships-visibleapps)

# Get all visible app resource ids for a user

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get a list of app resource IDs to which a user on your team has access.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/users/{id}/relationships/visibleApps
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `UserVisibleAppsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Listing, Adding, and Removing App Access

- [List all apps visible to a user](get-v1-users-_id_-visibleapps.md): Get a list of apps that a user on your team can view.
- [Add visible apps to a user](post-v1-users-_id_-relationships-visibleapps.md): Give a user on your team access to one or more apps.
- [Replace the list of visible apps for a user](patch-v1-users-_id_-relationships-visibleapps.md): Replace the list of apps a user on your team can see.
- [Remove visible apps from a user](delete-v1-users-_id_-relationships-visibleapps.md): Remove a user on your team’s access to one or more apps.
