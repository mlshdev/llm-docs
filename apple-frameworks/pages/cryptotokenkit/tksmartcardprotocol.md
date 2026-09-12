> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardprotocol](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardprotocol)

# TKSmartCardProtocol (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Smart Card transmission protocols.

## Declaration

```swift
struct TKSmartCardProtocol
```

## Topics

### Constants

- [t0](tksmartcardprotocol/t0.md)
- [t1](tksmartcardprotocol/t1.md)
- [t15](tksmartcardprotocol/t15.md)
- [any](tksmartcardprotocol/any.md)

### Initializers

- [init(rawValue:)](tksmartcardprotocol/init%28rawvalue_%29.md)

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

### Setting the Communication Protocol

- [allowedProtocols](tksmartcard/allowedprotocols.md): The protocols allowed for communication with the Smart Card. [any](tksmartcardprotocol/any.md) by default.
- [currentProtocol](tksmartcard/currentprotocol.md): The protocol used for communication with the Smart Card. Returns [TKSmartCardProtocolNone](tksmartcardprotocol/tksmartcardprotocolnone.md) if no session is currently established.

# TKSmartCardProtocol (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Smart Card transmission protocols.

## Declaration

```objectivec
enum TKSmartCardProtocol : NSUInteger;
```

## Topics

### Constants

- [TKSmartCardProtocolNone](tksmartcardprotocol/tksmartcardprotocolnone.md)
- [TKSmartCardProtocolT0](tksmartcardprotocol/t0.md)
- [TKSmartCardProtocolT1](tksmartcardprotocol/t1.md)
- [TKSmartCardProtocolT15](tksmartcardprotocol/t15.md)
- [TKSmartCardProtocolAny](tksmartcardprotocol/any.md)

## See Also

### Setting the Communication Protocol

- [allowedProtocols](tksmartcard/allowedprotocols.md): The protocols allowed for communication with the Smart Card. [TKSmartCardProtocolAny](tksmartcardprotocol/any.md) by default.
- [currentProtocol](tksmartcard/currentprotocol.md): The protocol used for communication with the Smart Card. Returns [TKSmartCardProtocolNone](tksmartcardprotocol/tksmartcardprotocolnone.md) if no session is currently established.
