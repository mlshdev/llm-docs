> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwmulticastgroup](https://developer.apple.com/documentation/network/nwmulticastgroup)

# NWMulticastGroup

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A descriptor for a group you use to join an IP multicast group on a local network.

## Declaration

```swift
class NWMulticastGroup
```

<a id="overview"></a>

## Overview

> **Important**

>  In order to use multicast on iOS, your app will need to have the `com.apple.developer.networking.multicast` entitlement.

## Topics

### Essentials

- [com.apple.developer.networking.multicast](../bundleresources/entitlements/com.apple.developer.networking.multicast.md): A Boolean value that indicates whether an app can send or receive IP multicast traffic.

### Defining Multicast Groups

- [init(for:from:disableUnicast:)](nwmulticastgroup/init%28for_from_disableunicast_%29.md): Initializes a multicast group with a set of multicast addresses.

### Inspecting Multicast Groups

- [members](nwmulticastgroup/members.md): The set of IP multicast group addresses that the connection group joins.
- [sourceFilter](nwmulticastgroup/sourcefilter.md): An optional address endpoint you provide to filter received multicast packets.
- [isUnicastDisabled](nwmulticastgroup/isunicastdisabled.md): A Boolean that specifies whether the connection group rejects unicast traffic.

## Relationships

### Conforms To

- [NWGroupDescriptor](nwgroupdescriptor.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Establishing Group Connectivity

- [init(with:using:)](nwconnectiongroup/init%28with_using_%29.md): Initializes a new connection group with a group identifier.
- [NWGroupDescriptor](nwgroupdescriptor.md): A protocol that defines a group of endpoints with which you can communicate, such as a multicast group.
- [start(queue:)](nwconnectiongroup/start%28queue_%29.md): Joins the group, registers to receive messages, and sets the queue on you handle group events.
