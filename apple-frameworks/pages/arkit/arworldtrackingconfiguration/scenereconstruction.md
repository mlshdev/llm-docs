> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/scenereconstruction](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/scenereconstruction)

# sceneReconstruction (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

A flag that enables scene reconstruction.

## Declaration

```swift
var sceneReconstruction: ARConfiguration.SceneReconstruction { get set }
```

<a id="Discussion"></a>

## Discussion

When you enable scene reconstruction, ARKit provides a polygonal mesh that estimates the shape of the physical environment. Before setting this property, call [supportsSceneReconstruction(\_:)](supportsscenereconstruction%28__%29.md) to ensure device support. For a sample app that demonstrates scene reconstruction, see [Visualizing and interacting with a reconstructed scene](../visualizing-and-interacting-with-a-reconstructed-scene.md).

If you enable plane detection, ARKit applies that information to the mesh. Where the LiDAR scanner may produce a slightly uneven mesh on a real-world surface, ARKit smooths out the mesh where it detects a plane on that surface.

If you enable people occlusion, ARKit adjusts the mesh according to any people it detects in the camera feed. ARKit removes any part of the scene mesh that overlaps with people, as defined by the [personSegmentation](../arconfiguration/framesemantics-swift.struct/personsegmentation.md) or [personSegmentationWithDepth](../arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md) frame semantics.

## See Also

### Tracking Surfaces

- [planeDetection](planedetection-swift.property.md): The configuration’s plane detection options.
- [ARWorldTrackingConfiguration.PlaneDetection](planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.
- [supportsSceneReconstruction(\_:)](supportsscenereconstruction%28__%29.md): Checks if the device supports scene reconstruction.

# sceneReconstruction (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

A flag that enables scene reconstruction.

## Declaration

```objectivec
@property (nonatomic, assign) ARSceneReconstruction sceneReconstruction;
```

<a id="Discussion"></a>

## Discussion

When you enable scene reconstruction, ARKit provides a polygonal mesh that estimates the shape of the physical environment. Before setting this property, call [supportsSceneReconstruction:](supportsscenereconstruction%28__%29.md) to ensure device support. For a sample app that demonstrates scene reconstruction, see [Visualizing and interacting with a reconstructed scene](../visualizing-and-interacting-with-a-reconstructed-scene.md).

If you enable plane detection, ARKit applies that information to the mesh. Where the LiDAR scanner may produce a slightly uneven mesh on a real-world surface, ARKit smooths out the mesh where it detects a plane on that surface.

If you enable people occlusion, ARKit adjusts the mesh according to any people it detects in the camera feed. ARKit removes any part of the scene mesh that overlaps with people, as defined by the [ARFrameSemanticPersonSegmentation](../arconfiguration/framesemantics-swift.struct/personsegmentation.md) or [ARFrameSemanticPersonSegmentationWithDepth](../arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md) frame semantics.

## See Also

### Tracking Surfaces

- [planeDetection](planedetection-swift.property.md): The configuration’s plane detection options.
- [ARPlaneDetection](planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.
- [supportsSceneReconstruction:](supportsscenereconstruction%28__%29.md): Checks if the device supports scene reconstruction.
