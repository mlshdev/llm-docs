> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributionpackagedelta](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionpackagedelta)

# AlternativeDistributionPackageDelta

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

An incremental update package for an alternative distribution app, containing only the changes between two versions to reduce download size.

## Declaration

```
object AlternativeDistributionPackageDelta
```

## Properties

- `attributes` — `AlternativeDistributionPackageDelta.Attributes`:
- `id` — `string` (required): An opaque resource ID that uniquely identifies the alternative distribution package delta.
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `alternativeDistributionPackageDeltas`

<a id="Discussion"></a>

## Discussion

For more information about the responses that include alternative distribution package delta objects, see [AlternativeDistributionPackageDeltaResponse](alternativedistributionpackagedeltaresponse.md) or [AlternativeDistributionPackageDeltasResponse](alternativedistributionpackagedeltasresponse.md).

> **Tip**

>  Use the `links` fields to navigate the resource object graph while making your requests. For example, from the alternative distribution package delta object above, you can also reach its package metadata, versions, and variants.

## Topics

### Objects

- [AlternativeDistributionPackageDelta.Attributes](alternativedistributionpackagedelta/attributes-data.dictionary.md): Attributes that describe an alternative distribution package delta resource.

## See Also

### Objects

- [AlternativeDistributionPackage](alternativedistributionpackage.md): The distributable package for an app on an alternative marketplace or web distribution, containing versioned variants and delta updates.
- [AlternativeDistributionPackageCreateRequest](alternativedistributionpackagecreaterequest.md): The request body you use to create an alternative distribution package.
- [AlternativeDistributionPackageResponse](alternativedistributionpackageresponse.md): The response body for endpoints that read a single alternative distribution package.
- [AlternativeDistributionPackageVersion](alternativedistributionpackageversion.md): A versioned snapshot of an alternative distribution package, containing its variants and delta updates.
- [AlternativeDistributionPackageVersionResponse](alternativedistributionpackageversionresponse.md): The response body for endpoints that read a single alternative distribution package version.
- [AlternativeDistributionPackageVersionsResponse](alternativedistributionpackageversionsresponse.md): The response body for endpoints that list versions of an alternative distribution package.
- [AlternativeDistributionPackageDeltaResponse](alternativedistributionpackagedeltaresponse.md): A response containing a single delta update for an alternative distribution package.
- [AlternativeDistributionPackageDeltasResponse](alternativedistributionpackagedeltasresponse.md): A response containing a list of delta updates available for an alternative distribution package.
- [AlternativeDistributionPackageVariant](alternativedistributionpackagevariant.md): A device-specific file package within an alternative distribution app, targeting a particular device family.
- [AlternativeDistributionPackageVariantResponse](alternativedistributionpackagevariantresponse.md): A response containing a single variant of an alternative distribution package.
- [AlternativeDistributionPackageVariantsResponse](alternativedistributionpackagevariantsresponse.md): A response containing a list of device-specific variants within an alternative distribution package.
- [AlternativeDistributionPackageVersionDeltasLinkagesResponse](alternativedistributionpackageversiondeltaslinkagesresponse.md)
- [AlternativeDistributionPackageVersionVariantsLinkagesResponse](alternativedistributionpackageversionvariantslinkagesresponse.md)
- [AlternativeDistributionPackageVersionsLinkagesResponse](alternativedistributionpackageversionslinkagesresponse.md)
