> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/ttlsconfiguration-swift.struct/innerauthentication-swift.property

# innerAuthentication

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The inner authentication type to use for the Tunneled Transport Layer Security (TTLS) configuration.

## Declaration

```swift
let innerAuthentication: WINetworkSharingProvider.Network.Credentials.EAPCredentials.TTLSConfiguration.InnerAuthentication?
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the configuration doesn’t specify an inner authentication type.
