> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builds-_id_-relationships-individualtesters](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builds-_id_-relationships-individualtesters)

# Get all resource ids of individual testers for a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get a list of resource IDs of individual testers associated with a build.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/builds/{id}/relationships/individualTesters
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `BuildIndividualTestersLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Listing Individually Assigned Beta Testers

- [List all individual testers for a build](get-v1-builds-_id_-individualtesters.md): Get a list of beta testers individually assigned to a build.
