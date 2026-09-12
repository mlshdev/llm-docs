> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/scale(relativeto:)](https://developer.apple.com/documentation/realitykit/hastransform/scale(relativeto:))

# scale(relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Gets the scale of an entity relative to the given entity.

## Declaration

```swift
@MainActor @preconcurrency func scale(relativeTo referenceEntity: Entity?) -> SIMD3<Float>
```

## Parameters

- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

## See Also

### Scaling an entity

- [scale](scale.md): The scale of the entity relative to its parent.
- [setScale(\_:relativeTo:)](setscale%28__relativeto_%29.md): Sets the scale factor of the entity relative to the given reference entity.
