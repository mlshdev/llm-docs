> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-betagroups-_id_-relationships-builds](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-betagroups-_id_-relationships-builds)

# Remove builds from a beta group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Remove access to test one or more builds from beta testers in a specific beta group.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/betaGroups/{id}/relationships/builds
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `BetaGroupBuildsLinkagesRequest`

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

### Adding and Removing Builds and Testers

- [Add beta testers to a beta group](post-v1-betagroups-_id_-relationships-betatesters.md): Add a specific beta tester to one or more beta groups for beta testing.
- [Remove beta testers from a beta group](delete-v1-betagroups-_id_-relationships-betatesters.md): Remove a specific beta tester from a one or more beta groups, revoking their access to test builds associated with those groups.
- [Add builds to a beta group](post-v1-betagroups-_id_-relationships-builds.md): Associate builds with a beta group to enable the group to test the builds.
