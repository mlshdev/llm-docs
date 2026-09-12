> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraregionprovider/anchorupdates(forid:)](https://developer.apple.com/documentation/arkit/cameraregionprovider/anchorupdates(forid:))

# anchorUpdates(forID:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

An async sequence of anchor updates for a specific anchor.

## Declaration

```swift
final func anchorUpdates(forID id: UUID) -> AnchorUpdateSequence<CameraRegionAnchor>
```

## Parameters

- `id`: ID of the camera region anchor to get updates for.

<a id="return-value"></a>

## Return Value

An async sequence of updates for the given anchor.
