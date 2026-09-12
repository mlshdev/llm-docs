> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/networkevent/apprequestedsharing](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/networkevent/apprequestedsharing)

# appRequestedSharing

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A Boolean value that indicates whether the container app requested network sharing.

## Declaration

```swift
let appRequestedSharing: Bool
```

<a id="discussion"></a>

## Discussion

The system sets this flag when your container app calls [askToShare()](../../winetworksharingcontroller/asktoshare%28%29.md).

## See Also

### Getting event signals

- [newShareableNetworkAvailable](newshareablenetworkavailable.md): A Boolean value that indicates whether the system detected available networks your app extension may request from people.
