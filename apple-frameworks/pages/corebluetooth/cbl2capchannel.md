> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbl2capchannel](https://developer.apple.com/documentation/corebluetooth/cbl2capchannel)

# CBL2CAPChannel (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A live L2CAP connection to a remote device.

## Declaration

```swift
class CBL2CAPChannel
```

## Topics

### Accessing Streams

- [inputStream](cbl2capchannel/inputstream.md): The stream used for reading data from the remote peer.
- [outputStream](cbl2capchannel/outputstream.md): The stream used for writing data to the peer.

### Accessing the Peer

- [peer](cbl2capchannel/peer.md): The peer connected to the channel.

### Accessing the Protocol/Service Multiplexer

- [psm](cbl2capchannel/psm.md): The PSM of the channel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Working with L2CAP Channels

- [openL2CAPChannel(\_:)](cbperipheral/openl2capchannel%28__%29.md): Attempts to open an L2CAP channel to the peripheral using the supplied Protocol/Service Multiplexer (PSM).
- [CBL2CAPPSM](cbl2cappsm.md): The type of PSM identifiers.

# CBL2CAPChannel (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A live L2CAP connection to a remote device.

## Declaration

```objectivec
@interface CBL2CAPChannel : NSObject
```

## Topics

### Accessing Streams

- [inputStream](cbl2capchannel/inputstream.md): The stream used for reading data from the remote peer.
- [outputStream](cbl2capchannel/outputstream.md): The stream used for writing data to the peer.

### Accessing the Peer

- [peer](cbl2capchannel/peer.md): The peer connected to the channel.

### Accessing the Protocol/Service Multiplexer

- [PSM](cbl2capchannel/psm.md): The PSM of the channel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Working with L2CAP Channels

- [openL2CAPChannel:](cbperipheral/openl2capchannel%28__%29.md): Attempts to open an L2CAP channel to the peripheral using the supplied Protocol/Service Multiplexer (PSM).
- [CBL2CAPPSM](cbl2cappsm.md): The type of PSM identifiers.
