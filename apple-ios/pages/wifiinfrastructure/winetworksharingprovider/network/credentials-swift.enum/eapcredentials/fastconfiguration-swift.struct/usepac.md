> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/fastconfiguration-swift.struct/usepac](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/fastconfiguration-swift.struct/usepac)

# usePAC

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Boolean value that indicates whether the device uses an existing Protected Access Credential (PAC).

## Declaration

```swift
let usePAC: Bool
```

<a id="Discussion"></a>

## Discussion

If `true`, the device uses an existing PAC if it’s present. Otherwise, the server must present its identity using a certificate.
