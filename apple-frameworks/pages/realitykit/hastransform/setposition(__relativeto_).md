> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/setposition(_:relativeto:)](https://developer.apple.com/documentation/realitykit/hastransform/setposition(_:relativeto:))

# setPosition(\_:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Sets the position of the entity relative to the given reference entity.

## Declaration

```swift
@MainActor @preconcurrency func setPosition(_ position: SIMD3<Float>, relativeTo referenceEntity: Entity?)
```

## Parameters

- `position`: A new position, relative to `referenceEntity`.
- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

## See Also

### Positioning an entity

- [position](position.md): The position of the entity relative to its parent.
- [position(relativeTo:)](position%28relativeto_%29.md): Gets the position of an entity relative to the given entity.
