> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/supportsscenereconstruction(_:)](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/supportsscenereconstruction(_:))

# supportsSceneReconstruction(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Checks if the device supports scene reconstruction.

## Declaration

```swift
class func supportsSceneReconstruction(_ sceneReconstruction: ARConfiguration.SceneReconstruction) -> Bool
```

<a id="Discussion"></a>

## Discussion

Scene reconstruction requires a device with a LiDAR Scanner, such as the fourth-generation iPad Pro.

## See Also

### Tracking Surfaces

- [planeDetection](planedetection-swift.property.md): The configuration’s plane detection options.
- [ARWorldTrackingConfiguration.PlaneDetection](planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.
- [sceneReconstruction](scenereconstruction.md): A flag that enables scene reconstruction.

# supportsSceneReconstruction: (Objective-C)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Checks if the device supports scene reconstruction.

## Declaration

```objectivec
+ (BOOL) supportsSceneReconstruction:(ARSceneReconstruction) sceneReconstruction;
```

<a id="Discussion"></a>

## Discussion

Scene reconstruction requires a device with a LiDAR Scanner, such as the fourth-generation iPad Pro.

## See Also

### Tracking Surfaces

- [planeDetection](planedetection-swift.property.md): The configuration’s plane detection options.
- [ARPlaneDetection](planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.
- [sceneReconstruction](scenereconstruction.md): A flag that enables scene reconstruction.
