> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/scenedepth](https://developer.apple.com/documentation/arkit/arframe/scenedepth)

# sceneDepth (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Data on the distance between a device’s rear camera and real-world objects in an AR experience.

## Declaration

```swift
var sceneDepth: ARDepthData? { get }
```

<a id="Discussion"></a>

## Discussion

This property describes the distance between a device’s camera and objects or areas in the real world, including ARKit’s confidence in the estimated distance.

This property is `nil` by default. Add the [sceneDepth](../arconfiguration/framesemantics-swift.struct/scenedepth.md) frame semantic to your configuration’s [frameSemantics](../arconfiguration/framesemantics-swift.property.md) to instruct the framework to populate this value with [ARDepthData](../ardepthdata.md) captured by the LiDAR scanner.

Call [supportsFrameSemantics(\_:)](../arconfiguration/supportsframesemantics%28__%29.md) on your app’s configuration to support scene depth on select devices and configurations.

## See Also

### Accessing scene data

- [lightEstimate](lightestimate.md): An estimate of lighting conditions based on the camera image.
- [rawFeaturePoints](rawfeaturepoints.md): The current intermediate results of the scene analysis ARKit uses to perform world tracking.
- [capturedDepthData](captureddepthdata.md): Depth data captured in front-camera experiences.
- [capturedDepthDataTimestamp](captureddepthdatatimestamp.md): The time at which depth data for the frame (if any) was captured.
- [smoothedSceneDepth](smoothedscenedepth.md): An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.

# sceneDepth (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Data on the distance between a device’s rear camera and real-world objects in an AR experience.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) ARDepthData * sceneDepth;
```

<a id="Discussion"></a>

## Discussion

This property describes the distance between a device’s camera and objects or areas in the real world, including ARKit’s confidence in the estimated distance.

This property is `nil` by default. Add the [ARFrameSemanticSceneDepth](../arconfiguration/framesemantics-swift.struct/scenedepth.md) frame semantic to your configuration’s [frameSemantics](../arconfiguration/framesemantics-swift.property.md) to instruct the framework to populate this value with [ARDepthData](../ardepthdata.md) captured by the LiDAR scanner.

Call [supportsFrameSemantics:](../arconfiguration/supportsframesemantics%28__%29.md) on your app’s configuration to support scene depth on select devices and configurations.

## See Also

### Accessing scene data

- [lightEstimate](lightestimate.md): An estimate of lighting conditions based on the camera image.
- [rawFeaturePoints](rawfeaturepoints.md): The current intermediate results of the scene analysis ARKit uses to perform world tracking.
- [capturedDepthData](captureddepthdata.md): Depth data captured in front-camera experiences.
- [capturedDepthDataTimestamp](captureddepthdatatimestamp.md): The time at which depth data for the frame (if any) was captured.
- [smoothedSceneDepth](smoothedscenedepth.md): An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.
