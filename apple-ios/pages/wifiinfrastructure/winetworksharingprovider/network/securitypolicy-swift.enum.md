> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/securitypolicy-swift.enum](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/securitypolicy-swift.enum)

# WINetworkSharingProvider.Network.SecurityPolicy

**Framework:** Wi-Fi Infrastructure  
**Kind:** Enumeration  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The security policies allowed for connecting to a Wi-Fi network.

## Declaration

```swift
enum SecurityPolicy
```

## Topics

### Enumeration Cases

- [WINetworkSharingProvider.Network.SecurityPolicy.open](securitypolicy-swift.enum/open.md): Allows open network security, with no authentication or encryption.
- [WINetworkSharingProvider.Network.SecurityPolicy.owe](securitypolicy-swift.enum/owe.md): Allows Opportunistic Wireless Encryption (OWE), providing encryption without authentication.
- [WINetworkSharingProvider.Network.SecurityPolicy.wep](securitypolicy-swift.enum/wep.md): Allows WEP encryption.
- [WINetworkSharingProvider.Network.SecurityPolicy.wpa](securitypolicy-swift.enum/wpa.md): Allows WPA1 authentication.
- [WINetworkSharingProvider.Network.SecurityPolicy.wpa2](securitypolicy-swift.enum/wpa2.md): Allows WPA2 authentication.
- [WINetworkSharingProvider.Network.SecurityPolicy.wpa3](securitypolicy-swift.enum/wpa3.md): Allows WPA3 authentication.

### Instance Properties

- [description](securitypolicy-swift.enum/description.md): A string description of the security policy, for debugging purposes.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the network credentials

- [securityPolicy](securitypolicy-swift.property.md): The set of security types allowed for connecting to this network.
- [credentials](credentials-swift.property.md): The credentials the accessory needs to connect to this network.
- [WINetworkSharingProvider.Network.Credentials](credentials-swift.enum.md): Credentials for authenticating to a Wi-Fi network.
- [captivePortalLogin](captiveportallogin-swift.property.md): The captive portal login information for the network.
- [WINetworkSharingProvider.Network.CaptivePortalLogin](captiveportallogin-swift.struct.md): Captive portal login information for a Wi-Fi network.
