> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolip/options/shouldcalculatereceivetime](https://developer.apple.com/documentation/network/nwprotocolip/options/shouldcalculatereceivetime)

# shouldCalculateReceiveTime

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A Boolean that indicates whether a connection delivers receive timestamps for IP packets.

## Declaration

```swift
var shouldCalculateReceiveTime: Bool { get set }
```

## See Also

### Related Documentation

- [receiveTime](../metadata/receivetime.md): The time at which a packet was received, in nanoseconds, based on `CLOCK_MONOTONIC_RAW`.

### Customizing IP Behavior

- [hopLimit](hoplimit.md): The default hop limit for packets a connection generates.
- [useMinimumMTU](useminimummtu.md): A Boolean indicating that the connection uses the minimum MTU value, which is 1280 bytes for IPv6.
- [disableFragmentation](disablefragmentation.md): A Boolean that indicates whether fragmentation is disabled on outbound packets.
