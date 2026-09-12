> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothgrabcomponent/grabmode/volume(shape:)](https://developer.apple.com/documentation/realitykit/clothgrabcomponent/grabmode/volume(shape:))

# volume(shape:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Grabbing will be performed using a volume of the given shape.

## Declaration

```swift
static func volume(shape: ClothVolumeShape) -> ClothGrabComponent.GrabMode
```

## Parameters

- `shape`: The shape of the volume used to select and drag particles.

<a id="return-value"></a>

## Return Value

A volume-based grab mode.

## See Also

### Creating a grab mode

- [ray](ray.md): Grabbing will be performed using a ray.
