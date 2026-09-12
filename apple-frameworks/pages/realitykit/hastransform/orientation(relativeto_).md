> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/orientation(relativeto:)](https://developer.apple.com/documentation/realitykit/hastransform/orientation(relativeto:))

# orientation(relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Gets the orientation of an entity relative to the given entity.

## Declaration

```swift
@MainActor @preconcurrency func orientation(relativeTo referenceEntity: Entity?) -> simd_quatf
```

## Parameters

- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

<a id="return-value"></a>

## Return Value

The orientation of the entity relative to `referenceEntity`.

## See Also

### Rotating an entity

- [orientation](orientation.md): The rotation of the entity relative to its parent.
- [setOrientation(\_:relativeTo:)](setorientation%28__relativeto_%29.md): Sets the orientation of the entity relative to the given reference entity.
