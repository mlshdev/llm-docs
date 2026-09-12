> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/adattributionkiterror](https://developer.apple.com/documentation/adattributionkit/adattributionkiterror)

# AdAttributionKitError

**Framework:** AdAttributionKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Values that describe ad attribution error conditions.

## Declaration

```swift
enum AdAttributionKitError
```

## Topics

### Enumeration Cases

- [AdAttributionKitError.conversionTagNotSupported](adattributionkiterror/conversiontagnotsupported.md): The postback update failed due to an unsupported use of conversion tag
- [AdAttributionKitError.impressionExpired](adattributionkiterror/impressionexpired.md): The attribution failed because the impression expired.
- [AdAttributionKitError.invalidConversionTag](adattributionkiterror/invalidconversiontag.md): The postback update failed due to an invalid conversion tag
- [AdAttributionKitError.invalidImpressionJWSComponents](adattributionkiterror/invalidimpressionjwscomponents.md): The attribution failed due to invalid JWS components.
- [AdAttributionKitError.invalidImpressionJWSHeader](adattributionkiterror/invalidimpressionjwsheader.md): The attribution failed due to an invalid JWS header.
- [AdAttributionKitError.invalidImpressionJWSPayload](adattributionkiterror/invalidimpressionjwspayload.md): The attribution failed due to an invalid JWS payload.
- [AdAttributionKitError.invalidImpressionJWSSignature](adattributionkiterror/invalidimpressionjwssignature.md): The attribution failed due to an invalid JWS signature.
- [AdAttributionKitError.missingAttributionView](adattributionkiterror/missingattributionview.md): The attribution failed due to a missing attribution view.
- [AdAttributionKitError.unknown](adattributionkiterror/unknown.md): The attribution failed due to an unknown, unrecoverable error.

### Instance Properties

- [description](adattributionkiterror/description.md): A string that describes the error.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
