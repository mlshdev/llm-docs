> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/networkevent](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/networkevent)

# WINetworkSharingProvider.NetworkEvent

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

An event that occurred, indicating an update to the available shared networks.

## Declaration

```swift
struct NetworkEvent
```

<a id="overview"></a>

## Overview

A `NetworkEvent` provides a snapshot of the current shared network’s state, along with flags indicating system events that might require action from your app extension. Each event contains the complete list of networks currently shared with your accessory.

The event includes Boolean flags that indicate specific conditions:

- New networks available for sharing that people can approve.
- Requests from your container app to present sharing UI.
- Updates to the networks list itself.

Use the sequence number and update counter to track changes and avoid processing duplicate events. The timestamp provides context, but don’t use it for precise change detection due to potential clock variations.

## Topics

### Identifying an event

- [WINetworkSharingProvider.NetworkEvent.ID](networkevent/id-swift.typealias.md): The type of value that uniquely identifies this event.
- [id](networkevent/id-swift.property.md): A stable identifier that uniquely identifies this event.

### Getting network data

- [networks](networkevent/networks.md): The latest network data, containing a list of all networks shared to the device.
- [networksUpdateCounter](networkevent/networksupdatecounter.md): A counter that increments whenever the network data changes.

### Getting event signals

- [newShareableNetworkAvailable](networkevent/newshareablenetworkavailable.md): A Boolean value that indicates whether the system detected available networks your app extension may request from people.
- [appRequestedSharing](networkevent/apprequestedsharing.md): A Boolean value that indicates whether the container app requested network sharing.

### Getting the event time

- [timestamp](networkevent/timestamp.md): The date when this event occurred.

### Getting the event description

- [description](networkevent/description.md): A string description of the event, for debugging purposes.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting network updates

- [networkEvents(matching:)](networkevents%28matching_%29.md): Returns an async sequence of network events, containing current shared networks and future updates.
- [WINetworkSharingProvider.Network](network.md): A Wi-Fi network to share with a connected accessory.
