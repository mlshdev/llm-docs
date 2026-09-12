> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteractionforsecurepinchange/confirmation](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteractionforsecurepinchange/confirmation)

# TKSmartCardUserInteractionForSecurePINChange.Confirmation (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```swift
struct Confirmation
```

## Topics

### Type Properties

- [current](confirmation/current.md)
- [new](confirmation/new.md)

### Initializers

- [init(rawValue:)](confirmation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring User Interaction

- [pinConfirmation](pinconfirmation.md): The way PIN confirmation is requested. `TKSmartCardPINConfirmationNone` by default.

# TKSmartCardPINConfirmation (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
enum TKSmartCardPINConfirmation : NSUInteger;
```

## Topics

### Type Properties

- [TKSmartCardPINConfirmationCurrent](confirmation/current.md)
- [TKSmartCardPINConfirmationNew](confirmation/new.md)
- [TKSmartCardPINConfirmationNone](../tksmartcardpinconfirmation/tksmartcardpinconfirmationnone.md)

## See Also

### Configuring User Interaction

- [PINConfirmation](pinconfirmation.md): The way PIN confirmation is requested. `TKSmartCardPINConfirmationNone` by default.
