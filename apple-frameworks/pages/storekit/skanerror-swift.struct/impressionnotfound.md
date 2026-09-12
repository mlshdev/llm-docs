> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skanerror-swift.struct/impressionnotfound](https://developer.apple.com/documentation/storekit/skanerror-swift.struct/impressionnotfound)

# impressionNotFound

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · visionOS 1.0+

The system can’t find the ad impression.

## Declaration

```swift
static var impressionNotFound: SKANError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error may occur if an app calls [endImpression(\_:completionHandler:)](../skadnetwork/endimpression%28__completionhandler_%29.md) before calling [startImpression(\_:completionHandler:)](../skadnetwork/startimpression%28__completionhandler_%29.md).

## See Also

### Getting Error Codes

- [adNetworkIdMissing](adnetworkidmissing.md): The ad network identifier in the ad impression doesn’t match the value in the information property list.
- [impressionMissingRequiredValue](impressionmissingrequiredvalue.md): A required value is missing from a view-through ad impression.
- [impressionTooShort](impressiontooshort.md)
- [invalidAdvertisedAppId](invalidadvertisedappid.md): The App Store ID of the advertised app is invalid.
- [invalidCampaignId](invalidcampaignid.md): The campaign identifier that you provided is invalid.
- [invalidConversionValue](invalidconversionvalue.md): The conversion value is invalid.
- [invalidSourceAppId](invalidsourceappid.md): The App Store ID of the app displaying the ad is invalid.
- [invalidVersion](invalidversion.md): The SKAdNetwork version number is invalid.
- [mismatchedSourceAppId](mismatchedsourceappid.md): The source app identifier in the ad impression doesn’t match the app identifier in the source app.
- [unknown](unknown.md): An unknown error occurred.
- [unsupported](unsupported.md): Your app attempted to use functionality that isn’t supported in the specified version.
- [SKANError.Code](code.md): Constants that indicate the type of error for an ad network attribution operation.
