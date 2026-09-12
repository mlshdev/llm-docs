> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-betatesters-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-betatesters-_id_)

# Delete a beta tester

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Remove a beta tester’s ability to test all apps.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/betaTesters/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Response Codes

- `202` Accepted:
- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating and Deleting Beta Testers

- [Create a beta tester](post-v1-betatesters.md): Create a beta tester assigned to a group, a build, or an app.
