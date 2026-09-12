> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wimacaddress](https://developer.apple.com/documentation/wifiinfrastructure/wimacaddress)

# WIMACAddress

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Wi-Fi MAC Address.

## Declaration

```swift
struct WIMACAddress
```

## Topics

### Working with MAC Addresses as data

- [init(\_:)](wimacaddress/init%28__%29-6044i.md): Create a MAC Address from the provided data.
- [data](wimacaddress/data.md): The raw data value of the MAC Address.

### Working with MAC Addresses as strings

- [init(\_:)](wimacaddress/init%28__%29-7kdi9.md): Creates a MAC Address from the provided case-insensitive string, of the format `"XX:XX:XX:XX:XX:XX"`.
- [stringRepresentation](wimacaddress/stringrepresentation.md): The MAC Address as an uppercase string, in the format `"XX:XX:XX:XX:XX:XX"`.

### Working with MAC Addresses as octet components

- [init(\_:)](wimacaddress/init%28__%29-9xhxx.md): Create a MAC Address from the provided octet components.
- [components](wimacaddress/components.md): The MAC Address as a list of octets.

### Checking MAC Address properties

- [isZero](wimacaddress/iszero.md): A Boolean value that indicates whether this MAC address is the all-zero MAC Address.
- [isBroadcast](wimacaddress/isbroadcast.md): A Boolean value that indicates whether this is the broadcast MAC Address.
- [isMulticast](wimacaddress/ismulticast.md): A Boolean value that indicates whether this a multicast MAC Address.
- [isLocallyAdministered](wimacaddress/islocallyadministered.md): A Boolean value that indicates whether this a locally administered MAC Address.

### Referencing Common MAC Addresses

- [zero](wimacaddress/zero.md): The all-zero MAC Address.
- [broadcast](wimacaddress/broadcast.md): The broadcast MAC Address, all-ones.

### Getting a description

- [description](wimacaddress/description.md): A string description of the MAC Address, for debugging purposes.

### Structures

- [WIMACAddress.Hash](wimacaddress/hash.md): The hash of a MAC Address, which you may use to identify a device the accessory discovers over the air.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Common data

- [WISSID](wissid.md): The Service Set Identifier (SSID) for a Wi-Fi network, from which applications derive the human-readable network name.
- [WIChannel](wichannel.md): A WiFi Channel.
