> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/isssidbroadcast](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/isssidbroadcast)

# isSSIDBroadcast

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A Boolean value indicating whether the access point broadcasts the SSID.

## Declaration

```swift
let isSSIDBroadcast: Bool
```

<a id="discussion"></a>

## Discussion

Networks that don’t broadcast their SSID need directed scanning with the specific SSID information to be discoverable by your accessory.

> **Warning**

> Active Wi-Fi scanning reduces privacy for people using your accessory because probe requests are visible to all nearby Wi-Fi devices. These scans can reveal your accessory’s location, and scanning for specific SSIDs exposes networks your accessory used previously, indicating past locations. Implement MAC address randomization in probe request frames and minimize active scans when possible.

> **See Also**

> - [Privacy features when connecting to wireless networks](https://support.apple.com/guide/security/privacy-features-connecting-wireless-networks-secb9cb3140c/web)
> - [Recommended settings for Wi-Fi routers and access points](https://support.apple.com/en-us/102766)

## See Also

### Getting the network SSID

- [ssid](ssid.md): The Service Set Identifier (SSID) of the network, also known as the network name.
