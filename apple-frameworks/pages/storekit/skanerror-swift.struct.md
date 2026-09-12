> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skanerror-swift.struct](https://developer.apple.com/documentation/storekit/skanerror-swift.struct)

# SKANError

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · visionOS 1.0+

An error that an ad network attribution operation returns.

## Declaration

```swift
struct SKANError
```

## Topics

### Getting Error Codes

- [adNetworkIdMissing](skanerror-swift.struct/adnetworkidmissing.md): The ad network identifier in the ad impression doesn’t match the value in the information property list.
- [impressionMissingRequiredValue](skanerror-swift.struct/impressionmissingrequiredvalue.md): A required value is missing from a view-through ad impression.
- [impressionNotFound](skanerror-swift.struct/impressionnotfound.md): The system can’t find the ad impression.
- [impressionTooShort](skanerror-swift.struct/impressiontooshort.md)
- [invalidAdvertisedAppId](skanerror-swift.struct/invalidadvertisedappid.md): The App Store ID of the advertised app is invalid.
- [invalidCampaignId](skanerror-swift.struct/invalidcampaignid.md): The campaign identifier that you provided is invalid.
- [invalidConversionValue](skanerror-swift.struct/invalidconversionvalue.md): The conversion value is invalid.
- [invalidSourceAppId](skanerror-swift.struct/invalidsourceappid.md): The App Store ID of the app displaying the ad is invalid.
- [invalidVersion](skanerror-swift.struct/invalidversion.md): The SKAdNetwork version number is invalid.
- [mismatchedSourceAppId](skanerror-swift.struct/mismatchedsourceappid.md): The source app identifier in the ad impression doesn’t match the app identifier in the source app.
- [unknown](skanerror-swift.struct/unknown.md): An unknown error occurred.
- [unsupported](skanerror-swift.struct/unsupported.md): Your app attempted to use functionality that isn’t supported in the specified version.
- [SKANError.Code](skanerror-swift.struct/code.md): Constants that indicate the type of error for an ad network attribution operation.

### Type Properties

- [errorDomain](skanerror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error handling

- [SKANErrorDomain](skanerrordomain.md): A string that identifies the SKAdNetwork error domain.
- [SKANError.Code](skanerror-swift.struct/code.md): Constants that indicate the type of error for an ad network attribution operation.
