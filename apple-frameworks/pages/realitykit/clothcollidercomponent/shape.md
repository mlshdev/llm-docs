> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollidercomponent/shape](https://developer.apple.com/documentation/realitykit/clothcollidercomponent/shape)

# shape

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The (simulation) shape of the collider.

## Declaration

```swift
var shape: ClothColliderShape { get set }
```

<a id="discussion"></a>

## Discussion

The shape type cannot be changed after creation. Assigning a shape of a different type will be silently ignored. To use a different shape type, create a new component.

The dynamic shape might differ from the static shape in the case of a mesh shape. One such scenario is when the mesh shape was created using a low-level mesh. In this scenario, the dynamic shape will try to match the low-level mesh. Moreover, if the entity has a `ModelComponent` with a visual mesh that was not created using a low-level mesh, then it too will try to match the low-level mesh. Another scenario is when the entity has a `ModelComponent` and the shape was not created using a low-level mesh. In this scenario, the dynamic shape will try to match the visual mesh in `ModelComponent`.

## See Also

### Configuring the collider shape

- [materialNames](materialnames.md): The names of the collider materials used by this collider.
