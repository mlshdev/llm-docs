> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/mediadeviceextension/stopdevicediscovery()

# stopDeviceDiscovery()

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user dismisses the UI element that is showing devices.

## Declaration

```swift
@MainActor func stopDeviceDiscovery()
```

<a id="discussion"></a>

## Discussion

Stop any active network discovery operations started in [startDeviceDiscovery()](startdevicediscovery%28%29.md).
