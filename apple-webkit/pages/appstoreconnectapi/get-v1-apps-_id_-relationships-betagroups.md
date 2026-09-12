> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-betagroups](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-betagroups)

# List beta group IDs for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/betaGroups
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppBetaGroupsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting beta tester information for TestFlight

- [List all beta groups for an app](get-v1-apps-_id_-betagroups.md): Get a list of beta groups associated with a specific app.
- [Remove specified beta testers from all groups and builds of an app](delete-v1-apps-_id_-relationships-betatesters.md): Remove one or more beta testers’ access to test any builds of a specific app.
