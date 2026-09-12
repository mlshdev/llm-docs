> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/init(with:using:)](https://developer.apple.com/documentation/network/nwconnectiongroup/init(with:using:))

# init(with:using:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a new connection group with a group identifier.

## Declaration

```swift
init(with: any NWGroupDescriptor, using: NWParameters)
```

## See Also

### Establishing Group Connectivity

- [NWMulticastGroup](../nwmulticastgroup.md): A descriptor for a group you use to join an IP multicast group on a local network.
- [NWGroupDescriptor](../nwgroupdescriptor.md): A protocol that defines a group of endpoints with which you can communicate, such as a multicast group.
- [start(queue:)](start%28queue_%29.md): Joins the group, registers to receive messages, and sets the queue on you handle group events.
