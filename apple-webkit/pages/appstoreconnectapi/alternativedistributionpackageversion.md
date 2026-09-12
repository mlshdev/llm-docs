> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributionpackageversion](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionpackageversion)

# AlternativeDistributionPackageVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

A versioned snapshot of an alternative distribution package, containing its variants and delta updates.

## Declaration

```
object AlternativeDistributionPackageVersion
```

## Properties

- `attributes` — `AlternativeDistributionPackageVersion.Attributes`:
- `id` — `string` (required): An opaque resource ID that uniquely identifies the alternative distribution package version.
- `links` — `ResourceLinks`:
- `relationships` — `AlternativeDistributionPackageVersion.Relationships`:
- `type` — `string` (required): **Allowed values:** `alternativeDistributionPackageVersions`

<a id="Discussion"></a>

## Discussion

For more information about the responses that includes alternative distribution package version objects, see [AlternativeDistributionPackageVersionResponse](alternativedistributionpackageversionresponse.md) or [AlternativeDistributionPackageVersionsResponse](alternativedistributionpackageversionsresponse.md).

> **Tip**

>  Use the `links` fields to navigate the resource object graph while making your requests. For example, from the alternative distribution package version object above, you can also reach its package metadata, deltas, and variants.

## Topics

### Objects

- [AlternativeDistributionPackageVersion.Attributes](alternativedistributionpackageversion/attributes-data.dictionary.md): Attributes that describe an alternative distribution package version resource.
- [AlternativeDistributionPackageVersion.Relationships](alternativedistributionpackageversion/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AlternativeDistributionPackage](alternativedistributionpackage.md): The distributable package for an app on an alternative marketplace or web distribution, containing versioned variants and delta updates.
- [AlternativeDistributionPackageCreateRequest](alternativedistributionpackagecreaterequest.md): The request body you use to create an alternative distribution package.
- [AlternativeDistributionPackageResponse](alternativedistributionpackageresponse.md): The response body for endpoints that read a single alternative distribution package.
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
