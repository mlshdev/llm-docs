> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-nominations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-nominations-_id_)

# Modify a Nomination

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Update a specific featuring nomination.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/nominations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the nomination resource ID from the [List Nominations](get-v1-nominations.md) response.

## HTTP Body

Content type: `application/json`

Type: `NominationUpdateRequest`

## Response Codes

- `200` OK — `NominationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing nominations

- [Create a Featuring Nomination](post-v1-nominations.md): Tell Apple about your upcoming app or feature.
- [List Nominations](get-v1-nominations.md): Get all featuring nominations.
- [Read Details for a Nomination](get-v1-nominations-_id_.md): Get information for a specific featuring nomination.
- [Delete a Featuring Nomination](delete-v1-nominations-_id_.md): Remove a specific featuring nomination.
