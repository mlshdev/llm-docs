> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/captureddepthdatatimestamp](https://developer.apple.com/documentation/arkit/arframe/captureddepthdatatimestamp)

# capturedDepthDataTimestamp (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The time at which depth data for the frame (if any) was captured.

## Declaration

```swift
var capturedDepthDataTimestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Face-based AR (see [ARFaceTrackingConfiguration](../arfacetrackingconfiguration.md)) uses the front-facing, depth-sensing camera on compatible devices. When running such a configuration, frames vended by the session contain a depth map captured by the depth camera in addition to the color pixel buffer (see capturedImage) captured by the color camera. This property’s value is always zero when running other AR configurations.

The depth-sensing camera provides data at a different frame rate than the color camera, so this property’s value may not exactly match the [timestamp](timestamp.md) property for the image captured by the color camera, and can also be zero if no depth data was captured at the same time as the current color image.

## See Also

### Accessing scene data

- [lightEstimate](lightestimate.md): An estimate of lighting conditions based on the camera image.
- [rawFeaturePoints](rawfeaturepoints.md): The current intermediate results of the scene analysis ARKit uses to perform world tracking.
- [capturedDepthData](captureddepthdata.md): Depth data captured in front-camera experiences.
- [sceneDepth](scenedepth.md): Data on the distance between a device’s rear camera and real-world objects in an AR experience.
- [smoothedSceneDepth](smoothedscenedepth.md): An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.

# capturedDepthDataTimestamp (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The time at which depth data for the frame (if any) was captured.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval capturedDepthDataTimestamp;
```

<a id="Discussion"></a>

## Discussion

Face-based AR (see [ARFaceTrackingConfiguration](../arfacetrackingconfiguration.md)) uses the front-facing, depth-sensing camera on compatible devices. When running such a configuration, frames vended by the session contain a depth map captured by the depth camera in addition to the color pixel buffer (see capturedImage) captured by the color camera. This property’s value is always zero when running other AR configurations.

The depth-sensing camera provides data at a different frame rate than the color camera, so this property’s value may not exactly match the [timestamp](timestamp.md) property for the image captured by the color camera, and can also be zero if no depth data was captured at the same time as the current color image.

## See Also

### Accessing scene data

- [lightEstimate](lightestimate.md): An estimate of lighting conditions based on the camera image.
- [rawFeaturePoints](rawfeaturepoints.md): The current intermediate results of the scene analysis ARKit uses to perform world tracking.
- [capturedDepthData](captureddepthdata.md): Depth data captured in front-camera experiences.
- [sceneDepth](scenedepth.md): Data on the distance between a device’s rear camera and real-world objects in an AR experience.
- [smoothedSceneDepth](smoothedscenedepth.md): An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.
