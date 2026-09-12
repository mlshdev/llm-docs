> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/tlsconfiguration-swift.struct](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/tlsconfiguration-swift.struct)

# WINetworkSharingProvider.Network.Credentials.EAPCredentials.TLSConfiguration

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Configuration for the TLS protocol.

## Declaration

```swift
struct TLSConfiguration
```

## Topics

### Instance Properties

- [isCertificateRequired](tlsconfiguration-swift.struct/iscertificaterequired.md): A Boolean value that indicates whether the configuration allows two-factor authentication for specific Transport Layer Security (TLS) configurations.
- [maximumTLSVersion](tlsconfiguration-swift.struct/maximumtlsversion.md): The newest version of Transport Layer Security (TLS) that this configuration accepts to authenticate this network.
- [minimumTLSVersion](tlsconfiguration-swift.struct/minimumtlsversion.md): The oldest version of Transport Layer Security (TLS) that this configuration accepts to authenticate this network.

### Enumerations

- [WINetworkSharingProvider.Network.Credentials.EAPCredentials.TLSConfiguration.TLSVersion](tlsconfiguration-swift.struct/tlsversion.md): Values that define the version of the Transport Layer Security (TLS) protocol to use with EAP authentication.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
