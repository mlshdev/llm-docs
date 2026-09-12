> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skanerror-swift.struct/adnetworkidmissing](https://developer.apple.com/documentation/storekit/skanerror-swift.struct/adnetworkidmissing)

# adNetworkIdMissing

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · visionOS 1.0+

The ad network identifier in the ad impression doesn’t match the value in the information property list.

## Declaration

```swift
static var adNetworkIdMissing: SKANError.Code { get }
```

<a id="Discussion"></a>

## Discussion

The value you specify for your ad network identifier in your ad impresion must match the value in the `Info.plist`. \`\`An app that participates in ad campaigns by displaying ads must include the ad network identifiers in its `Info.plist`. For more information, see [Configuring a source app](../configuring-a-source-app.md).

## See Also

### Getting Error Codes

- [impressionMissingRequiredValue](impressionmissingrequiredvalue.md): A required value is missing from a view-through ad impression.
- [impressionNotFound](impressionnotfound.md): The system can’t find the ad impression.
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
