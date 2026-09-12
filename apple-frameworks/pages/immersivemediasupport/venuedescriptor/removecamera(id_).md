> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/venuedescriptor/removecamera(id:)](https://developer.apple.com/documentation/immersivemediasupport/venuedescriptor/removecamera(id:))

# removeCamera(id:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Removes an immersive camera definition from the venue descriptor.

## Declaration

```swift
final func removeCamera(id: String) throws
```

## Parameters

- `id`: The ID of the camera being removed.

## See Also

### Configuring cameras

- [cameras](cameras.md): An array of all the immersive cameras contained in the venue descriptor (both original and dynamic).
- [addCamera(\_:)](addcamera%28__%29.md): Adds a new immersive camera definition to the venue descriptor.
- [cameraViewModel(for:)](cameraviewmodel%28for_%29.md): Returns the camera view model for the given immersive camera identifier.
