> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/planedetection-swift.property](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/planedetection-swift.property)

# planeDetection (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The configuration’s plane detection options.

## Declaration

```swift
var planeDetection: ARWorldTrackingConfiguration.PlaneDetection { get set }
```

## Mentioned In

- [Displaying an AR Experience with Metal](../displaying-an-ar-experience-with-metal.md)
- [Understanding World Tracking](../understanding-world-tracking.md)

## See Also

### Tracking Surfaces

- [ARWorldTrackingConfiguration.PlaneDetection](planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.
- [sceneReconstruction](scenereconstruction.md): A flag that enables scene reconstruction.
- [supportsSceneReconstruction(\_:)](supportsscenereconstruction%28__%29.md): Checks if the device supports scene reconstruction.

# planeDetection (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The configuration’s plane detection options.

## Declaration

```objectivec
@property (nonatomic, assign) ARPlaneDetection planeDetection;
```

## Mentioned In

- [Displaying an AR Experience with Metal](../displaying-an-ar-experience-with-metal.md)
- [Understanding World Tracking](../understanding-world-tracking.md)

## See Also

### Tracking Surfaces

- [ARPlaneDetection](planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.
- [sceneReconstruction](scenereconstruction.md): A flag that enables scene reconstruction.
- [supportsSceneReconstruction:](supportsscenereconstruction%28__%29.md): Checks if the device supports scene reconstruction.
