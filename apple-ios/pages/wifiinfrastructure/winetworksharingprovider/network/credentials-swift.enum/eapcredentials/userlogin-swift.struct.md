> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/userlogin-swift.struct](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/userlogin-swift.struct)

# WINetworkSharingProvider.Network.Credentials.EAPCredentials.UserLogin

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A person’s login information.

## Declaration

```swift
struct UserLogin
```

<a id="Discussion"></a>

## Discussion

The framework uses the login information for PEAP, EAP-TTLS, and EAP-FAST. It’s optional for EAP-TLS.

## Topics

### Login credentials

- [password](userlogin-swift.struct/password.md): The password a person uses to login.
- [username](userlogin-swift.struct/username.md): Username used to login.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
