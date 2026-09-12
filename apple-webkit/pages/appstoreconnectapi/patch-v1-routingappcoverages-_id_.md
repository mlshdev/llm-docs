> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-routingappcoverages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-routingappcoverages-_id_)

# Modify a routing app coverage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Commit a routing app coverage file after uploading it.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/routingAppCoverages/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `RoutingAppCoverageUpdateRequest`

## Response Codes

- `200` OK — `RoutingAppCoverageResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Modifying and Deleting Routing App Coverages

- [Delete a routing app coverage](delete-v1-routingappcoverages-_id_.md): Delete the routing app coverage file that is associated with a version.
