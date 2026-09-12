> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributionpackagecreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionpackagecreaterequest)

# AlternativeDistributionPackageCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

The request body you use to create an alternative distribution package.

## Declaration

```
object AlternativeDistributionPackageCreateRequest
```

## Properties

- `data` — `AlternativeDistributionPackageCreateRequest.Data` (required):

<a id="Discussion"></a>

## Discussion

Use this object to create a new alternative distribution package in App Store Connect. For more information about the request that includes this request body, see [Create an Alternative Distribution Package](post-v1-alternativedistributionpackages.md).

## Topics

### Objects

- [AlternativeDistributionPackageCreateRequest.Data](alternativedistributionpackagecreaterequest/data-data.dictionary.md): The request body you use to create an alternative distribution package.

## See Also

### Objects

- [AlternativeDistributionPackage](alternativedistributionpackage.md): The distributable package for an app on an alternative marketplace or web distribution, containing versioned variants and delta updates.
- [AlternativeDistributionPackageResponse](alternativedistributionpackageresponse.md): The response body for endpoints that read a single alternative distribution package.
- [AlternativeDistributionPackageVersion](alternativedistributionpackageversion.md): A versioned snapshot of an alternative distribution package, containing its variants and delta updates.
- [AlternativeDistributionPackageVersionResponse](alternativedistributionpackageversionresponse.md): The response body for endpoints that read a single alternative distribution package version.
- [AlternativeDistributionPackageVersionsResponse](alternativedistributionpackageversionsresponse.md): The response body for endpoints that list versions of an alternative distribution package.
- [AlternativeDistributionPackageDelta](alternativedistributionpackagedelta.md): An incremental update package for an alternative distribution app, containing only the changes between two versions to reduce download size.
- [AlternativeDistributionPackageDeltaResponse](alternativedistributionpackagedeltaresponse.md): A response containing a single delta update for an alternative distribution package.
- [AlternativeDistributionPackageDeltasResponse](alternativedistributionpackagedeltasresponse.md): A response containing a list of delta updates available for an alternative distribution package.
- [AlternativeDistributionPackageVariant](alternativedistributionpackagevariant.md): A device-specific file package within an alternative distribution app, targeting a particular device family.
- [AlternativeDistributionPackageVariantResponse](alternativedistributionpackagevariantresponse.md): A response containing a single variant of an alternative distribution package.
- [AlternativeDistributionPackageVariantsResponse](alternativedistributionpackagevariantsresponse.md): A response containing a list of device-specific variants within an alternative distribution package.
- [AlternativeDistributionPackageVersionDeltasLinkagesResponse](alternativedistributionpackageversiondeltaslinkagesresponse.md)
- [AlternativeDistributionPackageVersionVariantsLinkagesResponse](alternativedistributionpackageversionvariantslinkagesresponse.md)
- [AlternativeDistributionPackageVersionsLinkagesResponse](alternativedistributionpackageversionslinkagesresponse.md)
