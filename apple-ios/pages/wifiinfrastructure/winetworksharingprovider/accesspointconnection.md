> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnection](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnection)

# WINetworkSharingProvider.AccessPointConnection

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Wi-Fi access point the host is currently connected to, which may be shared with a connected accessory.

## Declaration

```swift
struct AccessPointConnection
```

## Topics

### Structures

- [WINetworkSharingProvider.AccessPointConnection.ID](accesspointconnection/id-swift.struct.md): An opaque identifier for a given access point.
- [WINetworkSharingProvider.AccessPointConnection.Link](accesspointconnection/link.md): A data link to a Wi-Fi Access Point.

### Instance Properties

- [description](accesspointconnection/description.md): A string description of the access point, for debugging purposes.
- [id](accesspointconnection/id-swift.property.md): A stable per-access point ID that can be used to uniquely identify this access point. ID will be stable for the lifetime of a given App launch.
- [links](accesspointconnection/links.md): The set of active data links with the Access Point.
- [ssid](accesspointconnection/ssid.md): The access point’s Service Set Identifier (SSID), also known as the network name.

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

- [WINetworkSharingProvider.AccessPointConnectionEvent](accesspointconnectionevent.md): An event that indicates an update to the available shared access points.
- [accessPointConnectionEvents(matching:)](accesspointconnectionevents%28matching_%29.md): Returns an async sequence of access point events containing the currently connected access point(s) and future updates.
