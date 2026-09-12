> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterpackethandler](https://developer.apple.com/documentation/networkextension/nefilterpackethandler)

# NEFilterPacketHandler (Swift)

**Framework:** Network Extension  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

A type for Swift closures or ObjectiveC blocks that make filtering decisions about network packets.

## Declaration

```swift
typealias NEFilterPacketHandler = (NEFilterPacketContext, nw_interface_t, NETrafficDirection, UnsafeRawPointer, Int) -> NEFilterPacketProvider.Verdict
```

## Parameters

- `context`: The current filtering context.
- `interface`: The ingress or egress interface of the packet.
- `direction`: The direction the packet is flowing.
- `packetBytes`: The packet’s bytes.
- `packetLength`: The length of the packet’s bytes.

<a id="return-value"></a>

## Return Value

A verdict on whether the framework should allow, drop, or delay the packet. If the verdict is [NEFilterPacketProvider.Verdict.delay](nefilterpacketprovider/verdict/delay.md), the framework assumes the handler already called [delayCurrentPacket(\_:)](nefilterpacketprovider/delaycurrentpacket%28__%29.md).

## See Also

### Filtering packets

- [packetHandler](nefilterpacketprovider/packethandler.md): A Swift closure or an ObjectiveC block that handles each packet received by the filter.
- [NEFilterPacketContext](nefilterpacketcontext.md): The context object provided to the filter packet handler.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterPacketProvider.Verdict](nefilterpacketprovider/verdict.md): The verdict returned by a packet handler indicating what the framework should do with a packet.

# NEFilterPacketHandler (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

A type for Swift closures or ObjectiveC blocks that make filtering decisions about network packets.

## Declaration

```objectivec
typedef enum NEFilterPacketProviderVerdict (^)(NEFilterPacketContext *, NSObject<OS_nw_interface> *, enum NETrafficDirection, const void *, unsigned long) NEFilterPacketHandler;
```

## Parameters

- `context`: The current filtering context.
- `interface`: The ingress or egress interface of the packet.
- `direction`: The direction the packet is flowing.
- `packetBytes`: The packet’s bytes.
- `packetLength`: The length of the packet’s bytes.

<a id="return-value"></a>

## Return Value

A verdict on whether the framework should allow, drop, or delay the packet. If the verdict is [NEFilterPacketProviderVerdictDelay](nefilterpacketprovider/verdict/delay.md), the framework assumes the handler already called [delayCurrentPacket:](nefilterpacketprovider/delaycurrentpacket%28__%29.md).

## See Also

### Filtering packets

- [packetHandler](nefilterpacketprovider/packethandler.md): A Swift closure or an ObjectiveC block that handles each packet received by the filter.
- [NEFilterPacketContext](nefilterpacketcontext.md): The context object provided to the filter packet handler.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterPacketProviderVerdict](nefilterpacketprovider/verdict.md): The verdict returned by a packet handler indicating what the framework should do with a packet.
