> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributionpackagevariantresponse](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionpackagevariantresponse)

# AlternativeDistributionPackageVariantResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

A response containing a single variant of an alternative distribution package.

## Declaration

```
object AlternativeDistributionPackageVariantResponse
```

## Properties

- `data` — `AlternativeDistributionPackageVariant` (required):
- `links` — `DocumentLinks` (required):

<a id="Discussion"></a>

## Discussion

This object is the response that contains a single alternative distribution package variant. For more information, see [Read variant information for an alternative distribution package](get-v1-alternativedistributionpackagevariants-_id_.md). The schema of the response body is below.

```javascript
{
  "data": {
    "type": "alternativeDistributionPackageVariants",
    "id": "string",
    "attributes": {
      "url": "string",
      "urlExpirationDate": "2025-02-23T06:53:07.520Z",
      "alternativeDistributionKeyBlob": "string"
    },
    "links": {
      "self": "string"
    }
  },
  "links": {
    "self": "string"
  }
}
```

## See Also

### Objects

- [AlternativeDistributionPackage](alternativedistributionpackage.md): The distributable package for an app on an alternative marketplace or web distribution, containing versioned variants and delta updates.
- [AlternativeDistributionPackageCreateRequest](alternativedistributionpackagecreaterequest.md): The request body you use to create an alternative distribution package.
- [AlternativeDistributionPackageResponse](alternativedistributionpackageresponse.md): The response body for endpoints that read a single alternative distribution package.
- [AlternativeDistributionPackageVersion](alternativedistributionpackageversion.md): A versioned snapshot of an alternative distribution package, containing its variants and delta updates.
- [AlternativeDistributionPackageVersionResponse](alternativedistributionpackageversionresponse.md): The response body for endpoints that read a single alternative distribution package version.
- [AlternativeDistributionPackageVersionsResponse](alternativedistributionpackageversionsresponse.md): The response body for endpoints that list versions of an alternative distribution package.
- [AlternativeDistributionPackageDelta](alternativedistributionpackagedelta.md): An incremental update package for an alternative distribution app, containing only the changes between two versions to reduce download size.
- [AlternativeDistributionPackageDeltaResponse](alternativedistributionpackagedeltaresponse.md): A response containing a single delta update for an alternative distribution package.
- [AlternativeDistributionPackageDeltasResponse](alternativedistributionpackagedeltasresponse.md): A response containing a list of delta updates available for an alternative distribution package.
- [AlternativeDistributionPackageVariant](alternativedistributionpackagevariant.md): A device-specific file package within an alternative distribution app, targeting a particular device family.
- [AlternativeDistributionPackageVariantsResponse](alternativedistributionpackagevariantsresponse.md): A response containing a list of device-specific variants within an alternative distribution package.
- [AlternativeDistributionPackageVersionDeltasLinkagesResponse](alternativedistributionpackageversiondeltaslinkagesresponse.md)
- [AlternativeDistributionPackageVersionVariantsLinkagesResponse](alternativedistributionpackageversionvariantslinkagesresponse.md)
- [AlternativeDistributionPackageVersionsLinkagesResponse](alternativedistributionpackageversionslinkagesresponse.md)
