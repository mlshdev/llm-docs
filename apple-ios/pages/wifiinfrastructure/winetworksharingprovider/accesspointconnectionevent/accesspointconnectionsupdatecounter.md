> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnectionevent/accesspointconnectionsupdatecounter

# accessPointConnectionsUpdateCounter

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A counter that increments whenever the access point data changes.

## Declaration

```swift
let accessPointConnectionsUpdateCounter: UInt64
```

<a id="discussion"></a>

## Discussion

The counter increments by `1`.
