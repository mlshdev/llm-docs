> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/networkevent/newshareablenetworkavailable](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/networkevent/newshareablenetworkavailable)

# newShareableNetworkAvailable

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A Boolean value that indicates whether the system detected available networks your app extension may request from people.

## Declaration

```swift
let newShareableNetworkAvailable: Bool
```

<a id="discussion"></a>

## Discussion

Your app extension can use [presentAskToShareUI(scanProvider:)](../presentasktoshareui%28scanprovider_%29.md) to request that people share the network with your accessory when your accessory needs it. This flag clears when people share the available networks to your accessory or when the networks are no longer available.

> **Important**

> When people choose to automatically share networks to your accessory, the system automatically provides the network in the [networks](networks.md) property without setting this flag, because your app extension doesn’t need to take action.

## See Also

### Getting event signals

- [appRequestedSharing](apprequestedsharing.md): A Boolean value that indicates whether the container app requested network sharing.
