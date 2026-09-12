> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-builds-_id_-relationships-individualtesters](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-builds-_id_-relationships-individualtesters)

# Remove individual testers from a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Remove access to test a specific build from one or more individually assigned testers.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/builds/{id}/relationships/individualTesters
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `BuildIndividualTestersLinkagesRequest`

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

### Adding and Removing Build Access

- [Add access for beta groups to a build](post-v1-builds-_id_-relationships-betagroups.md): Add or create a beta group to a build to enable testing.
- [Remove access for beta groups to a build](delete-v1-builds-_id_-relationships-betagroups.md): Remove access to a specific build for all beta testers in one or more beta groups.
- [Assign individual testers to a build](post-v1-builds-_id_-relationships-individualtesters.md): Enable a beta tester who is not a part of a beta group to test a build.
