> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-alternativedistributionpackage](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-alternativedistributionpackage)

# Read an app store version’s alternative distribution package

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.3+

Read the alternative distribution package for a specific App Store version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}/alternativeDistributionPackage
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version resource ID from the [List all app store versions for an app](get-v1-apps-_id_-appstoreversions.md) response.

## Query Parameters

- `fields[alternativeDistributionPackageVersions]` — `[string]`: Additional fields to include for each alternative distribution package version resource returned by the response.
  **Allowed values:** `url`, `urlExpirationDate`, `version`, `fileChecksum`, `state`, `variants`, `deltas`, `alternativeDistributionPackage`
- `fields[alternativeDistributionPackages]` — `[string]`: Additional fields to include for each alternative distribution package resource returned by the response.
  **Allowed values:** `sourceFileChecksum`, `versions`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `versions`
- `limit[versions]` — `integer`: The maximum number of related versions resources to return.
  **Maximum:** `50`

## Response Codes

- `200` OK — `AlternativeDistributionPackageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/appStoreVersions/f6586f8b-12db-4861-818e-b5cbe0d1736f/alternativeDistributionPackage
```

**Response**

```json
{
  "data": {
    "type": "alternativeDistributionPackages",
    "id": "e651dbc7-a7a7-4e84-a1ae-2afcd92ec6cb",
    "relationships": {
      "versions": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/alternativeDistributionPackages/e651dbc7-a7a7-4e84-a1ae-2afcd92ec6cb/relationships/versions",
          "related": "https://api.appstoreconnect.apple.com/v1/alternativeDistributionPackages/e651dbc7-a7a7-4e84-a1ae-2afcd92ec6cb/versions"
        }
      }
    },
    "links": {
      "self": "https://api.appstoreconnect.apple.com/v1/alternativeDistributionPackages/e651dbc7-a7a7-4e84-a1ae-2afcd92ec6cb"
    }
  },
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f6586f8b-12db-4861-818e-b5cbe0d1736f/alternativeDistributionPackage"
  }
}
```

## See Also

### Creating and reading distribution packages

- [Creating alternative distribution packages](creating-alternative-distribution-packages.md): Create distribution packages for your apps that you distribute on alternative marketplaces or on the web.
- [Read Alternative Distribution Package Information](get-v1-alternativedistributionpackages-_id_.md): Get information about a specific alternative distribution package.
- [Create an Alternative Distribution Package](post-v1-alternativedistributionpackages.md): Create an alternative distribution package for an App Store version.
- [Read Version Information for an Alternative Distribution Package](get-v1-alternativedistributionpackages-_id_-versions.md): Get version detail information about a specific alternative distribution package.
