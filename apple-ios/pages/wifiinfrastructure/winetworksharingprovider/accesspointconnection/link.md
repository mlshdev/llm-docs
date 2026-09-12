> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnection/link](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnection/link)

# WINetworkSharingProvider.AccessPointConnection.Link

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A data link to a Wi-Fi Access Point.

## Declaration

```swift
struct Link
```

<a id="overview"></a>

## Overview

WiFi 7 (and later) clients and Access Points may have multiple concurrent data links between them.

## Topics

### Structures

- [WINetworkSharingProvider.AccessPointConnection.Link.ID](link/id-swift.struct.md): An opaque identifier for a given link.

### Instance Properties

- [bssidHash](link/bssidhash.md): A hash of the Access Point’s BSSID, which can be used to find this access point link in the environment.
- [channel](link/channel.md): A channel on which the Access Point is operating.
- [description](link/description.md): A string description of the link, for debugging purposes.
- [id](link/id-swift.property.md): A stable per-link ID that can be used to uniquely identify this link. ID will be stable for the lifetime of a given App launch.

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
