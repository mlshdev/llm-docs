> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betagroups-_id_-metrics-publiclinkusages](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betagroups-_id_-metrics-publiclinkusages)

# Read Public Link Usage Metrics for a Beta Group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Get public link usage metrics for a specific beta group.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaGroups/{id}/metrics/publicLinkUsages
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `betaGroups` resource ID from the [List beta groups](get-v1-betagroups.md) response.

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `BetaPublicLinkUsagesV1MetricResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:
