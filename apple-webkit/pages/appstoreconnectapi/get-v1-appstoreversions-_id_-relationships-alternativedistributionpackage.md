> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-alternativedistributionpackage](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-alternativedistributionpackage)

# Get the alternative distribution package ID for an App Store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}/relationships/alternativeDistributionPackage
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppStoreVersionAlternativeDistributionPackageLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Distribution Package Information

- [Read an app store version’s alternative distribution package](get-v1-appstoreversions-_id_-alternativedistributionpackage.md): Read the alternative distribution package for a specific App Store version.
