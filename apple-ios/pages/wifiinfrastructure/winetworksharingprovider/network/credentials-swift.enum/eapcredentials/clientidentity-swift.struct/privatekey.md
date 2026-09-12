> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/clientidentity-swift.struct/privatekey](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.enum/eapcredentials/clientidentity-swift.struct/privatekey)

# privateKey

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The private key of the client.

## Declaration

```swift
let privateKey: Data
```

<a id="discussion"></a>

## Discussion

Data will be in PKCS #1 format for an RSA key or ANSI X9.63 format for an EC key.
