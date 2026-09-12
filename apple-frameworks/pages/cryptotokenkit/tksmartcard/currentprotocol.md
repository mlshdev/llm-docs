> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/currentprotocol](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/currentprotocol)

# currentProtocol (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The protocol used for communication with the Smart Card. Returns [TKSmartCardProtocolNone](../tksmartcardprotocol/tksmartcardprotocolnone.md) if no session is currently established.

## Declaration

```swift
var currentProtocol: TKSmartCardProtocol { get }
```

## See Also

### Setting the Communication Protocol

- [allowedProtocols](allowedprotocols.md): The protocols allowed for communication with the Smart Card. [any](../tksmartcardprotocol/any.md) by default.
- [TKSmartCardProtocol](../tksmartcardprotocol.md): Smart Card transmission protocols.

# currentProtocol (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The protocol used for communication with the Smart Card. Returns [TKSmartCardProtocolNone](../tksmartcardprotocol/tksmartcardprotocolnone.md) if no session is currently established.

## Declaration

```objectivec
@property (readonly) TKSmartCardProtocol currentProtocol;
```

## See Also

### Setting the Communication Protocol

- [allowedProtocols](allowedprotocols.md): The protocols allowed for communication with the Smart Card. [TKSmartCardProtocolAny](../tksmartcardprotocol/any.md) by default.
- [TKSmartCardProtocol](../tksmartcardprotocol.md): Smart Card transmission protocols.
