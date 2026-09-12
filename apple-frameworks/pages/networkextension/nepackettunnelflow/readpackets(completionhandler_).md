> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelflow/readpackets(completionhandler:)](https://developer.apple.com/documentation/networkextension/nepackettunnelflow/readpackets(completionhandler:))

# readPackets(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Reads IP packets from the TUN interface.

## Declaration

```swift
func readPackets(completionHandler: @escaping @Sendable ([Data], [NSNumber]) -> Void)
```

```swift
func readPackets() async -> ([Data], [NSNumber])
```

## Parameters

- `completionHandler`: A Swift closure or an ObjectiveC block that runs when some packets are read from the TUN interface. The packets that were read are passed to this block in the `packets` array. The protocol numbers of the packets that were read are passed to this block in the `protocols` array. Each packet has a protocol number in the corresponding index in the `protocols` array. The protocol numbers are given in host byte order. Valid protocol numbers include `AF_INET` and `AF_INET6`. See `/usr/include/sys/socket.h`.

<a id="discussion"></a>

## Discussion

Each call to this method results in a single execution of the completion handler. The caller should call this method after each `completionHandler` execution in order to continue to receive packets from the TUN interface.

## See Also

### Handling IP packets

- [readPacketObjects(completionHandler:)](readpacketobjects%28completionhandler_%29.md): Read multiple IP packets from the TUN interface.
- [writePacketObjects(\_:)](writepacketobjects%28__%29.md): Write multiple IP packets to the TUN interface.
- [writePackets(\_:withProtocols:)](writepackets%28__withprotocols_%29.md): Writes IP packets to the TUN interface.

# readPacketsWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Reads IP packets from the TUN interface.

## Declaration

```objectivec
- (void) readPacketsWithCompletionHandler:(void (^)(NSArray<NSData *> *packets, NSArray<NSNumber *> *protocols)) completionHandler;
```

## Parameters

- `completionHandler`: A Swift closure or an ObjectiveC block that runs when some packets are read from the TUN interface. The packets that were read are passed to this block in the `packets` array. The protocol numbers of the packets that were read are passed to this block in the `protocols` array. Each packet has a protocol number in the corresponding index in the `protocols` array. The protocol numbers are given in host byte order. Valid protocol numbers include `AF_INET` and `AF_INET6`. See `/usr/include/sys/socket.h`.

<a id="discussion"></a>

## Discussion

Each call to this method results in a single execution of the completion handler. The caller should call this method after each `completionHandler` execution in order to continue to receive packets from the TUN interface.

## See Also

### Handling IP packets

- [readPacketObjectsWithCompletionHandler:](readpacketobjects%28completionhandler_%29.md): Read multiple IP packets from the TUN interface.
- [writePacketObjects:](writepacketobjects%28__%29.md): Write multiple IP packets to the TUN interface.
- [writePackets:withProtocols:](writepackets%28__withprotocols_%29.md): Writes IP packets to the TUN interface.
