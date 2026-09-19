> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothgrabcomponent/grabmode

# ClothGrabComponent.GrabMode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Defines whether a grab component will select particles using a ray or a volume.

## Declaration

```swift
struct GrabMode
```

## Topics

### Creating a grab mode

- [ray](grabmode/ray.md): Grabbing will be performed using a ray.
- [volume(shape:)](grabmode/volume%28shape_%29.md): Grabbing will be performed using a volume of the given shape.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a grab component

- [init(mode:)](init%28mode_%29.md): Creates a cloth grab component with the given grab mode.
