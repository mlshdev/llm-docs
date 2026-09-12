> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/defaultprotocolstack](https://developer.apple.com/documentation/network/nwparameters/defaultprotocolstack)

# defaultProtocolStack

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The protocol stack used by connections and listeners.

## Declaration

```swift
final var defaultProtocolStack: NWParameters.ProtocolStack { get }
```

## See Also

### Modifying Protocol Stacks

- [NWParameters.ProtocolStack](protocolstack.md): An ordered set of protocol options that define the protocols that connections and listeners use.
- [NWProtocol](../nwprotocol.md): The abstract superclass used by Network framework protocols and by custom network protocols that you define.
