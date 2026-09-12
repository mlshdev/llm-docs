> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-alternativedistributionpackages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-alternativedistributionpackages-_id_)

# Read Alternative Distribution Package Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.3+

Get information about a specific alternative distribution package.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/alternativeDistributionPackages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the alternative distribution package resource ID from the [Read an app store version’s alternative distribution package](get-v1-appstoreversions-_id_-alternativedistributionpackage.md) response.

## Query Parameters

- `fields[alternativeDistributionPackageVersions]` — `[string]`: Additional fields to include for each alternative distribution package versions resource returned by the response.
  **Allowed values:** `url`, `urlExpirationDate`, `version`, `fileChecksum`, `state`, `variants`, `deltas`, `alternativeDistributionPackage`
- `fields[alternativeDistributionPackages]` — `[string]`: Additional fields to include for each alternative distribution packages resource returned by the response.
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

## Mentioned In

- [App Store Connect API 4.2 release notes](app-store-connect-api-4-2-release-notes.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/alternativeDistributionPackages/c925443b-7dfb-4cc5-8b1a-0074eb7d5fe9
```

**Response**

```json

{
  "data" : {
    "type" : "alternativeDistributionPackages",
    "id" : "c925443b-7dfb-4cc5-8b1a-0074eb7d5fe9",
    "relationships" : {
      "versions" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/alternativeDistributionPackages/c925443b-7dfb-4cc5-8b1a-0074eb7d5fe9/relationships/versions",
          "related" : "https://api.appstoreconnect.apple.com/v1/alternativeDistributionPackages/c925443b-7dfb-4cc5-8b1a-0074eb7d5fe9/versions"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/alternativeDistributionPackages/c925443b-7dfb-4cc5-8b1a-0074eb7d5fe9"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/alternativeDistributionPackages/c925443b-7dfb-4cc5-8b1a-0074eb7d5fe9"
  }
}
```

## See Also

### Creating and reading distribution packages

- [Creating alternative distribution packages](creating-alternative-distribution-packages.md): Create distribution packages for your apps that you distribute on alternative marketplaces or on the web.
- [Create an Alternative Distribution Package](post-v1-alternativedistributionpackages.md): Create an alternative distribution package for an App Store version.
- [Read an app store version’s alternative distribution package](get-v1-appstoreversions-_id_-alternativedistributionpackage.md): Read the alternative distribution package for a specific App Store version.
- [Read Version Information for an Alternative Distribution Package](get-v1-alternativedistributionpackages-_id_-versions.md): Get version detail information about a specific alternative distribution package.
