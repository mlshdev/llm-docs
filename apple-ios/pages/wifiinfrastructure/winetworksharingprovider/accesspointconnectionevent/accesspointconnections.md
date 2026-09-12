> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnectionevent/accesspointconnections](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnectionevent/accesspointconnections)

# accessPointConnections

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A list of access points to which the host connects for networks someone authorized to share to the device.

## Declaration

```swift
let accessPointConnections: [WINetworkSharingProvider.AccessPointConnection]
```

<a id="Discussion"></a>

## Discussion

The Wi-Fi Infrastructure framework filters this list to access points matching the predicate you provide when getting the [accessPointConnectionEvents(matching:)](../accesspointconnectionevents%28matching_%29.md) sequence.
