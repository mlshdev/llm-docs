> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/captiveportallogin-swift.property](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/captiveportallogin-swift.property)

# captivePortalLogin

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The captive portal login information for the network.

## Declaration

```swift
let captivePortalLogin: WINetworkSharingProvider.Network.CaptivePortalLogin?
```

<a id="discussion"></a>

## Discussion

Contains data when the person previously completed captive portal authentication, or `nil` when this network doesn’t require captive portal login.

## See Also

### Getting the network credentials

- [securityPolicy](securitypolicy-swift.property.md): The set of security types allowed for connecting to this network.
- [WINetworkSharingProvider.Network.SecurityPolicy](securitypolicy-swift.enum.md): The security policies allowed for connecting to a Wi-Fi network.
- [credentials](credentials-swift.property.md): The credentials the accessory needs to connect to this network.
- [WINetworkSharingProvider.Network.Credentials](credentials-swift.enum.md): Credentials for authenticating to a Wi-Fi network.
- [WINetworkSharingProvider.Network.CaptivePortalLogin](captiveportallogin-swift.struct.md): Captive portal login information for a Wi-Fi network.
