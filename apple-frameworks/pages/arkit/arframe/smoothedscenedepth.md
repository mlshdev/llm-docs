> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/smoothedscenedepth](https://developer.apple.com/documentation/arkit/arframe/smoothedscenedepth)

# smoothedSceneDepth (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.

## Declaration

```swift
var smoothedSceneDepth: ARDepthData? { get }
```

<a id="Discussion"></a>

## Discussion

This property describes the distance between a device’s camera and objects or areas in the real world, including ARKit’s confidence in the estimated distance. This is similar to [sceneDepth](scenedepth.md) except that the framework smoothes the depth data over time to lessen its frame-to-frame delta.

This property is `nil` by default. Add the [smoothedSceneDepth](../arconfiguration/framesemantics-swift.struct/smoothedscenedepth.md) frame semantic to your configuration’s [frameSemantics](../arconfiguration/framesemantics-swift.property.md) to instruct the framework to populate this value with [ARDepthData](../ardepthdata.md) captured by the LiDAR scanner.

Call [supportsFrameSemantics(\_:)](../arconfiguration/supportsframesemantics%28__%29.md) on your app’s configuration to support smoothed scene depth on select devices and configurations.

## See Also

### Accessing scene data

- [lightEstimate](lightestimate.md): An estimate of lighting conditions based on the camera image.
- [rawFeaturePoints](rawfeaturepoints.md): The current intermediate results of the scene analysis ARKit uses to perform world tracking.
- [capturedDepthData](captureddepthdata.md): Depth data captured in front-camera experiences.
- [capturedDepthDataTimestamp](captureddepthdatatimestamp.md): The time at which depth data for the frame (if any) was captured.
- [sceneDepth](scenedepth.md): Data on the distance between a device’s rear camera and real-world objects in an AR experience.

# smoothedSceneDepth (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) ARDepthData * smoothedSceneDepth;
```

<a id="Discussion"></a>

## Discussion

This property describes the distance between a device’s camera and objects or areas in the real world, including ARKit’s confidence in the estimated distance. This is similar to [sceneDepth](scenedepth.md) except that the framework smoothes the depth data over time to lessen its frame-to-frame delta.

This property is `nil` by default. Add the [ARFrameSemanticSmoothedSceneDepth](../arconfiguration/framesemantics-swift.struct/smoothedscenedepth.md) frame semantic to your configuration’s [frameSemantics](../arconfiguration/framesemantics-swift.property.md) to instruct the framework to populate this value with [ARDepthData](../ardepthdata.md) captured by the LiDAR scanner.

Call [supportsFrameSemantics:](../arconfiguration/supportsframesemantics%28__%29.md) on your app’s configuration to support smoothed scene depth on select devices and configurations.

## See Also

### Accessing scene data

- [lightEstimate](lightestimate.md): An estimate of lighting conditions based on the camera image.
- [rawFeaturePoints](rawfeaturepoints.md): The current intermediate results of the scene analysis ARKit uses to perform world tracking.
- [capturedDepthData](captureddepthdata.md): Depth data captured in front-camera experiences.
- [capturedDepthDataTimestamp](captureddepthdatatimestamp.md): The time at which depth data for the frame (if any) was captured.
- [sceneDepth](scenedepth.md): Data on the distance between a device’s rear camera and real-world objects in an AR experience.
