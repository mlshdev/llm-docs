> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterpacketcontext](https://developer.apple.com/documentation/networkextension/nefilterpacketcontext)

# NEFilterPacketContext (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

The context object provided to the filter packet handler.

## Declaration

```swift
class NEFilterPacketContext
```

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

### Filtering packets

- [packetHandler](nefilterpacketprovider/packethandler.md): A Swift closure or an ObjectiveC block that handles each packet received by the filter.
- [NEFilterPacketHandler](nefilterpackethandler.md): A type for Swift closures or ObjectiveC blocks that make filtering decisions about network packets.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterPacketProvider.Verdict](nefilterpacketprovider/verdict.md): The verdict returned by a packet handler indicating what the framework should do with a packet.

# NEFilterPacketContext (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

The context object provided to the filter packet handler.

## Declaration

```objectivec
@interface NEFilterPacketContext : NSObject
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Filtering packets

- [packetHandler](nefilterpacketprovider/packethandler.md): A Swift closure or an ObjectiveC block that handles each packet received by the filter.
- [NEFilterPacketHandler](nefilterpackethandler.md): A type for Swift closures or ObjectiveC blocks that make filtering decisions about network packets.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterPacketProviderVerdict](nefilterpacketprovider/verdict.md): The verdict returned by a packet handler indicating what the framework should do with a packet.
