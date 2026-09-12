> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/colliderbinding-swift.struct/sourcecollider](https://developer.apple.com/documentation/realitykit/clothbodycomponent/colliderbinding-swift.struct/sourcecollider)

# sourceCollider

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The entity containing the mesh-shaped collider that the body will bind to.

## Declaration

```swift
var sourceCollider: Entity?
```

<a id="discussion"></a>

## Discussion

For the binding to be successful, the entity must contain a `ClothColliderComponent` with a *mesh* collision shape.

## See Also

### Binding the collider

- [isEnabled](isenabled.md): Indicates whether the cloth body should actively bind to the mesh collider.
