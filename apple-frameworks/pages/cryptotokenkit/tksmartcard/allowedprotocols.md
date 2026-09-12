> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/allowedprotocols](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/allowedprotocols)

# allowedProtocols (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The protocols allowed for communication with the Smart Card. [any](../tksmartcardprotocol/any.md) by default.

## Declaration

```swift
var allowedProtocols: TKSmartCardProtocol { get set }
```

<a id="Discussion"></a>

## Discussion

This property is consulted only when beginning a session to a Smart Card. Any changes to this property will not be reflected by the current session, if one is already established.

## See Also

### Setting the Communication Protocol

- [currentProtocol](currentprotocol.md): The protocol used for communication with the Smart Card. Returns [TKSmartCardProtocolNone](../tksmartcardprotocol/tksmartcardprotocolnone.md) if no session is currently established.
- [TKSmartCardProtocol](../tksmartcardprotocol.md): Smart Card transmission protocols.

# allowedProtocols (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The protocols allowed for communication with the Smart Card. [TKSmartCardProtocolAny](../tksmartcardprotocol/any.md) by default.

## Declaration

```objectivec
@property TKSmartCardProtocol allowedProtocols;
```

<a id="Discussion"></a>

## Discussion

This property is consulted only when beginning a session to a Smart Card. Any changes to this property will not be reflected by the current session, if one is already established.

## See Also

### Setting the Communication Protocol

- [currentProtocol](currentprotocol.md): The protocol used for communication with the Smart Card. Returns [TKSmartCardProtocolNone](../tksmartcardprotocol/tksmartcardprotocolnone.md) if no session is currently established.
- [TKSmartCardProtocol](../tksmartcardprotocol.md): Smart Card transmission protocols.
