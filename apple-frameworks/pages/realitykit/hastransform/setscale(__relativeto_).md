> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/setscale(_:relativeto:)](https://developer.apple.com/documentation/realitykit/hastransform/setscale(_:relativeto:))

# setScale(\_:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Sets the scale factor of the entity relative to the given reference entity.

## Declaration

```swift
@MainActor @preconcurrency func setScale(_ scale: SIMD3<Float>, relativeTo referenceEntity: Entity?)
```

## Parameters

- `scale`: A new scale factor, relative to `referenceEntity`.
- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

## See Also

### Scaling an entity

- [scale](scale.md): The scale of the entity relative to its parent.
- [scale(relativeTo:)](scale%28relativeto_%29.md): Gets the scale of an entity relative to the given entity.
