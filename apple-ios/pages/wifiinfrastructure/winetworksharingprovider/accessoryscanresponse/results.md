> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresponse/results

# results

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

An array of scan results containing access points the accessory has discovered.

## Declaration

```swift
let results: [WINetworkSharingProvider.AccessoryScanResult]
```

<a id="discussion"></a>

## Discussion

Provides an empty array if your accessory finds no networks during scanning.
