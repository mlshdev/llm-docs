> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum)

# WINetworkSharingProvider.Network.Credentials

**Framework:** Wi-Fi Infrastructure  
**Kind:** Enumeration  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Credentials for authenticating to a Wi-Fi network.

## Declaration

```swift
enum Credentials
```

## Topics

### Structures

- [WINetworkSharingProvider.Network.Credentials.EAPCredentials](credentials-swift.enum/eapcredentials.md): A structure containing the credentials for a Wi-Fi network with 802.1x enterprise authentication.

### Enumeration Cases

- [WINetworkSharingProvider.Network.Credentials.enterprise(\_:)](credentials-swift.enum/enterprise%28__%29.md): The credentials to login to a network using 802.1x Enterprise authentication.
- [WINetworkSharingProvider.Network.Credentials.none](credentials-swift.enum/none.md): No credentials are available for the Wi-Fi network.
- [WINetworkSharingProvider.Network.Credentials.password(\_:)](credentials-swift.enum/password%28__%29.md): A password is available for the Wi-Fi network, with the associated value containing the password.

### Instance Properties

- [description](credentials-swift.enum/description.md): A string description of the credentials, for debugging purposes.

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

### Getting the network credentials

- [securityPolicy](securitypolicy-swift.property.md): The set of security types allowed for connecting to this network.
- [WINetworkSharingProvider.Network.SecurityPolicy](securitypolicy-swift.enum.md): The security policies allowed for connecting to a Wi-Fi network.
- [credentials](credentials-swift.property.md): The credentials the accessory needs to connect to this network.
- [captivePortalLogin](captiveportallogin-swift.property.md): The captive portal login information for the network.
- [WINetworkSharingProvider.Network.CaptivePortalLogin](captiveportallogin-swift.struct.md): Captive portal login information for a Wi-Fi network.
