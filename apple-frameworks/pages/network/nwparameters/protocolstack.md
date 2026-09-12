> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/protocolstack](https://developer.apple.com/documentation/network/nwparameters/protocolstack)

# NWParameters.ProtocolStack

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An ordered set of protocol options that define the protocols that connections and listeners use.

## Declaration

```swift
class ProtocolStack
```

## Topics

### Adding Application Protocols

- [applicationProtocols](protocolstack/applicationprotocols.md): The array of application protocol options used by connections and listeners.

### Configuring Lower Protocols

- [transportProtocol](protocolstack/transportprotocol.md): The transport protocol options used by connections and listeners.
- [internetProtocol](protocolstack/internetprotocol.md): The Internet Protocol options used by connections and listeners.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying Protocol Stacks

- [defaultProtocolStack](defaultprotocolstack.md): The protocol stack used by connections and listeners.
- [NWProtocol](../nwprotocol.md): The abstract superclass used by Network framework protocols and by custom network protocols that you define.
