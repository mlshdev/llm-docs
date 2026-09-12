> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/start(queue:)](https://developer.apple.com/documentation/network/nwconnectiongroup/start(queue:))

# start(queue:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Joins the group, registers to receive messages, and sets the queue on you handle group events.

## Declaration

```swift
final func start(queue: DispatchQueue)
```

## See Also

### Establishing Group Connectivity

- [init(with:using:)](init%28with_using_%29.md): Initializes a new connection group with a group identifier.
- [NWMulticastGroup](../nwmulticastgroup.md): A descriptor for a group you use to join an IP multicast group on a local network.
- [NWGroupDescriptor](../nwgroupdescriptor.md): A protocol that defines a group of endpoints with which you can communicate, such as a multicast group.
