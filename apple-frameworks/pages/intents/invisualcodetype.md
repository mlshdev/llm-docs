> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invisualcodetype](https://developer.apple.com/documentation/intents/invisualcodetype)

# INVisualCodeType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Constants indicating the purpose of the visual code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INVisualCodeType
```

## Topics

### General Types

- [INVisualCodeType.unknown](invisualcodetype/unknown.md): Deprecated. An unknown type of visual code.
- [INVisualCodeType.contact](invisualcodetype/contact.md): Deprecated. A visual code providing the user’s contact information.

### Payment Types

- [INVisualCodeType.requestPayment](invisualcodetype/requestpayment.md): Deprecated. A visual code for requesting a payment.
- [INVisualCodeType.sendPayment](invisualcodetype/sendpayment.md): Deprecated. A visual code for making a payment.

### Transportation Types

- [INVisualCodeType.bus](invisualcodetype/bus.md): Deprecated. A visual code for bus transportation.
- [INVisualCodeType.subway](invisualcodetype/subway.md): Deprecated. A visual code for subway transportation.
- [INVisualCodeType.transit](invisualcodetype/transit.md): Deprecated. A visual code for public transit.

### Initializers

- [init(rawValue:)](invisualcodetype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Visual Code Type

- [visualCodeType](ingetvisualcodeintent/visualcodetype.md): Deprecated. The type of visual code requested by the user.

# INVisualCodeType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Constants indicating the purpose of the visual code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INVisualCodeType : NSInteger;
```

## Topics

### General Types

- [INVisualCodeTypeUnknown](invisualcodetype/unknown.md): Deprecated. An unknown type of visual code.
- [INVisualCodeTypeContact](invisualcodetype/contact.md): Deprecated. A visual code providing the user’s contact information.

### Payment Types

- [INVisualCodeTypeRequestPayment](invisualcodetype/requestpayment.md): Deprecated. A visual code for requesting a payment.
- [INVisualCodeTypeSendPayment](invisualcodetype/sendpayment.md): Deprecated. A visual code for making a payment.

### Transportation Types

- [INVisualCodeTypeBus](invisualcodetype/bus.md): Deprecated. A visual code for bus transportation.
- [INVisualCodeTypeSubway](invisualcodetype/subway.md): Deprecated. A visual code for subway transportation.
- [INVisualCodeTypeTransit](invisualcodetype/transit.md): Deprecated. A visual code for public transit.

## See Also

### Getting the Visual Code Type

- [visualCodeType](ingetvisualcodeintent/visualcodetype.md): Deprecated. The type of visual code requested by the user.
