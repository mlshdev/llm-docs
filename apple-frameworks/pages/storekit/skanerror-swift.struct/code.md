> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skanerror-swift.struct/code](https://developer.apple.com/documentation/storekit/skanerror-swift.struct/code)

# SKANError.Code (Swift)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · visionOS 1.0+

Constants that indicate the type of error for an ad network attribution operation.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [SKANError.Code.adNetworkIdMissing](code/adnetworkidmissing.md): The ad network identifier in the ad impression doesn’t match the value in the information property list.
- [SKANError.Code.impressionMissingRequiredValue](code/impressionmissingrequiredvalue.md): A required value is missing from a view-through ad impression.
- [SKANError.Code.impressionNotFound](code/impressionnotfound.md): The system can’t find the ad impression.
- [SKANError.Code.impressionTooShort](code/impressiontooshort.md)
- [SKANError.Code.invalidAdvertisedAppId](code/invalidadvertisedappid.md): The App Store ID of the advertised app is invalid.
- [SKANError.Code.invalidCampaignId](code/invalidcampaignid.md): The campaign identifier that you provided is invalid.
- [SKANError.Code.invalidConversionValue](code/invalidconversionvalue.md): The conversion value is invalid.
- [SKANError.Code.invalidSourceAppId](code/invalidsourceappid.md): The App Store ID of the app displaying the ad is invalid.
- [SKANError.Code.invalidVersion](code/invalidversion.md): The SKAdNetwork version number is invalid.
- [SKANError.Code.mismatchedSourceAppId](code/mismatchedsourceappid.md): The source app identifier in the ad impression doesn’t match the app identifier in the source app.
- [SKANError.Code.unknown](code/unknown.md): An unknown error occurred.
- [SKANError.Code.unsupported](code/unsupported.md): Your app attempted to use functionality that isn’t supported in the specified version.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error handling

- [SKANErrorDomain](../skanerrordomain.md): A string that identifies the SKAdNetwork error domain.
- [SKANError](../skanerror-swift.struct.md): An error that an ad network attribution operation returns.

# SKANError (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · visionOS 1.0+

Constants that indicate the type of error for an ad network attribution operation.

## Declaration

```objectivec
enum SKANError : NSInteger;
```

## Topics

### Error Codes

- [SKANErrorAdNetworkIdMissing](code/adnetworkidmissing.md): The ad network identifier in the ad impression doesn’t match the value in the information property list.
- [SKANErrorImpressionMissingRequiredValue](code/impressionmissingrequiredvalue.md): A required value is missing from a view-through ad impression.
- [SKANErrorImpressionNotFound](code/impressionnotfound.md): The system can’t find the ad impression.
- [SKANErrorImpressionTooShort](code/impressiontooshort.md)
- [SKANErrorInvalidAdvertisedAppId](code/invalidadvertisedappid.md): The App Store ID of the advertised app is invalid.
- [SKANErrorInvalidCampaignId](code/invalidcampaignid.md): The campaign identifier that you provided is invalid.
- [SKANErrorInvalidConversionValue](code/invalidconversionvalue.md): The conversion value is invalid.
- [SKANErrorInvalidSourceAppId](code/invalidsourceappid.md): The App Store ID of the app displaying the ad is invalid.
- [SKANErrorInvalidVersion](code/invalidversion.md): The SKAdNetwork version number is invalid.
- [SKANErrorMismatchedSourceAppId](code/mismatchedsourceappid.md): The source app identifier in the ad impression doesn’t match the app identifier in the source app.
- [SKANErrorUnknown](code/unknown.md): An unknown error occurred.
- [SKANErrorUnsupported](code/unsupported.md): Your app attempted to use functionality that isn’t supported in the specified version.

## See Also

### Error handling

- [SKANErrorDomain](../skanerrordomain.md): A string that identifies the SKAdNetwork error domain.
