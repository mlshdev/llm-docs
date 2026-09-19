> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/cameraregionprovider/addanchor(_:)

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
