> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/environment-swift.struct/sceneunderstanding-swift.struct/options-swift.struct](https://developer.apple.com/documentation/realitykit/arview/environment-swift.struct/sceneunderstanding-swift.struct/options-swift.struct)

# ARView.Environment.SceneUnderstanding.Options

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+

Available scene-understanding options.

## Declaration

```swift
struct Options
```

## Topics

### Type Properties

- [collision](options-swift.struct/collision.md): The `.collision` option means that the reconstructed geometry can be used for collision queries (i.e. raycasting)
- [default](options-swift.struct/default.md): The `.default` options is a sentinel value that indicates the user wants whatever scene-understanding features work with the current device and are supported. It overrides other options in the options set.
- [occlusion](options-swift.struct/occlusion.md): The `.occlusion` option means that the reconstructed geometry will be used for rendering, but only to update the depth buffer. Parts of virtual objects which are behind the reconstructed geometry are not rendered.
- [physics](options-swift.struct/physics.md): No abstract
- [receivesLighting](options-swift.struct/receiveslighting.md): The `.receivesLighting` option means that the virtual lights will interact with real world surfaces causing them to shine. The properties of the mesh will be set to a default material.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Scene reconstructions and analysis

- [Creating a game with scene understanding](../../../creating-a-game-with-scene-understanding.md): Create AR games and experiences that interact with real-world objects on LiDAR-equipped iOS devices.
- [Implementing scene understanding and reconstruction in your RealityKit app](../../../realitykit-scene-understanding.md): Detect real-world objects and surfaces to create precise AR interactions.
- [Visualizing and interacting with a reconstructed scene](../../../../arkit/visualizing-and-interacting-with-a-reconstructed-scene.md): Estimate the shape of the physical environment using a polygonal mesh.
- [sceneReconstruction](../../../../arkit/arworldtrackingconfiguration/scenereconstruction.md): A flag that enables scene reconstruction.
- [supportsSceneReconstruction(\_:)](../../../../arkit/arworldtrackingconfiguration/supportsscenereconstruction%28__%29.md): Checks if the device supports scene reconstruction.
- [SceneUnderstandingComponent](../../../sceneunderstandingcomponent.md): A component that specifies an entity is participating in the system’s scene-understanding features.
- [ARView.Environment.SceneUnderstanding](../sceneunderstanding-swift.struct.md): An object that holds scene-understanding options for the view.
- [HasSceneUnderstanding](../../../hassceneunderstanding.md): A specification that detects and reacts to features of the physical environment.
- [SceneReconstructionProvider](../../../../arkit/scenereconstructionprovider.md): A source of live data about the shape of a person’s surroundings.
- [ARSession](../../../../arkit/arsession.md): Deprecated. The object that manages the major tasks associated with every AR experience, such as motion tracking, camera passthrough, and image analysis.
