> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/definition](https://developer.apple.com/documentation/network/nwprotocolframer/definition)

# NWProtocolFramer.Definition

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A custom protocol definition you use to associate messages with protocol options.

## Declaration

```swift
class Definition
```

## Topics

### Defining Framer Protocols

- [init(implementation:)](definition/init%28implementation_%29.md): Initializes a new protocol definition based on your protocol implementation.

## Relationships

### Inherits From

- [NWProtocolDefinition](../nwprotocoldefinition.md)

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using Framers with Connections

- [NWProtocolFramer.Options](options.md): A container you use to add your custom protocol to a connection’s protocol stack.
- [NWProtocolFramer.Message](message.md): A message for a custom protocol, in which you can store arbitrary key-value pairs.
