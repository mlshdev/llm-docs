> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/fastconfiguration-swift.property

# fastConfiguration

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The configuration to use for EAP-FAST.

## Declaration

```swift
let fastConfiguration: WINetworkSharingProvider.Network.Credentials.EAPCredentials.FASTConfiguration?
```

<a id="Discussion"></a>

## Discussion

Set to this property to `nil` if this network doesn’t use EAP-FAST.
