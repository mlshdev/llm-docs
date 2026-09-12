> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterpacketprovider/delaycurrentpacket(_:)](https://developer.apple.com/documentation/networkextension/nefilterpacketprovider/delaycurrentpacket(_:))

# delayCurrentPacket(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Delay a packet currently processed by a packet handler.

## Declaration

```swift
func delayCurrentPacket(_ context: NEFilterPacketContext) -> NEPacket
```

## Parameters

- `context`: A context for the packet handler.

<a id="Discussion"></a>

## Discussion

This function is only valid within the [packetHandler](packethandler.md) Swift closure or ObjectiveC block, which must return [NEFilterPacketProvider.Verdict.delay](verdict/delay.md) after delaying the packet. The framework prevents further delivery of the packet through the network stack until it’s allowed or dropped. Allow the packet by calling [allow(\_:)](allow%28__%29.md), or drop it by releasing it.

## See Also

### Delaying packets

- [allow(\_:)](allow%28__%29.md): Allow delivery of a previously-delayed packet.

# delayCurrentPacket: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Delay a packet currently processed by a packet handler.

## Declaration

```objectivec
- (NEPacket *) delayCurrentPacket:(NEFilterPacketContext *) context;
```

## Parameters

- `context`: A context for the packet handler.

<a id="Discussion"></a>

## Discussion

This function is only valid within the [packetHandler](packethandler.md) Swift closure or ObjectiveC block, which must return [NEFilterPacketProviderVerdictDelay](verdict/delay.md) after delaying the packet. The framework prevents further delivery of the packet through the network stack until it’s allowed or dropped. Allow the packet by calling [allowPacket:](allow%28__%29.md), or drop it by releasing it.

## See Also

### Delaying packets

- [allowPacket:](allow%28__%29.md): Allow delivery of a previously-delayed packet.
