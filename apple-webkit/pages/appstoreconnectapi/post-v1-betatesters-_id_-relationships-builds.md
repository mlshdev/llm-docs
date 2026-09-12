> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-betatesters-_id_-relationships-builds](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-betatesters-_id_-relationships-builds)

# Individually assign a beta tester to builds

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Individually assign a beta tester to a build.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/betaTesters/{id}/relationships/builds
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `BetaTesterBuildsLinkagesRequest`

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

### Assigning Groups and Access

- [Add a beta tester to beta groups](post-v1-betatesters-_id_-relationships-betagroups.md): Add one or more beta testers to a specific beta group.
- [Remove a beta tester from beta groups](delete-v1-betatesters-_id_-relationships-betagroups.md): Remove a specific beta tester from one or more beta groups, revoking their access to test builds associated with those groups.
- [Individually unassign a beta tester from builds](delete-v1-betatesters-_id_-relationships-builds.md): Remove an individually assigned beta tester’s ability to test a build.
- [Remove a beta tester’s access to apps](delete-v1-betatesters-_id_-relationships-apps.md): Remove a specific beta tester’s access to test any builds of one or more apps.
