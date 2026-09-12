> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-routingappcoverage](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-routingappcoverage)

# Get the routing app coverage ID for an App Store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}/relationships/routingAppCoverage
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppStoreVersionRoutingAppCoverageLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Declarations

- [Read the routing app coverage information of an app store version](get-v1-appstoreversions-_id_-routingappcoverage.md): Get the routing app coverage file that is associated with a specific App Store version
