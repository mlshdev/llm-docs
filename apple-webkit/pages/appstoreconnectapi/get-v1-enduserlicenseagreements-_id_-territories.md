> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-enduserlicenseagreements-_id_-territories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-enduserlicenseagreements-_id_-territories)

# List all territories for an end user license agreement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

List all the App Store territories to which a specific custom app license agreement applies.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/{id}/territories
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `TerritoriesWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Territories

- [List territories](get-v1-territories.md): List all territories where the App Store operates.
- [List territory IDs for an end user license agreement](get-v1-enduserlicenseagreements-_id_-relationships-territories.md)
