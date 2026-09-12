> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials)

# WINetworkSharingProvider.Network.Credentials.EAPCredentials

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A structure containing the credentials for a Wi-Fi network with 802.1x enterprise authentication.

## Declaration

```swift
struct EAPCredentials
```

## Topics

### Structures

- [WINetworkSharingProvider.Network.Credentials.EAPCredentials.ClientIdentity](eapcredentials/clientidentity-swift.struct.md): A structure that represents the client’s identity.
- [WINetworkSharingProvider.Network.Credentials.EAPCredentials.FASTConfiguration](eapcredentials/fastconfiguration-swift.struct.md): Configuration for EAP-FAST.
- [WINetworkSharingProvider.Network.Credentials.EAPCredentials.TLSConfiguration](eapcredentials/tlsconfiguration-swift.struct.md): Configuration for the TLS protocol.
- [WINetworkSharingProvider.Network.Credentials.EAPCredentials.TTLSConfiguration](eapcredentials/ttlsconfiguration-swift.struct.md): The configuration for authentication that uses EAP-TTLS.
- [WINetworkSharingProvider.Network.Credentials.EAPCredentials.TrustedServers](eapcredentials/trustedservers-swift.struct.md): A structure that describes trusted authentication servers.
- [WINetworkSharingProvider.Network.Credentials.EAPCredentials.UserLogin](eapcredentials/userlogin-swift.struct.md): A person’s login information.

### Instance Properties

- [acceptedEAPTypes](eapcredentials/acceptedeaptypes.md): The EAP types allowed for this network.
- [clientIdentity](eapcredentials/clientidentity-swift.property.md): The information used to authenticate the client’s identity.
- [fastConfiguration](eapcredentials/fastconfiguration-swift.property.md): The configuration to use for EAP-FAST.
- [outerIdentity](eapcredentials/outeridentity.md): A name that hides the user’s actual name.
- [tlsConfiguration](eapcredentials/tlsconfiguration-swift.property.md): The configuration to use for Transport Layer Security (TLS).
- [trustedServers](eapcredentials/trustedservers-swift.property.md): The information used to authenticate the server.
- [ttlsConfiguration](eapcredentials/ttlsconfiguration-swift.property.md): The configuration to use for Tunneled Transport Layer Security (TTLS).
- [userLogin](eapcredentials/userlogin-swift.property.md): The information used authenticate the user and log them in.

### Enumerations

- [WINetworkSharingProvider.Network.Credentials.EAPCredentials.EAPType](eapcredentials/eaptype.md): The EAP types allowed for this network

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
