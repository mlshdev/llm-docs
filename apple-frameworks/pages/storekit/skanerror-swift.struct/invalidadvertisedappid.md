> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skanerror-swift.struct/invalidadvertisedappid](https://developer.apple.com/documentation/storekit/skanerror-swift.struct/invalidadvertisedappid)

# invalidAdvertisedAppId

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · visionOS 1.0+

The App Store ID of the advertised app is invalid.

## Declaration

```swift
static var invalidAdvertisedAppId: SKANError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Ad networks provide an advertised app identifier when signing an ad impression. If you’re providing a StoreKit-rendered ad, check that the value you set for [SKStoreProductParameterITunesItemIdentifier](../skstoreproductparameteritunesitemidentifier.md) in [loadProduct(withParameters:completionBlock:)](../skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md) is a valid app identifer. If you’re providing a view-through ad, check the value of [advertisedAppStoreItemIdentifier](../skadimpression/advertisedappstoreitemidentifier.md).

## See Also

### Getting Error Codes

- [adNetworkIdMissing](adnetworkidmissing.md): The ad network identifier in the ad impression doesn’t match the value in the information property list.
- [impressionMissingRequiredValue](impressionmissingrequiredvalue.md): A required value is missing from a view-through ad impression.
- [impressionNotFound](impressionnotfound.md): The system can’t find the ad impression.
- [impressionTooShort](impressiontooshort.md)
- [invalidCampaignId](invalidcampaignid.md): The campaign identifier that you provided is invalid.
- [invalidConversionValue](invalidconversionvalue.md): The conversion value is invalid.
- [invalidSourceAppId](invalidsourceappid.md): The App Store ID of the app displaying the ad is invalid.
- [invalidVersion](invalidversion.md): The SKAdNetwork version number is invalid.
- [mismatchedSourceAppId](mismatchedsourceappid.md): The source app identifier in the ad impression doesn’t match the app identifier in the source app.
- [unknown](unknown.md): An unknown error occurred.
- [unsupported](unsupported.md): Your app attempted to use functionality that isn’t supported in the specified version.
- [SKANError.Code](code.md): Constants that indicate the type of error for an ad network attribution operation.
