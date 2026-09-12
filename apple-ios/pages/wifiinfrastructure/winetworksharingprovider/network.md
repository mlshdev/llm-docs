> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network)

# WINetworkSharingProvider.Network

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A Wi-Fi network to share with a connected accessory.

## Declaration

```swift
struct Network
```

## Topics

### Identifying a network

- [id](network/id-swift.property.md): A stable identifier that uniquely identifies this network.
- [WINetworkSharingProvider.Network.ID](network/id-swift.struct.md): An opaque identifier for a given network.

### Getting the network SSID

- [ssid](network/ssid.md): The Service Set Identifier (SSID) of the network, also known as the network name.
- [isSSIDBroadcast](network/isssidbroadcast.md): A Boolean value indicating whether the access point broadcasts the SSID.

### Getting the network credentials

- [securityPolicy](network/securitypolicy-swift.property.md): The set of security types allowed for connecting to this network.
- [WINetworkSharingProvider.Network.SecurityPolicy](network/securitypolicy-swift.enum.md): The security policies allowed for connecting to a Wi-Fi network.
- [credentials](network/credentials-swift.property.md): The credentials the accessory needs to connect to this network.
- [WINetworkSharingProvider.Network.Credentials](network/credentials-swift.enum.md): Credentials for authenticating to a Wi-Fi network.
- [captivePortalLogin](network/captiveportallogin-swift.property.md): The captive portal login information for the network.
- [WINetworkSharingProvider.Network.CaptivePortalLogin](network/captiveportallogin-swift.struct.md): Captive portal login information for a Wi-Fi network.

### Getting the date

- [lastModified](network/lastmodified.md): The date when this network was last modified.
- [firstShared](network/firstshared.md): The date when this network was first shared to the accessory.

### Getting a network description

- [description](network/description.md): A string description of the network, for debugging purposes.

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
- [WINetworkSharingProvider.NetworkEvent](networkevent.md): An event that occurred, indicating an update to the available shared networks.
