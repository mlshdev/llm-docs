> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/position(relativeto:)](https://developer.apple.com/documentation/realitykit/hastransform/position(relativeto:))

# position(relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Gets the position of an entity relative to the given entity.

## Declaration

```swift
@MainActor @preconcurrency func position(relativeTo referenceEntity: Entity?) -> SIMD3<Float>
```

## Parameters

- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

<a id="return-value"></a>

## Return Value

The position of the entity relative to `referenceEntity`.

## See Also

### Positioning an entity

- [position](position.md): The position of the entity relative to its parent.
- [setPosition(\_:relativeTo:)](setposition%28__relativeto_%29.md): Sets the position of the entity relative to the given reference entity.
