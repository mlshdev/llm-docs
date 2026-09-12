> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-nominations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-nominations)

# Create a Featuring Nomination

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Tell Apple about your upcoming app or feature.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/nominations
```

## HTTP Body

Content type: `application/json`

Type: `NominationCreateRequest`

## Response Codes

- `201` Created — `NominationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing nominations

- [List Nominations](get-v1-nominations.md): Get all featuring nominations.
- [Read Details for a Nomination](get-v1-nominations-_id_.md): Get information for a specific featuring nomination.
- [Modify a Nomination](patch-v1-nominations-_id_.md): Update a specific featuring nomination.
- [Delete a Featuring Nomination](delete-v1-nominations-_id_.md): Remove a specific featuring nomination.
