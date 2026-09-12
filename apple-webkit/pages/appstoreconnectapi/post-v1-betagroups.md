> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-betagroups](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-betagroups)

# Create a beta group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Create a beta group associated with an app, optionally enabling TestFlight public links.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/betaGroups
```

## HTTP Body

Content type: `application/json`

Type: `BetaGroupCreateRequest`

## Response Codes

- `201` Created — `BetaGroupResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Beta Groups

- [Modify a beta group](patch-v1-betagroups-_id_.md): Modify a beta group’s metadata, including changing its TestFlight public link status.
- [Delete a beta group](delete-v1-betagroups-_id_.md): Delete a beta group and remove beta tester access to associated builds.
