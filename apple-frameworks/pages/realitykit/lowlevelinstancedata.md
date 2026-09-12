> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelinstancedata](https://developer.apple.com/documentation/realitykit/lowlevelinstancedata)

# LowLevelInstanceData

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
final class LowLevelInstanceData
```

## Topics

### Initializers

- [init(instanceCount:)](lowlevelinstancedata/init%28instancecount_%29.md): Creates a low-level instance data object with an instance count.
- [init(instanceCount:instanceCapacity:)](lowlevelinstancedata/init%28instancecount_instancecapacity_%29.md): Creates a low-level instance data object with an instance count and capacity.

### Instance Properties

- [instanceCapacity](lowlevelinstancedata/instancecapacity.md): The maximum number of instances this low-level instance data draws when set on a mesh instances component.
- [instanceCount](lowlevelinstancedata/instancecount.md): The current number of instances in this low-level instance data.

### Instance Methods

- [read(using:)](lowlevelinstancedata/read%28using_%29.md): Retrieves the current per instance transform data, for GPU reading.
- [replace(using:)](lowlevelinstancedata/replace%28using_%29.md): Retrieves a Metal buffer that you can use to replace the per instance transform data on GPU using Metal.
- [replaceMutableTransforms(\_:)](lowlevelinstancedata/replacemutabletransforms%28__%29.md): Replaces the per instance transform data synchronously on the CPU.
- [withMutableTransforms(\_:)](lowlevelinstancedata/withmutabletransforms%28__%29.md): Updates the per instance transform data synchronously on the CPU.
- [withTransforms(\_:)](lowlevelinstancedata/withtransforms%28__%29.md): Reads the per instance transform data synchronously on the CPU.

## See Also

### Updatable meshes

- [Integrating virtual objects with your environment](integrating-virtual-objects-with-your-environment.md): Create an immersive game using native anchor support, environmental blending, model manipulation, and mesh instance duplication.
- [Creating a spatial drawing app with RealityKit](creating-a-spatial-drawing-app-with-realitykit.md): Use low-level mesh and texture APIs to achieve fast updates to a person’s brush strokes by integrating RealityKit with ARKit and SwiftUI.
- [Creating a plane with low-level mesh](creating-a-plane-with-low-level-mesh.md): Create a low-level mesh and set its vertex positions and normals to form a plane.
- [LowLevelMesh](lowlevelmesh.md): A container for vertex data that you can use to create and update meshes using your own format.
- [LowLevelMesh.Descriptor](lowlevelmesh/descriptor-swift.struct.md): An object that describes the data format and layout of the buffers in a low-level mesh.
- [LowLevelMesh.Part](lowlevelmesh/part.md): An object that describes a range of primitives to display, and their material index.
- [LowLevelMesh.Layout](lowlevelmesh/layout.md): An object that describes a set of attributes that share a buffer index, offset, and stride.
- [LowLevelMesh.Attribute](lowlevelmesh/attribute.md): An object that determines how to store vertex attribute data in memory and map it to RealityKit shader attributes.
- [LowLevelMesh.VertexSemantic](lowlevelmesh/vertexsemantic.md): Designates the intended usage of a vertex attribute.
- [LowLevelMesh.PartsCollection](lowlevelmesh/partscollection.md): An object that holds a mutable collection low-level mesh parts.
- [LowLevelBuffer](lowlevelbuffer.md)
