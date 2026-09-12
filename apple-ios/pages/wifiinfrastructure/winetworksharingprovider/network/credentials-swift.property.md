> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.property](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/credentials-swift.property)

# credentials

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The credentials the accessory needs to connect to this network.

## Declaration

```swift
let credentials: WINetworkSharingProvider.Network.Credentials
```

## See Also

### Getting the network credentials

- [securityPolicy](securitypolicy-swift.property.md): The set of security types allowed for connecting to this network.
- [WINetworkSharingProvider.Network.SecurityPolicy](securitypolicy-swift.enum.md): The security policies allowed for connecting to a Wi-Fi network.
- [WINetworkSharingProvider.Network.Credentials](credentials-swift.enum.md): Credentials for authenticating to a Wi-Fi network.
- [captivePortalLogin](captiveportallogin-swift.property.md): The captive portal login information for the network.
- [WINetworkSharingProvider.Network.CaptivePortalLogin](captiveportallogin-swift.struct.md): Captive portal login information for a Wi-Fi network.
