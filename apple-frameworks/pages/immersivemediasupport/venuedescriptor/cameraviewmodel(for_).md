> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/venuedescriptor/cameraviewmodel(for:)](https://developer.apple.com/documentation/immersivemediasupport/venuedescriptor/cameraviewmodel(for:))

# cameraViewModel(for:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Returns the camera view model for the given immersive camera identifier.

## Declaration

```swift
final func cameraViewModel(for id: String) -> ImmersiveCameraViewModel?
```

## Parameters

- `id`: Identifier string of the immersive camera

<a id="return-value"></a>

## Return Value

ImmersiveCameraViewModel describing the geometries, mask and other information to be used for that camera for rendering.

## See Also

### Configuring cameras

- [cameras](cameras.md): An array of all the immersive cameras contained in the venue descriptor (both original and dynamic).
- [addCamera(\_:)](addcamera%28__%29.md): Adds a new immersive camera definition to the venue descriptor.
- [removeCamera(id:)](removecamera%28id_%29.md): Removes an immersive camera definition from the venue descriptor.
