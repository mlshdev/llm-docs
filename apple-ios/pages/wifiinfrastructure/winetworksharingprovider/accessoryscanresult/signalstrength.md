> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresult/signalstrength

# signalStrength

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The signal strength the accessory measured for the access point.

## Declaration

```swift
let signalStrength: Double
```

<a id="discussion"></a>

## Discussion

The Received Signal Strength Indicator (RSSI) as value between `0.0` (weakest) and `1.0` (strongest).
