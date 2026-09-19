> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/tlsconfiguration-swift.struct/iscertificaterequired

# isCertificateRequired

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Boolean value that indicates whether the configuration allows two-factor authentication for specific Transport Layer Security (TLS) configurations.

## Declaration

```swift
let isCertificateRequired: Bool
```

<a id="Discussion"></a>

## Discussion

If `true`, the configuration allows two-factor authentication for EAP-TTLS, PEAP, or EAP-FAST. If `false`, the configuration allows zero-factor authentication for EAP-TLS.
