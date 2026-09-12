> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/matchtype](https://developer.apple.com/documentation/datadetection/datadetector/matchtype)

# DataDetector.MatchType

**Framework:** DataDetection  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of types of matches that the system can find in a string.

## Declaration

```swift
struct MatchType
```

<a id="Discussion"></a>

## Discussion

> **Note**

> The framework may either not support or only partially support some types in certain languages.

## Topics

### Supported match types

- [all](matchtype/all.md): A set of types that includes all publicly useable types.
- [calendarEvent](matchtype/calendarevent.md): The type that represents calendar events, such as dates and times, or date and time ranges.
- [emailAddress](matchtype/emailaddress.md): The type that represents email addresses.
- [flightNumber](matchtype/flightnumber.md): The type that represents flight numbers.
- [link](matchtype/link.md): The type that represents links, not limited to web links.
- [measurement](matchtype/measurement.md): The type that represents measurements, such as distances and weights.
- [moneyAmount](matchtype/moneyamount.md): The type that represents monetary amounts.
- [paymentIdentifier](matchtype/paymentidentifier.md): The type that represents payment identifiers, such as Universal Payments Interface (UPI) identifiers.
- [phoneNumber](matchtype/phonenumber.md): The type that represents phone numbers.
- [postalAddress](matchtype/postaladdress.md): The type that represents postal addresses.
- [shipmentTrackingNumber](matchtype/shipmenttrackingnumber.md): The type that represents shipment tracking numbers.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Structures

- [DataDetector.Match](match.md): A representation of a match that includes common properties and an enumeration that represents the match type and its specific semantic components.
- [DataDetector.Options](options.md): A set of options you can use to refine the behavior of text scanning, and better interpret the semantic domain of the matches.
