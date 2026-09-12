> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/venuedescriptor/cameras](https://developer.apple.com/documentation/immersivemediasupport/venuedescriptor/cameras)

# cameras

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

An array of all the immersive cameras contained in the venue descriptor (both original and dynamic).

## Declaration

```swift
final var cameras: [ImmersiveCamera] { get }
```

## See Also

### Configuring cameras

- [addCamera(\_:)](addcamera%28__%29.md): Adds a new immersive camera definition to the venue descriptor.
- [removeCamera(id:)](removecamera%28id_%29.md): Removes an immersive camera definition from the venue descriptor.
- [cameraViewModel(for:)](cameraviewmodel%28for_%29.md): Returns the camera view model for the given immersive camera identifier.
