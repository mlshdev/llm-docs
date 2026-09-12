> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource/iswatertight](https://developer.apple.com/documentation/realitykit/clothmeshresource/iswatertight)

# isWatertight

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Indicates whether the mesh is “watertight”.

## Declaration

```swift
final var isWatertight: Bool { get }
```

<a id="discussion"></a>

## Discussion

A mesh is watertight if the faces form a fully-closed volume (without gaps). A watertight mesh is required for bodies to be inflatable, and is also the reason why [volume](volume.md) will only return a non-nil value for watertight meshes.

If you want your body to be inflatable (by setting [inflationConstraint](../clothbodycomponent/inflationconstraint-swift.property.md)), the body mesh needs to be watertight.

## See Also

### Inspecting mesh geometry

- [volume](volume.md): The volume of the mesh, or `nil` if the mesh is not watertight.
