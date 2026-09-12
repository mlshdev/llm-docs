> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betatesters-_id_-relationships-apps](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betatesters-_id_-relationships-apps)

# Get all app resource ids for a beta tester

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get a list of app resource IDs associated with a beta tester.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaTesters/{id}/relationships/apps
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `BetaTesterAppsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading Beta Tester Details

- [List all apps for a beta tester](get-v1-betatesters-_id_-apps.md): Get a list of apps that a beta tester can test.
- [List all builds individually assigned to a beta tester](get-v1-betatesters-_id_-builds.md): Get a list of builds individually assigned to a specific beta tester.
- [Get all ids of builds individually assigned to a beta tester](get-v1-betatesters-_id_-relationships-builds.md): Get a list of build resource IDs individually assigned to a specific beta tester.
- [List all beta groups to which a beta tester belongs](get-v1-betatesters-_id_-betagroups.md): Get a list of beta groups that contain a specific beta tester.
- [Get all beta group ids of a beta tester's groups](get-v1-betatesters-_id_-relationships-betagroups.md): Get a list of group resource IDs associated with a beta tester.
