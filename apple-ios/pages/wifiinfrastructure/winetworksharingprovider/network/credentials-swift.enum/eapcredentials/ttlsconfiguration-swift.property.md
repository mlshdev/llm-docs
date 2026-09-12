> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/ttlsconfiguration-swift.property](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/ttlsconfiguration-swift.property)

# ttlsConfiguration

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The configuration to use for Tunneled Transport Layer Security (TTLS).

## Declaration

```swift
let ttlsConfiguration: WINetworkSharingProvider.Network.Credentials.EAPCredentials.TTLSConfiguration?
```

<a id="Discussion"></a>

## Discussion

Set this property to `nil` if this network doesn’t use TTLS.
