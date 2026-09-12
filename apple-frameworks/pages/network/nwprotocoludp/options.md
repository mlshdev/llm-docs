> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocoludp/options](https://developer.apple.com/documentation/network/nwprotocoludp/options)

# NWProtocolUDP.Options

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A container of options for configuring how UDP is used on a connection.

## Declaration

```swift
class Options
```

## Topics

### Customizing UDP Connections

- [init()](options/init%28%29.md): Initializes a default set of UDP connection options.
- [preferNoChecksum](options/prefernochecksum.md): A Boolean that configures the connection to not send UDP checksums.

## Relationships

### Inherits From

- [NWProtocolOptions](../nwprotocoloptions.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating UDP Connections

- [definition](definition.md): The system definition of the User Datagram Protocol.
