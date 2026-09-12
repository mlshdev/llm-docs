> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wichannel](https://developer.apple.com/documentation/wifiinfrastructure/wichannel)

# WIChannel

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A WiFi Channel.

## Declaration

```swift
struct WIChannel
```

## Topics

### Instance Properties

- [band](wichannel/band-swift.property.md): The Wi-Fi band of a given channel.
- [description](wichannel/description.md): A string description of the channel, for debugging.
- [number](wichannel/number.md): The channel number.

### Enumerations

- [WIChannel.Band](wichannel/band-swift.enum.md): The Wi-Fi band of a given channel.

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
- [WIMACAddress](wimacaddress.md): A Wi-Fi MAC Address.
