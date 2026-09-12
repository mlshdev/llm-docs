> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterpacketprovider](https://developer.apple.com/documentation/networkextension/nefilterpacketprovider)

# NEFilterPacketProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

A filter provider that evaluates network packets and decides whether to block, allow, or delay the packets.

## Declaration

```swift
class NEFilterPacketProvider
```

## Topics

### Filtering packets

- [packetHandler](nefilterpacketprovider/packethandler.md): A Swift closure or an ObjectiveC block that handles each packet received by the filter.
- [NEFilterPacketHandler](nefilterpackethandler.md): A type for Swift closures or ObjectiveC blocks that make filtering decisions about network packets.
- [NEFilterPacketContext](nefilterpacketcontext.md): The context object provided to the filter packet handler.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterPacketProvider.Verdict](nefilterpacketprovider/verdict.md): The verdict returned by a packet handler indicating what the framework should do with a packet.

### Delaying packets

- [delayCurrentPacket(\_:)](nefilterpacketprovider/delaycurrentpacket%28__%29.md): Delay a packet currently processed by a packet handler.
- [allow(\_:)](nefilterpacketprovider/allow%28__%29.md): Allow delivery of a previously-delayed packet.

### Instance Properties

- [handler](nefilterpacketprovider/handler.md)

## Relationships

### Inherits From

- [NEFilterProvider](nefilterprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Data and control providers

- [NEFilterDataProvider](nefilterdataprovider.md): The principal class for a filter data provider extension.
- [NEFilterControlProvider](nefiltercontrolprovider.md): The principal class for a filter control provider extension.
- [NEFilterProvider](nefilterprovider.md): An abstract base class shared by content filters.

# NEFilterPacketProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

A filter provider that evaluates network packets and decides whether to block, allow, or delay the packets.

## Declaration

```objectivec
@interface NEFilterPacketProvider : NEFilterProvider
```

## Topics

### Filtering packets

- [packetHandler](nefilterpacketprovider/packethandler.md): A Swift closure or an ObjectiveC block that handles each packet received by the filter.
- [NEFilterPacketHandler](nefilterpackethandler.md): A type for Swift closures or ObjectiveC blocks that make filtering decisions about network packets.
- [NEFilterPacketContext](nefilterpacketcontext.md): The context object provided to the filter packet handler.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterPacketProviderVerdict](nefilterpacketprovider/verdict.md): The verdict returned by a packet handler indicating what the framework should do with a packet.

### Delaying packets

- [delayCurrentPacket:](nefilterpacketprovider/delaycurrentpacket%28__%29.md): Delay a packet currently processed by a packet handler.
- [allowPacket:](nefilterpacketprovider/allow%28__%29.md): Allow delivery of a previously-delayed packet.

## Relationships

### Inherits From

- [NEFilterProvider](nefilterprovider.md)

## See Also

### Data and control providers

- [NEFilterDataProvider](nefilterdataprovider.md): The principal class for a filter data provider extension.
- [NEFilterControlProvider](nefiltercontrolprovider.md): The principal class for a filter control provider extension.
- [NEFilterProvider](nefilterprovider.md): An abstract base class shared by content filters.
