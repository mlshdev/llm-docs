> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/setorientation(_:relativeto:)](https://developer.apple.com/documentation/realitykit/hastransform/setorientation(_:relativeto:))

# setOrientation(\_:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Sets the orientation of the entity relative to the given reference entity.

## Declaration

```swift
@MainActor @preconcurrency func setOrientation(_ orientation: simd_quatf, relativeTo referenceEntity: Entity?)
```

## Parameters

- `orientation`: A new orientation, relative to `referenceEntity`.
- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

## See Also

### Rotating an entity

- [orientation](orientation.md): The rotation of the entity relative to its parent.
- [orientation(relativeTo:)](orientation%28relativeto_%29.md): Gets the orientation of an entity relative to the given entity.
