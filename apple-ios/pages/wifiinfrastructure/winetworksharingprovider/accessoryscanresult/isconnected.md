> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresult/isconnected

# isConnected

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A Boolean value that indicates whether the accessory currently has a connection to this Wi-Fi access point.

## Declaration

```swift
let isConnected: Bool
```

<a id="discussion"></a>

## Discussion

The system sets this flag on multiple scan results when your accessory connects to multiple access points simultaneously or uses multiple Multi-Link Operation (MLO) links on a single access point.
