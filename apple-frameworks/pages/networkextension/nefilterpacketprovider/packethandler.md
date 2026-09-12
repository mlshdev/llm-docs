> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterpacketprovider/packethandler](https://developer.apple.com/documentation/networkextension/nefilterpacketprovider/packethandler)

# packetHandler (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Swift closure or an ObjectiveC block that handles each packet received by the filter.

## Declaration

```swift
var packetHandler: NEFilterPacketHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to a handler that returns a [NEFilterPacketProvider.Verdict](verdict.md) for each packet it receives.

Since there may be multiple filtering sources presenting frames to the provider, multiple simultaneous threads may execute this packet handler. Therefore, the packet handler must be able to handle execution in a multi-threaded environment.

## See Also

### Filtering packets

- [NEFilterPacketHandler](../nefilterpackethandler.md): A type for Swift closures or ObjectiveC blocks that make filtering decisions about network packets.
- [NEFilterPacketContext](../nefilterpacketcontext.md): The context object provided to the filter packet handler.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterPacketProvider.Verdict](verdict.md): The verdict returned by a packet handler indicating what the framework should do with a packet.

# packetHandler (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Swift closure or an ObjectiveC block that handles each packet received by the filter.

## Declaration

```objectivec
@property (strong, nullable) NEFilterPacketHandler packetHandler;
```

<a id="Discussion"></a>

## Discussion

Set this property to a handler that returns a [NEFilterPacketProviderVerdict](verdict.md) for each packet it receives.

Since there may be multiple filtering sources presenting frames to the provider, multiple simultaneous threads may execute this packet handler. Therefore, the packet handler must be able to handle execution in a multi-threaded environment.

## See Also

### Filtering packets

- [NEFilterPacketHandler](../nefilterpackethandler.md): A type for Swift closures or ObjectiveC blocks that make filtering decisions about network packets.
- [NEFilterPacketContext](../nefilterpacketcontext.md): The context object provided to the filter packet handler.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterPacketProviderVerdict](verdict.md): The verdict returned by a packet handler indicating what the framework should do with a packet.
