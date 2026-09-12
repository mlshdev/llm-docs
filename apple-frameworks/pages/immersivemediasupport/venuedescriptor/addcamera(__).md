> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/venuedescriptor/addcamera(_:)](https://developer.apple.com/documentation/immersivemediasupport/venuedescriptor/addcamera(_:))

# addCamera(\_:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Adds a new immersive camera definition to the venue descriptor.

## Declaration

```swift
final func addCamera(_ camera: ImmersiveCamera) throws
```

## Parameters

- `camera`: The [ImmersiveCamera](../immersivecamera.md) information to add.

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws an error if the `ImmersiveCamera` information points to invalid data; for example, invalid calibration or mask files.

## See Also

### Configuring cameras

- [cameras](cameras.md): An array of all the immersive cameras contained in the venue descriptor (both original and dynamic).
- [removeCamera(id:)](removecamera%28id_%29.md): Removes an immersive camera definition from the venue descriptor.
- [cameraViewModel(for:)](cameraviewmodel%28for_%29.md): Returns the camera view model for the given immersive camera identifier.
