> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hassceneunderstanding](https://developer.apple.com/documentation/realitykit/hassceneunderstanding)

# HasSceneUnderstanding

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 27.0+ · visionOS 1.0+

A specification that detects and reacts to features of the physical environment.

## Declaration

```swift
@MainActor @preconcurrency protocol HasSceneUnderstanding : Entity
```

## Topics

### Understanding the scene

- [sceneUnderstanding](hassceneunderstanding/sceneunderstanding.md): An entity component that detects and reacts to features of the physical environment.

## Relationships

### Inherits From

- [Entity](entity.md)

## See Also

### Scene reconstructions and analysis

- [Creating a game with scene understanding](creating-a-game-with-scene-understanding.md): Create AR games and experiences that interact with real-world objects on LiDAR-equipped iOS devices.
- [Implementing scene understanding and reconstruction in your RealityKit app](realitykit-scene-understanding.md): Detect real-world objects and surfaces to create precise AR interactions.
- [Visualizing and interacting with a reconstructed scene](../arkit/visualizing-and-interacting-with-a-reconstructed-scene.md): Estimate the shape of the physical environment using a polygonal mesh.
- [sceneReconstruction](../arkit/arworldtrackingconfiguration/scenereconstruction.md): A flag that enables scene reconstruction.
- [supportsSceneReconstruction(\_:)](../arkit/arworldtrackingconfiguration/supportsscenereconstruction%28__%29.md): Checks if the device supports scene reconstruction.
- [SceneUnderstandingComponent](sceneunderstandingcomponent.md): A component that specifies an entity is participating in the system’s scene-understanding features.
- [ARView.Environment.SceneUnderstanding](arview/environment-swift.struct/sceneunderstanding-swift.struct.md): An object that holds scene-understanding options for the view.
- [ARView.Environment.SceneUnderstanding.Options](arview/environment-swift.struct/sceneunderstanding-swift.struct/options-swift.struct.md): Available scene-understanding options.
- [SceneReconstructionProvider](../arkit/scenereconstructionprovider.md): A source of live data about the shape of a person’s surroundings.
- [ARSession](../arkit/arsession.md): Deprecated. The object that manages the major tasks associated with every AR experience, such as motion tracking, camera passthrough, and image analysis.
