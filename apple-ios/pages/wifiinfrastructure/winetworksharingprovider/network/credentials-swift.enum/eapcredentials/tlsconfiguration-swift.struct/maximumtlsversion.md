> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/tlsconfiguration-swift.struct/maximumtlsversion

# maximumTLSVersion

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The newest version of Transport Layer Security (TLS) that this configuration accepts to authenticate this network.

## Declaration

```swift
let maximumTLSVersion: WINetworkSharingProvider.Network.Credentials.EAPCredentials.TLSConfiguration.TLSVersion?
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the configuration doesn’t specify a maximum TLS version.
