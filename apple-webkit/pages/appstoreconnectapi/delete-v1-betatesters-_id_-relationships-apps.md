> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-betatesters-_id_-relationships-apps](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-betatesters-_id_-relationships-apps)

# Remove a beta tester’s access to apps

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Remove a specific beta tester’s access to test any builds of one or more apps.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/betaTesters/{id}/relationships/apps
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `BetaTesterAppsLinkagesRequest`

## Response Codes

- `202` Accepted:
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
- [Individually assign a beta tester to builds](post-v1-betatesters-_id_-relationships-builds.md): Individually assign a beta tester to a build.
- [Individually unassign a beta tester from builds](delete-v1-betatesters-_id_-relationships-builds.md): Remove an individually assigned beta tester’s ability to test a build.
