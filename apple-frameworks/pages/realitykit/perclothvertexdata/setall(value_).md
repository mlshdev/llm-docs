> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/perclothvertexdata/setall(value:)](https://developer.apple.com/documentation/realitykit/perclothvertexdata/setall(value:))

# setAll(value:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Sets the data for all vertices to a common value.

## Declaration

```swift
mutating func setAll(value: ElementType)
```

## Parameters

- `value`: The value to assign to every vertex.

## See Also

### Setting vertex values

- [set(vertexIndices:value:)](set%28vertexindices_value_%29.md): Sets the data for the given vertex indices to a common value.
- [reset()](reset%28%29-1nlsc.md): Conforms when `ElementType` is `ClothBodyComponent.TargetShape.PositionConstraint`. Resets the per-vertex data of each vertex to the default position constraint.
- [reset()](reset%28%29-403m8.md): Conforms when `ElementType` is `ClothBodyComponent.ExternalForce`. Resets the per-vertex data of each vertex to a zero-force external force.
- [reset()](reset%28%29-4x5xi.md): Conforms when `ElementType` is `ClothBodyComponent.ParticleMotionType`. Resets the per-vertex data of each vertex to the default motion type.
