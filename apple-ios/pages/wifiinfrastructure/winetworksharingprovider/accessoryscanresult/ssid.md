> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresult/ssid](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresult/ssid)

# ssid

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The SSID of the network.

## Declaration

```swift
let ssid: WISSID?
```

<a id="discussion"></a>

## Discussion

Contains the network identifier when available, or `nil` when the SSID is unknown or not broadcast by the access point.
