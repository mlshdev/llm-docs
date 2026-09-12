> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/scenereconstructionprovider](https://developer.apple.com/documentation/arkit/scenereconstructionprovider)

# SceneReconstructionProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 1.0+

A source of live data about the shape of a person’s surroundings.

## Declaration

```swift
final class SceneReconstructionProvider
```

## Topics

### Creating a scene reconstruction provider

- [init(modes:)](scenereconstructionprovider/init%28modes_%29.md): Creates a provider that reconstructs a person’s surroundings.
- [modes](scenereconstructionprovider/modes.md): The modes of scene reconstruction a provider supplies.
- [SceneReconstructionProvider.Mode](scenereconstructionprovider/mode.md): The additional kinds of information you can request about a person’s surroundings.
- [isSupported](scenereconstructionprovider/issupported.md): A Boolean value that indicates whether the current runtime environment supports scene reconstruction providers.

### Observing scene reconstruction

- [anchorUpdates](scenereconstructionprovider/anchorupdates.md): An asynchronous sequence of updates to scene meshes that the scene reconstruction provider detects.
- [state](scenereconstructionprovider/state.md): A value that indicates whether the scene reconstruction provider is currently supplying anchor updates.

### Inspecting a scene reconstruction provider

- [description](scenereconstructionprovider/description.md): A textual representation of this scene reconstruction provider.
- [allAnchors](scenereconstructionprovider/allanchors.md): An array that contains the mesh anchors the scene reconstruction provider is tracking.
- [requiredAuthorizations](scenereconstructionprovider/requiredauthorizations.md): The types of authorizations necessary for running scene reconstruction.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scene reconstruction

- [Incorporating real-world surroundings in an immersive experience](../visionos/incorporating-real-world-surroundings-in-an-immersive-experience.md): Create an immersive experience by making your app’s content respond to the local shape of the world.
- [Applying mesh to real-world surroundings](../visionos/applying-mesh-to-real-world-surroundings.md): Add a layer of mesh to objects in the real world, using scene reconstruction in ARKit.
- [Obscuring virtual items in a scene behind real-world items](../visionos/obscuring-virtual-items-in-a-scene-behind-real-world-items.md): Increase the realism of an immersive experience by adding entities with invisible materials real-world objects.
- [MeshAnchor](meshanchor.md): A volume of space that contains a mesh of a person’s surroundings.
