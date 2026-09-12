> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-betatesters](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-betatesters)

# Create a beta tester

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Create a beta tester assigned to a group, a build, or an app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/betaTesters
```

## HTTP Body

Content type: `application/json`

Type: `BetaTesterCreateRequest`

## Response Codes

- `201` Created — `BetaTesterResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and Deleting Beta Testers

- [Delete a beta tester](delete-v1-betatesters-_id_.md): Remove a beta tester’s ability to test all apps.
