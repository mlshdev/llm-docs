> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-reviewsubmissions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-reviewsubmissions)

# List review submission IDs

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get the list of review submission IDs for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/reviewSubmissions
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Apps resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppReviewSubmissionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting review submissions

- [Get Review Submissions for an App](get-v1-apps-_id_-reviewsubmissions.md): Get a list of review submissions associated with a specific app.
