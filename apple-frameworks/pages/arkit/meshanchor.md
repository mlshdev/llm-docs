> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/meshanchor](https://developer.apple.com/documentation/arkit/meshanchor)

# MeshAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A volume of space that contains a mesh of a person’s surroundings.

## Declaration

```swift
struct MeshAnchor
```

## Topics

### Getting mesh information

- [originFromAnchorTransform](meshanchor/originfromanchortransform.md): The location and orientation of a mesh in world space.
- [geometry](meshanchor/geometry-swift.property.md): The shape of a mesh anchor.
- [MeshAnchor.Geometry](meshanchor/geometry-swift.struct.md): The shapes that make up a mesh anchor.
- [MeshAnchor.MeshClassification](meshanchor/meshclassification.md): Deprecated. The kinds of classification a face of a mesh can have.

### Inspecting mesh anchors

- [id](meshanchor/id.md): The unique identifier of this anchor.
- [description](meshanchor/description.md): A textual representation of this anchor.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](meshanchor/arkitcoordinatespaceproviding-implementations.md)
- [Equatable Implementations](meshanchor/equatable-implementations.md)

## Relationships

### Conforms To

- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md)
- [Anchor](anchor.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scene reconstruction

- [Incorporating real-world surroundings in an immersive experience](../visionos/incorporating-real-world-surroundings-in-an-immersive-experience.md): Create an immersive experience by making your app’s content respond to the local shape of the world.
- [Applying mesh to real-world surroundings](../visionos/applying-mesh-to-real-world-surroundings.md): Add a layer of mesh to objects in the real world, using scene reconstruction in ARKit.
- [Obscuring virtual items in a scene behind real-world items](../visionos/obscuring-virtual-items-in-a-scene-behind-real-world-items.md): Increase the realism of an immersive experience by adding entities with invisible materials real-world objects.
- [SceneReconstructionProvider](scenereconstructionprovider.md): A source of live data about the shape of a person’s surroundings.
