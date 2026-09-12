> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/message](https://developer.apple.com/documentation/network/nwprotocolframer/message)

# NWProtocolFramer.Message

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A message for a custom protocol, in which you can store arbitrary key-value pairs.

## Declaration

```swift
class Message
```

## Topics

### Creating Framer Messages

- [init(definition:)](message/init%28definition_%29.md): Initializes an empty message for a custom framer definition.
- [init(instance:)](message/init%28instance_%29.md): Initializes an empty message from within a framer implementation.

### Accessing Message Metadata

- [subscript(\_:)](message/subscript%28__%29.md): Get and set object values in a custom framer message.

## Relationships

### Inherits From

- [NWProtocolMetadata](../nwprotocolmetadata.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using Framers with Connections

- [NWProtocolFramer.Definition](definition.md): A custom protocol definition you use to associate messages with protocol options.
- [NWProtocolFramer.Options](options.md): A container you use to add your custom protocol to a connection’s protocol stack.
