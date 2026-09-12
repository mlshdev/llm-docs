> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresult/init(ssid:signalstrength:isconnected:)](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresult/init(ssid:signalstrength:isconnected:))

# init(ssid:signalStrength:isConnected:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Creates an accessory scan result.

## Declaration

```swift
init(ssid: WISSID?, signalStrength: Double, isConnected: Bool)
```

## Parameters

- `ssid`: The SSID of the discovered network.
- `signalStrength`: The signal strength value, between `0.0` and `1.0`.
- `isConnected`: A Boolean that indicates whether the accessory is connected to this network.
