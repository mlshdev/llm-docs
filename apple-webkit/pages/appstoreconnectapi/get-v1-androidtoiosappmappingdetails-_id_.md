> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-androidtoiosappmappingdetails-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-androidtoiosappmappingdetails-_id_)

# Read Android to iOS App Mapping Details

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get information about a specific android to iOS app mapping detail.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/androidToIosAppMappingDetails/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the android to iOS app mapping detail resource ID from the [Create an Android to iOS App Mapping Detail](post-v1-androidtoiosappmappingdetails.md) response.

## Query Parameters

- `fields[androidToIosAppMappingDetails]` — `[string]`: Additional fields to include for each android to iOS app mapping details resource returned by the response.
  **Allowed values:** `packageName`, `appSigningKeyPublicCertificateSha256Fingerprints`

## Response Codes

- `200` OK — `AndroidToIosAppMappingDetailResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Mapping Details

- [Modify an Android to iOS App Mapping Detail](patch-v1-androidtoiosappmappingdetails-_id_.md): Update an Android to iOS app mapping detail.
- [Create an Android to iOS App Mapping Detail](post-v1-androidtoiosappmappingdetails.md): Create a detail that maps an Android app to an iOS app.
- [Delete an Android to iOS Mapping Detail](delete-v1-androidtoiosappmappingdetails-_id_.md): Remove a specific Android to iOS mapping detail.
