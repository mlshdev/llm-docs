> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/partscollection](https://developer.apple.com/documentation/realitykit/lowlevelmesh/partscollection)

# LowLevelMesh.PartsCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An object that holds a mutable collection low-level mesh parts.

## Declaration

```swift
struct PartsCollection
```

## Topics

### Updating collection contents

- [append(\_:)](partscollection/append%28__%29.md): Adds an element to the end of the collection.
- [append(contentsOf:)](partscollection/append%28contentsof_%29.md): Adds the elements of a sequence or collection to the end of this collection.
- [replaceAll(\_:)](partscollection/replaceall%28__%29.md): Replaces all mesh parts in this collection with those from the new sequence.
- [removeAll()](partscollection/removeall%28%29.md): Removes all mesh parts from this collection.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Updatable meshes

- [Integrating virtual objects with your environment](../integrating-virtual-objects-with-your-environment.md): Create an immersive game using native anchor support, environmental blending, model manipulation, and mesh instance duplication.
- [Creating a spatial drawing app with RealityKit](../creating-a-spatial-drawing-app-with-realitykit.md): Use low-level mesh and texture APIs to achieve fast updates to a person’s brush strokes by integrating RealityKit with ARKit and SwiftUI.
- [Creating a plane with low-level mesh](../creating-a-plane-with-low-level-mesh.md): Create a low-level mesh and set its vertex positions and normals to form a plane.
- [LowLevelMesh](../lowlevelmesh.md): A container for vertex data that you can use to create and update meshes using your own format.
- [LowLevelMesh.Descriptor](descriptor-swift.struct.md): An object that describes the data format and layout of the buffers in a low-level mesh.
- [LowLevelMesh.Part](part.md): An object that describes a range of primitives to display, and their material index.
- [LowLevelMesh.Layout](layout.md): An object that describes a set of attributes that share a buffer index, offset, and stride.
- [LowLevelMesh.Attribute](attribute.md): An object that determines how to store vertex attribute data in memory and map it to RealityKit shader attributes.
- [LowLevelMesh.VertexSemantic](vertexsemantic.md): Designates the intended usage of a vertex attribute.
- [LowLevelBuffer](../lowlevelbuffer.md)
- [LowLevelInstanceData](../lowlevelinstancedata.md)
