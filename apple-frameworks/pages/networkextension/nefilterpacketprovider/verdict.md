> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterpacketprovider/verdict](https://developer.apple.com/documentation/networkextension/nefilterpacketprovider/verdict)

# NEFilterPacketProvider.Verdict (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The verdict returned by a packet handler indicating what the framework should do with a packet.

## Declaration

```swift
enum Verdict
```

## Topics

### Verdicts

- [NEFilterPacketProvider.Verdict.allow](verdict/allow.md): A verdict to allow a packet.
- [NEFilterPacketProvider.Verdict.drop](verdict/drop.md): A verdict to drop a packet.
- [NEFilterPacketProvider.Verdict.delay](verdict/delay.md): A verdict to delay a packet until a future verdict.

### Initializers

- [init(rawValue:)](verdict/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Filtering packets

- [packetHandler](packethandler.md): A Swift closure or an ObjectiveC block that handles each packet received by the filter.
- [NEFilterPacketHandler](../nefilterpackethandler.md): A type for Swift closures or ObjectiveC blocks that make filtering decisions about network packets.
- [NEFilterPacketContext](../nefilterpacketcontext.md): The context object provided to the filter packet handler.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.

# NEFilterPacketProviderVerdict (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The verdict returned by a packet handler indicating what the framework should do with a packet.

## Declaration

```objectivec
enum NEFilterPacketProviderVerdict : NSInteger;
```

## Topics

### Verdicts

- [NEFilterPacketProviderVerdictAllow](verdict/allow.md): A verdict to allow a packet.
- [NEFilterPacketProviderVerdictDrop](verdict/drop.md): A verdict to drop a packet.
- [NEFilterPacketProviderVerdictDelay](verdict/delay.md): A verdict to delay a packet until a future verdict.

## See Also

### Filtering packets

- [packetHandler](packethandler.md): A Swift closure or an ObjectiveC block that handles each packet received by the filter.
- [NEFilterPacketHandler](../nefilterpackethandler.md): A type for Swift closures or ObjectiveC blocks that make filtering decisions about network packets.
- [NEFilterPacketContext](../nefilterpacketcontext.md): The context object provided to the filter packet handler.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
