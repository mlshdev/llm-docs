> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/networkendpoints

# networkEndpoints

**Framework:** Media Device  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The network endpoints for this device group.

## Declaration

```swift
let networkEndpoints: [NWEndpoint]
```

<a id="discussion"></a>

## Discussion

Typically obtained from `NWBrowser` during network service discovery.
