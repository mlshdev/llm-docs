> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnectionevent](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnectionevent)

# WINetworkSharingProvider.AccessPointConnectionEvent

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An event that indicates an update to the available shared access points.

## Declaration

```swift
struct AccessPointConnectionEvent
```

<a id="Discussion"></a>

## Discussion

An `AccessPointConnectionEvent` provides a snapshot of changes to one or more of the currently connected access points that might require action from your app extension. Each event contains the complete list of access points to which the host is currently connected; your app may share this list with your accessory.

Use the sequence number and update counter to track changes and avoid processing duplicate events. The timestamp provides context but it is recommended you don’t use it for precise change detection due to potential clock variations.

## Topics

### Instance Properties

- [accessPointConnections](accesspointconnectionevent/accesspointconnections.md): A list of access points to which the host connects for networks someone authorized to share to the device.
- [accessPointConnectionsUpdateCounter](accesspointconnectionevent/accesspointconnectionsupdatecounter.md): A counter that increments whenever the access point data changes.
- [description](accesspointconnectionevent/description.md): A string description of the event for debugging purposes.
- [id](accesspointconnectionevent/id-swift.property.md): A stable identifier that uniquely identifies this event.
- [timestamp](accesspointconnectionevent/timestamp.md): The date when this event occurred.

### Type Aliases

- [WINetworkSharingProvider.AccessPointConnectionEvent.ID](accesspointconnectionevent/id-swift.typealias.md): The type of value that uniquely identifies this event.

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

### Getting information about access point connections

- [WINetworkSharingProvider.AccessPointConnection](accesspointconnection.md): A Wi-Fi access point the host is currently connected to, which may be shared with a connected accessory.
- [accessPointConnectionEvents(matching:)](accesspointconnectionevents%28matching_%29.md): Returns an async sequence of access point events containing the currently connected access point(s) and future updates.
