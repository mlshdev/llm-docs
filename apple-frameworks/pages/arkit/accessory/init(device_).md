> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/accessory/init(device:)](https://developer.apple.com/documentation/arkit/accessory/init(device:))

# init(device:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Initializes an accessory from a GCDevice.

## Declaration

```swift
init(device: any GCDevice) async throws
```

## Parameters

- `device`: GCDevice to initialize accessory from.

<a id="discussion"></a>

## Discussion

> **Throws**

> `AccessoryTrackingProvider.Error`
