> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwgroupdescriptor](https://developer.apple.com/documentation/network/nwgroupdescriptor)

# NWGroupDescriptor

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A protocol that defines a group of endpoints with which you can communicate, such as a multicast group.

## Declaration

```swift
protocol NWGroupDescriptor : AnyObject, Sendable
```

## Topics

### Inspecting Groups

- [members](nwgroupdescriptor/members.md): The set of endpoints that define the connection group.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [NWMulticastGroup](nwmulticastgroup.md)
- [NWMultiplexGroup](nwmultiplexgroup.md)

## See Also

### Establishing Group Connectivity

- [init(with:using:)](nwconnectiongroup/init%28with_using_%29.md): Initializes a new connection group with a group identifier.
- [NWMulticastGroup](nwmulticastgroup.md): A descriptor for a group you use to join an IP multicast group on a local network.
- [start(queue:)](nwconnectiongroup/start%28queue_%29.md): Joins the group, registers to receive messages, and sets the queue on you handle group events.
