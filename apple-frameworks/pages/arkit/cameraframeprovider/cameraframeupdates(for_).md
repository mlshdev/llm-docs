> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraframeprovider/cameraframeupdates(for:)](https://developer.apple.com/documentation/arkit/cameraframeprovider/cameraframeupdates(for:))

# cameraFrameUpdates(for:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Gets a sequence of camera frame updates for a given video format.

## Declaration

```swift
final func cameraFrameUpdates(for cameraVideoFormat: CameraVideoFormat) -> CameraFrameProvider.CameraFrameUpdates?
```

## Parameters

- `cameraVideoFormat`: The camera video format to get updates for.

<a id="return-value"></a>

## Return Value

The sequence of camera frame updates. Returns `nil` if the provider wasn’t initialized with this format.

## See Also

### Getting camera frame updates

- [CameraFrameProvider.CameraFrameUpdates](cameraframeupdates.md): A sequence of camera frames.
