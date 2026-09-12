> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceroutingmanager/discoveryfailed(_:)](https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/discoveryfailed(_:))

# discoveryFailed(\_:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Reports a discovery failure to the system, indicating that the extension was unable to search for devices.

## Declaration

```swift
@MainActor final func discoveryFailed(_ error: MediaDeviceError)
```

## Parameters

- `error`: The error describing why discovery failed.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

Call this function when discovery is prevented in an unexpected way. Do not call this function when devices are simply not discovered.
