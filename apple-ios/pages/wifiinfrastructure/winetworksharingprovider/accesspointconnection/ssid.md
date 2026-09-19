> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accesspointconnection/ssid

# ssid

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The access point’s Service Set Identifier (SSID), also known as the network name.

## Declaration

```swift
let ssid: WISSID
```

<a id="discussion"></a>

## Discussion

This value is unique among networks known to the host, but is not unique across all Wi-Fi networks that may be present in the environment.
