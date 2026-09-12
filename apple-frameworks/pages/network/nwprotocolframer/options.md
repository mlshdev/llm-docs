> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/options](https://developer.apple.com/documentation/network/nwprotocolframer/options)

# NWProtocolFramer.Options

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A container you use to add your custom protocol to a connection’s protocol stack.

## Declaration

```swift
class Options
```

## Topics

### Creating Framer Options

- [init(definition:)](options/init%28definition_%29.md): Initializes a set of protocol options with a custom framer definition.

### Subscripts

- [subscript(\_:)](options/subscript%28__%29.md)

## Relationships

### Inherits From

- [NWProtocolOptions](../nwprotocoloptions.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using Framers with Connections

- [NWProtocolFramer.Definition](definition.md): A custom protocol definition you use to associate messages with protocol options.
- [NWProtocolFramer.Message](message.md): A message for a custom protocol, in which you can store arbitrary key-value pairs.
