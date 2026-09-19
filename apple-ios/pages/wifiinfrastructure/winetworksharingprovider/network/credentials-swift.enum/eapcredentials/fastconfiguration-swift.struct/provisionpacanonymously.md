> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/fastconfiguration-swift.struct/provisionpacanonymously

# provisionPACAnonymously

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Boolean value that indicates whether to provision the device anonymously.

## Declaration

```swift
let provisionPACAnonymously: Bool
```

<a id="Discussion"></a>

## Discussion

If `true`, the framework provisions the device anonymously.

> **Note**

> There are known machine-in-the-middle attacks that affect anonymous provisioning.
