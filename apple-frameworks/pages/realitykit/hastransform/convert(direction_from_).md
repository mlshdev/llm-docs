> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/convert(direction:from:)](https://developer.apple.com/documentation/realitykit/hastransform/convert(direction:from:))

# convert(direction:from:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Converts a direction vector from the local space of a reference entity to the local space of the entity on which you called this method.

## Declaration

```swift
@MainActor @preconcurrency func convert(direction: SIMD3<Float>, from referenceEntity: Entity?) -> SIMD3<Float>
```

## Parameters

- `direction`: The direction vector specified relative to `referenceEntity`.
- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

<a id="return-value"></a>

## Return Value

The direction vector given in the local space of the entity.

## See Also

### Converting values between coordinate spaces

- [convert(position:from:)](convert%28position_from_%29.md): Converts a position from the local space of a reference entity to the local space of the entity on which you called this method.
- [convert(position:to:)](convert%28position_to_%29.md): Converts a position from the local space of the entity on which you called this method to the local space of a reference entity.
- [convert(direction:to:)](convert%28direction_to_%29.md): Converts a direction vector from the local space of the entity on which you called this method to the local space of a reference entity.
- [convert(normal:from:)](convert%28normal_from_%29.md): Converts a normal vector from the local space of a reference entity to the local space of the entity on which you called this method.
- [convert(normal:to:)](convert%28normal_to_%29.md): Converts a normal vector from the local space of the entity on which you called this method to the local space of a reference entity.
- [convert(transform:from:)](convert%28transform_from_%29.md): Converts the scale, rotation, and position of a transform from the local space of a reference entity to the local space of the entity on which you called this method.
- [convert(transform:to:)](convert%28transform_to_%29.md): Converts the scale, rotation, and position of a transform from the local space of the entity on which you called this method to the local space of a reference entity.
