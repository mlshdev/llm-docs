> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skanerror-swift.struct/code/invalidversion](https://developer.apple.com/documentation/storekit/skanerror-swift.struct/code/invalidversion)

# SKANError.Code.invalidVersion (Swift)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · visionOS 1.0+

The SKAdNetwork version number is invalid.

## Declaration

```swift
case invalidVersion
```

<a id="Discussion"></a>

## Discussion

Ad networks provide an SKAdNetwork version number when preparing an ad impression, in [SKStoreProductParameterAdNetworkVersion](../../skstoreproductparameteradnetworkversion.md) or [version](../../skadimpression/version.md). Check that the version number is valid and that you follow the version-specific instructions to generate a signature. For more information about versions, see [SKAdNetwork release notes](../../skadnetwork-release-notes.md).

## See Also

### Error Codes

- [SKANError.Code.adNetworkIdMissing](adnetworkidmissing.md): The ad network identifier in the ad impression doesn’t match the value in the information property list.
- [SKANError.Code.impressionMissingRequiredValue](impressionmissingrequiredvalue.md): A required value is missing from a view-through ad impression.
- [SKANError.Code.impressionNotFound](impressionnotfound.md): The system can’t find the ad impression.
- [SKANError.Code.impressionTooShort](impressiontooshort.md)
- [SKANError.Code.invalidAdvertisedAppId](invalidadvertisedappid.md): The App Store ID of the advertised app is invalid.
- [SKANError.Code.invalidCampaignId](invalidcampaignid.md): The campaign identifier that you provided is invalid.
- [SKANError.Code.invalidConversionValue](invalidconversionvalue.md): The conversion value is invalid.
- [SKANError.Code.invalidSourceAppId](invalidsourceappid.md): The App Store ID of the app displaying the ad is invalid.
- [SKANError.Code.mismatchedSourceAppId](mismatchedsourceappid.md): The source app identifier in the ad impression doesn’t match the app identifier in the source app.
- [SKANError.Code.unknown](unknown.md): An unknown error occurred.
- [SKANError.Code.unsupported](unsupported.md): Your app attempted to use functionality that isn’t supported in the specified version.

# SKANErrorInvalidVersion (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · visionOS 1.0+

The SKAdNetwork version number is invalid.

## Declaration

```objectivec
SKANErrorInvalidVersion
```

<a id="Discussion"></a>

## Discussion

Ad networks provide an SKAdNetwork version number when preparing an ad impression, in [SKStoreProductParameterAdNetworkVersion](../../skstoreproductparameteradnetworkversion.md) or [version](../../skadimpression/version.md). Check that the version number is valid and that you follow the version-specific instructions to generate a signature. For more information about versions, see [SKAdNetwork release notes](../../skadnetwork-release-notes.md).

## See Also

### Error Codes

- [SKANErrorAdNetworkIdMissing](adnetworkidmissing.md): The ad network identifier in the ad impression doesn’t match the value in the information property list.
- [SKANErrorImpressionMissingRequiredValue](impressionmissingrequiredvalue.md): A required value is missing from a view-through ad impression.
- [SKANErrorImpressionNotFound](impressionnotfound.md): The system can’t find the ad impression.
- [SKANErrorImpressionTooShort](impressiontooshort.md)
- [SKANErrorInvalidAdvertisedAppId](invalidadvertisedappid.md): The App Store ID of the advertised app is invalid.
- [SKANErrorInvalidCampaignId](invalidcampaignid.md): The campaign identifier that you provided is invalid.
- [SKANErrorInvalidConversionValue](invalidconversionvalue.md): The conversion value is invalid.
- [SKANErrorInvalidSourceAppId](invalidsourceappid.md): The App Store ID of the app displaying the ad is invalid.
- [SKANErrorMismatchedSourceAppId](mismatchedsourceappid.md): The source app identifier in the ad impression doesn’t match the app identifier in the source app.
- [SKANErrorUnknown](unknown.md): An unknown error occurred.
- [SKANErrorUnsupported](unsupported.md): Your app attempted to use functionality that isn’t supported in the specified version.
