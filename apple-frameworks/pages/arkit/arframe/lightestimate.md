> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/lightestimate](https://developer.apple.com/documentation/arkit/arframe/lightestimate)

# lightEstimate (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An estimate of lighting conditions based on the camera image.

## Declaration

```swift
var lightEstimate: ARLightEstimate? { get }
```

<a id="Discussion"></a>

## Discussion

If you render your own overlay graphics for the AR scene, you can use this information in shading algorithms to help make those graphics match the real-world lighting conditions of the scene captured by the camera. (The [ARSCNView](../arscnview.md) class automatically uses this information to configure SceneKit lighting.)

This property’s value is `nil` if the [isLightEstimationEnabled](../arconfiguration/islightestimationenabled.md) property of the session configuration that captured this frame is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing scene data

- [rawFeaturePoints](rawfeaturepoints.md): The current intermediate results of the scene analysis ARKit uses to perform world tracking.
- [capturedDepthData](captureddepthdata.md): Depth data captured in front-camera experiences.
- [capturedDepthDataTimestamp](captureddepthdatatimestamp.md): The time at which depth data for the frame (if any) was captured.
- [sceneDepth](scenedepth.md): Data on the distance between a device’s rear camera and real-world objects in an AR experience.
- [smoothedSceneDepth](smoothedscenedepth.md): An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.

# lightEstimate (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An estimate of lighting conditions based on the camera image.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) ARLightEstimate * lightEstimate;
```

<a id="Discussion"></a>

## Discussion

If you render your own overlay graphics for the AR scene, you can use this information in shading algorithms to help make those graphics match the real-world lighting conditions of the scene captured by the camera. (The [ARSCNView](../arscnview.md) class automatically uses this information to configure SceneKit lighting.)

This property’s value is `nil` if the [lightEstimationEnabled](../arconfiguration/islightestimationenabled.md) property of the session configuration that captured this frame is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing scene data

- [rawFeaturePoints](rawfeaturepoints.md): The current intermediate results of the scene analysis ARKit uses to perform world tracking.
- [capturedDepthData](captureddepthdata.md): Depth data captured in front-camera experiences.
- [capturedDepthDataTimestamp](captureddepthdatatimestamp.md): The time at which depth data for the frame (if any) was captured.
- [sceneDepth](scenedepth.md): Data on the distance between a device’s rear camera and real-world objects in an AR experience.
- [smoothedSceneDepth](smoothedscenedepth.md): An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.
