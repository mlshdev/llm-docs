> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelflow/writepackets(_:withprotocols:)](https://developer.apple.com/documentation/networkextension/nepackettunnelflow/writepackets(_:withprotocols:))

# writePackets(\_:withProtocols:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Writes IP packets to the TUN interface.

## Declaration

```swift
func writePackets(_ packets: [Data], withProtocols protocols: [NSNumber]) -> Bool
```

## Parameters

- `packets`: An array of NSData objects containing the IP packets to the written.
- `protocols`: An array of NSNumber objects containing the protocol numbers (e.g. AF_INET or AF_INET6) of the IP packets in `packets` in host byte order.

<a id="Discussion"></a>

## Discussion

The number of NSData objects in `packets` must be exactly equal to the number of NSNumber objects in `protocols`.

## See Also

### Handling IP packets

- [readPacketObjects(completionHandler:)](readpacketobjects%28completionhandler_%29.md): Read multiple IP packets from the TUN interface.
- [writePacketObjects(\_:)](writepacketobjects%28__%29.md): Write multiple IP packets to the TUN interface.
- [readPackets(completionHandler:)](readpackets%28completionhandler_%29.md): Reads IP packets from the TUN interface.

# writePackets:withProtocols: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Writes IP packets to the TUN interface.

## Declaration

```objectivec
- (BOOL) writePackets:(NSArray<NSData *> *) packets withProtocols:(NSArray<NSNumber *> *) protocols;
```

## Parameters

- `packets`: An array of NSData objects containing the IP packets to the written.
- `protocols`: An array of NSNumber objects containing the protocol numbers (e.g. AF_INET or AF_INET6) of the IP packets in `packets` in host byte order.

<a id="Discussion"></a>

## Discussion

The number of NSData objects in `packets` must be exactly equal to the number of NSNumber objects in `protocols`.

## See Also

### Handling IP packets

- [readPacketObjectsWithCompletionHandler:](readpacketobjects%28completionhandler_%29.md): Read multiple IP packets from the TUN interface.
- [writePacketObjects:](writepacketobjects%28__%29.md): Write multiple IP packets to the TUN interface.
- [readPacketsWithCompletionHandler:](readpackets%28completionhandler_%29.md): Reads IP packets from the TUN interface.
