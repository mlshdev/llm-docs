> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/userlogin-swift.property

# userLogin

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The information used authenticate the user and log them in.

## Declaration

```swift
let userLogin: WINetworkSharingProvider.Network.Credentials.EAPCredentials.UserLogin?
```

<a id="discussion"></a>

## Discussion

Used for PEAP, EAP-TTLS, and EAP-FAST. Optional for EAP-TLS.
