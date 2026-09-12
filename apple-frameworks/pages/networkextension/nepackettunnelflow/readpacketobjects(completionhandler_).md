> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelflow/readpacketobjects(completionhandler:)](https://developer.apple.com/documentation/networkextension/nepackettunnelflow/readpacketobjects(completionhandler:))

# readPacketObjects(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+

Read multiple IP packets from the TUN interface.

## Declaration

```swift
func readPacketObjects(completionHandler: @escaping @Sendable ([NEPacket]) -> Void)
```

```swift
func readPacketObjects() async -> [NEPacket]
```

## See Also

### Handling IP packets

- [writePacketObjects(\_:)](writepacketobjects%28__%29.md): Write multiple IP packets to the TUN interface.
- [readPackets(completionHandler:)](readpackets%28completionhandler_%29.md): Reads IP packets from the TUN interface.
- [writePackets(\_:withProtocols:)](writepackets%28__withprotocols_%29.md): Writes IP packets to the TUN interface.

# readPacketObjectsWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+

Read multiple IP packets from the TUN interface.

## Declaration

```objectivec
- (void) readPacketObjectsWithCompletionHandler:(void (^)(NSArray<NEPacket *> *packets)) completionHandler;
```

## See Also

### Handling IP packets

- [writePacketObjects:](writepacketobjects%28__%29.md): Write multiple IP packets to the TUN interface.
- [readPacketsWithCompletionHandler:](readpackets%28completionhandler_%29.md): Reads IP packets from the TUN interface.
- [writePackets:withProtocols:](writepackets%28__withprotocols_%29.md): Writes IP packets to the TUN interface.
