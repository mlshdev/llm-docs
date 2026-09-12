> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/align(_:to:)](https://developer.apple.com/documentation/realitykit/hastransform/align(_:to:))

# align(\_:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Moves and rotates the entity by a transformation from the origin pin to the target pin.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency func align(_ originPin: GeometricPin, to targetPin: GeometricPin) -> float4x4?
```

## Parameters

- `originPin`: The `GeometricPin` to align. It should be one of the pins on the entity.
- `targetPin`: The `GeometricPin` to align to.

<a id="return-value"></a>

## Return Value

Transformation matrix that has been applied to the `Entity`, in the frame or reference of the parent of the `Entity`. If either pin doesn’t exist, returns `nil`.

## See Also

### Moving an entity

- [move(to:relativeTo:)](move%28to_relativeto_%29-6lohd.md): Moves an entity instantly to a new location given by a transform.
- [move(to:relativeTo:)](move%28to_relativeto_%29-6jul8.md): Moves an entity instantly to a new location given by a 4x4 matrix.
- [look(at:from:upVector:relativeTo:)](look%28at_from_upvector_relativeto_%29.md): Positions and orients the entity to look at a target from a given position.
- [look(at:from:upVector:relativeTo:forward:)](look%28at_from_upvector_relativeto_forward_%29.md): Positions and orients the entity such that it looks at certain target from a give position.
