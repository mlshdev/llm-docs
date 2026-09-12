> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-betagroups-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-betagroups-_id_)

# Modify a beta group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Modify a beta group’s metadata, including changing its TestFlight public link status.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/betaGroups/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `BetaGroupUpdateRequest`

## Response Codes

- `200` OK — `BetaGroupResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Beta Groups

- [Create a beta group](post-v1-betagroups.md): Create a beta group associated with an app, optionally enabling TestFlight public links.
- [Delete a beta group](delete-v1-betagroups-_id_.md): Delete a beta group and remove beta tester access to associated builds.
