> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/rawfeaturepoints](https://developer.apple.com/documentation/arkit/arframe/rawfeaturepoints)

# rawFeaturePoints (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The current intermediate results of the scene analysis ARKit uses to perform world tracking.

## Declaration

```swift
var rawFeaturePoints: ARPointCloud? { get }
```

<a id="Discussion"></a>

## Discussion

These points represent notable features detected in the camera image. Their positions in 3D world coordinate space are extrapolated as part of the image analysis that ARKit performs in order to accurately track the device’s position, orientation, and movement. Taken together, these points loosely correlate to the contours of real-world objects in view of the camera.

ARKit does not guarantee that the number and arrangement of raw feature points will remain stable between software releases, or even between subsequent frames in the same session. Regardless, the point cloud can sometimes prove useful when debugging your app’s placement of virtual objects into the real-world scene.

If you display AR content with SceneKit using the [ARSCNView](../arscnview.md) class, you can display this point cloud with the [ARSCNDebugOptionShowFeaturePoints](../arscndebugoptionshowfeaturepoints.md) debug option.

Feature point detection requires a [ARWorldTrackingConfiguration](../arworldtrackingconfiguration.md) session.

## See Also

### Accessing scene data

- [lightEstimate](lightestimate.md): An estimate of lighting conditions based on the camera image.
- [capturedDepthData](captureddepthdata.md): Depth data captured in front-camera experiences.
- [capturedDepthDataTimestamp](captureddepthdatatimestamp.md): The time at which depth data for the frame (if any) was captured.
- [sceneDepth](scenedepth.md): Data on the distance between a device’s rear camera and real-world objects in an AR experience.
- [smoothedSceneDepth](smoothedscenedepth.md): An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.

# rawFeaturePoints (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The current intermediate results of the scene analysis ARKit uses to perform world tracking.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) ARPointCloud * rawFeaturePoints;
```

<a id="Discussion"></a>

## Discussion

These points represent notable features detected in the camera image. Their positions in 3D world coordinate space are extrapolated as part of the image analysis that ARKit performs in order to accurately track the device’s position, orientation, and movement. Taken together, these points loosely correlate to the contours of real-world objects in view of the camera.

ARKit does not guarantee that the number and arrangement of raw feature points will remain stable between software releases, or even between subsequent frames in the same session. Regardless, the point cloud can sometimes prove useful when debugging your app’s placement of virtual objects into the real-world scene.

If you display AR content with SceneKit using the [ARSCNView](../arscnview.md) class, you can display this point cloud with the [ARSCNDebugOptionShowFeaturePoints](../arscndebugoptionshowfeaturepoints.md) debug option.

Feature point detection requires a [ARWorldTrackingConfiguration](../arworldtrackingconfiguration.md) session.

## See Also

### Accessing scene data

- [lightEstimate](lightestimate.md): An estimate of lighting conditions based on the camera image.
- [capturedDepthData](captureddepthdata.md): Depth data captured in front-camera experiences.
- [capturedDepthDataTimestamp](captureddepthdatatimestamp.md): The time at which depth data for the frame (if any) was captured.
- [sceneDepth](scenedepth.md): Data on the distance between a device’s rear camera and real-world objects in an AR experience.
- [smoothedSceneDepth](smoothedscenedepth.md): An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.
