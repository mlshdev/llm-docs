> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelflow/writepacketobjects(_:)](https://developer.apple.com/documentation/networkextension/nepackettunnelflow/writepacketobjects(_:))

# writePacketObjects(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+

Write multiple IP packets to the TUN interface.

## Declaration

```swift
func writePacketObjects(_ packets: [NEPacket]) -> Bool
```

## See Also

### Handling IP packets

- [readPacketObjects(completionHandler:)](readpacketobjects%28completionhandler_%29.md): Read multiple IP packets from the TUN interface.
- [readPackets(completionHandler:)](readpackets%28completionhandler_%29.md): Reads IP packets from the TUN interface.
- [writePackets(\_:withProtocols:)](writepackets%28__withprotocols_%29.md): Writes IP packets to the TUN interface.

# writePacketObjects: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+

Write multiple IP packets to the TUN interface.

## Declaration

```objectivec
- (BOOL) writePacketObjects:(NSArray<NEPacket *> *) packets;
```

## See Also

### Handling IP packets

- [readPacketObjectsWithCompletionHandler:](readpacketobjects%28completionhandler_%29.md): Read multiple IP packets from the TUN interface.
- [readPacketsWithCompletionHandler:](readpackets%28completionhandler_%29.md): Reads IP packets from the TUN interface.
- [writePackets:withProtocols:](writepackets%28__withprotocols_%29.md): Writes IP packets to the TUN interface.
