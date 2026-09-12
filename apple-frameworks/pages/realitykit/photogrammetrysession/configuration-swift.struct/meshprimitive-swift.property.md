> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/configuration-swift.struct/meshprimitive-swift.property](https://developer.apple.com/documentation/realitykit/photogrammetrysession/configuration-swift.struct/meshprimitive-swift.property)

# meshPrimitive

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

On macOS, this property can be used to change the output geometry mesh primitive for all output geometry in the session, regardless of `Detail` setting. This will also change the mesh primitives in both OBJ and USD outputs. By default, triangle meshes are created.

## Declaration

```swift
var meshPrimitive: PhotogrammetrySession.Configuration.MeshPrimitive
```
