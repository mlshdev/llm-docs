> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraframe/sample(for:)](https://developer.apple.com/documentation/arkit/cameraframe/sample(for:))

# sample(for:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Returns the camera frame sample for a given camera position.

## Declaration

```swift
func sample(for position: CameraFrameProvider.CameraPosition) -> CameraFrame.Sample?
```

## Parameters

- `position`: The camera position to get the sample for.

<a id="return-value"></a>

## Return Value

The camera frame sample, or `nil` if no sample is available for the given camera position.

## See Also

### Getting camera frame information

- [primarySample](primarysample.md): Gets the primary frame sample for a camera frame.
- [CameraFrame.Sample](sample.md): Information that describes a sample from a camera frame.
- [description](description.md): A textual representation of this camera frame.
