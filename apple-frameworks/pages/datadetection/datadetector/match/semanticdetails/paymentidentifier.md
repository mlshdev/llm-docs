> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/paymentidentifier](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/paymentidentifier)

# DataDetector.Match.SemanticDetails.PaymentIdentifier

**Framework:** DataDetection  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A match that the data detector determines represents a payment identifier.

## Declaration

```swift
struct PaymentIdentifier
```

<a id="Discussion"></a>

## Discussion

The [identifier](paymentidentifier/identifier.md) property is an identifier suitable to initiate a payment transaction. The [type](paymentidentifier/type.md) is the type of payment system.

## Topics

- [identifier](paymentidentifier/identifier.md): An identifier suitable to initiate a payment transaction.
- [type](paymentidentifier/type.md): The type of payment system.

### Enumerations

- [DataDetector.Match.SemanticDetails.PaymentIdentifier.PaymentSystem](paymentidentifier/paymentsystem.md): Values that describe payment system types.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
