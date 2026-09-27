> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/tlsconfiguration-swift.property

# tlsConfiguration

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The configuration to use for Transport Layer Security (TLS).

## Declaration

```swift
let tlsConfiguration: WINetworkSharingProvider.Network.Credentials.EAPCredentials.TLSConfiguration?
```

<a id="Discussion"></a>

## Discussion

Set this value to `nil` if TLS this network doesn’t use TLS.
