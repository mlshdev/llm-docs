> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnection/links](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnection/links)

# links

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The set of active data links with the Access Point.

## Declaration

```swift
let links: [WINetworkSharingProvider.AccessPointConnection.Link]
```

<a id="discussion"></a>

## Discussion

The primary link will be the first element in the array, if multiple elements are present.
