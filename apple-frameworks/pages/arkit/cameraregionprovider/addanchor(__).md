> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraregionprovider/addanchor(_:)](https://developer.apple.com/documentation/arkit/cameraregionprovider/addanchor(_:))

# addAnchor(\_:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Add a camera region anchor.

## Declaration

```swift
final func addAnchor(_ anchor: CameraRegionAnchor) async throws
```

## Parameters

- `anchor`: The anchor to add.

<a id="discussion"></a>

## Discussion

> **Throws**

> `CameraRegionProvider.Error`

> **Note**

> This could fail if the maximum anchors for the given camera enhancement has been reached.
