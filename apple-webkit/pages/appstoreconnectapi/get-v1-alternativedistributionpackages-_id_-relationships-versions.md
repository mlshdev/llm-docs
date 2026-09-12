> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-alternativedistributionpackages-_id_-relationships-versions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-alternativedistributionpackages-_id_-relationships-versions)

# Read version ids for an alternative distribution package

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get version IDs about a specific alternative distribution package.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/alternativeDistributionPackages/{id}/relationships/versions
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the alternative distribution package resource ID from the [Read Alternative Distribution Package Information](get-v1-alternativedistributionpackages-_id_.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of alternative distribution package version resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AlternativeDistributionPackageVersionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting version information

- [Read Information for an Alternative Distribution Package Version](get-v1-alternativedistributionpackageversions-_id_.md): Get detail information about a specific alternative distribution package version.
- [Read Version Information for an Alternative Distribution Package](get-v1-alternativedistributionpackages-_id_-versions.md): Get version detail information about a specific alternative distribution package.
- [List Deltas Information](get-v1-alternativedistributionpackageversions-_id_-deltas.md): List deltas for a specific alternative distribution package version.
- [List Variants Information](get-v1-alternativedistributionpackageversions-_id_-variants.md): List variants for specific alternative distribution package version.
- [List delta ids](get-v1-alternativedistributionpackageversions-_id_-relationships-deltas.md): List all delta Ids for a specific alternative distribution package version.
- [List variant ids information](get-v1-alternativedistributionpackageversions-_id_-relationships-variants.md): List variant Ids for specific alternative distribution package version.
