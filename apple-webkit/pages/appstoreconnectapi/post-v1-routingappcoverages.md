> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-routingappcoverages](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-routingappcoverages)

# Create a routing app coverage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Attach a routing app coverage file to an App Store version.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/routingAppCoverages
```

## HTTP Body

Content type: `application/json`

Type: `RoutingAppCoverageCreateRequest`

## Response Codes

- `201` Created — `RoutingAppCoverageResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading and Creating Routing App Coverages

- [Read the routing app coverage information of an app store version](get-v1-appstoreversions-_id_-routingappcoverage.md): Get the routing app coverage file that is associated with a specific App Store version
- [Read routing app coverage information](get-v1-routingappcoverages-_id_.md): Get information about the routing app coverage file and its upload and processing status.
