> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/cameraregionprovider/removeanchor(forid:)

# removeAnchor(forID:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Remove an anchor with a given ID from camera region.

## Declaration

```swift
final func removeAnchor(forID id: UUID) async throws
```

## Parameters

- `id`: ID of the camera region anchor to remove.

<a id="discussion"></a>

## Discussion

> **Throws**

> `CameraRegionProvider.Error`
